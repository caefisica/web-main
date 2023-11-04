package main

import (
	"bufio"
  "strings"
	"context"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/chromedp/cdproto/browser"
	"github.com/chromedp/chromedp"
)

func loadEnv(filename string) error {
	file, err := os.Open(filename)
	if err != nil {
			return err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
			line := scanner.Text()
			if len(line) == 0 || line[0] == '#' {
					continue
			}

			parts := strings.SplitN(line, "=", 2)
			if len(parts) != 2 {
					continue
			}

			key := parts[0]
			value := parts[1]
			os.Setenv(key, value)
	}

	return scanner.Err()
}

func main() {
	log.Println("Cargando archivo .env...")
	err := loadEnv(".env")
	if err != nil {
			log.Fatal("Error cargando el archivo .env")
	}

	email := os.Getenv("OVERLEAF_EMAIL")
	password := os.Getenv("OVERLEAF_PASSWORD")

	log.Println("Variables de entorno cargadas correctamente")

	projectURL := "https://www.overleaf.com/project/642bf7a5c1587fd0745b6713"
	downloadURL := projectURL + "/download/zip"

	log.Println("Inicializando contexto del navegador...")
	allocatorContext, cancel := chromedp.NewExecAllocator(context.Background(), append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.Flag("headless", false),
	)...)
	defer cancel()

	ctx, cancel := chromedp.NewContext(
		allocatorContext,
		chromedp.WithLogf(log.Printf),
	)
	defer cancel()

	ctx, cancel = context.WithTimeout(ctx, 60*time.Second)
	defer cancel()

	done := make(chan string, 1)
	chromedp.ListenTarget(ctx, func(v interface{}) {
			if ev, ok := v.(*browser.EventDownloadProgress); ok {
					if ev.State == browser.DownloadProgressStateCompleted {
							done <- ev.GUID
					}
			}
	})

	wd, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Navegando a la página de inicio de sesión de Overleaf...")
	if err := chromedp.Run(ctx, chromedp.Tasks{
		chromedp.Navigate("https://www.overleaf.com/login"),
		chromedp.WaitVisible(`#email`, chromedp.ByID),
		chromedp.SendKeys(`#email`, email, chromedp.ByID),
		chromedp.WaitVisible(`#password`, chromedp.ByID),
		chromedp.SendKeys(`#password`, password, chromedp.ByID),
		chromedp.Click(`button[type=submit]`, chromedp.ByQuery),
		chromedp.WaitVisible(`#new-project-button-sidebar`, chromedp.ByID),
	}); err != nil {
			log.Fatalf("Error iniciando sesión: %v", err)
	}

	log.Println("Inicio de sesión exitoso. Preparando configuración de descarga...")
	if err := chromedp.Run(ctx, browser.SetDownloadBehavior(browser.SetDownloadBehaviorBehaviorAllowAndName).
			WithDownloadPath(wd).
			WithEventsEnabled(true)); err != nil {
			log.Fatalf("Error al establecer el comportamiento de descarga: %v", err)
	}

	log.Println("Navegando a la URL de descarga...")
	if err := chromedp.Run(ctx, chromedp.Tasks{
			chromedp.Navigate(downloadURL),
	}); err != nil {
			log.Fatalf("Error al ir a la URL de descarga: %v", err)
	}

	log.Println("Esperando a que se complete la descarga...")

	select {
	case guid := <-done:
			log.Printf("Descarga completada. Archivo descargado: %s", filepath.Join(wd, guid))
	case <-time.After(60 * time.Second):
			log.Fatal("Error: El tiempo de espera para la descarga ha excedido el límite.")
	}
}
