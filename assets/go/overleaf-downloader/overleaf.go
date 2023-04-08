package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/chromedp/cdproto/browser"
	"github.com/chromedp/chromedp"
)

func main() {
	projectURL := "https://www.overleaf.com/project/642bf7a5c1587fd0745b6713"
	downloadURL := projectURL + "/download/zip"

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
			completed := "(unknown)"
			if ev.TotalBytes != 0 {
				completed = fmt.Sprintf("%0.2f%%", ev.ReceivedBytes/ev.TotalBytes*100.0)
			}
			log.Printf("Estado: %s, completado: %s\n", ev.State.String(), completed)
			if ev.State == browser.DownloadProgressStateCompleted {
				done <- ev.GUID
				close(done)
			}
		}
	})

	wd, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	if err := chromedp.Run(ctx, chromedp.Tasks{
		chromedp.Navigate("https://www.overleaf.com/login"),
		chromedp.WaitVisible(`#email`, chromedp.ByID),
		chromedp.SendKeys(`#email`, "mail@unmsm.edu.pe", chromedp.ByID),
		chromedp.WaitVisible(`#password`, chromedp.ByID),
		chromedp.SendKeys(`#password`, "password", chromedp.ByID),
		chromedp.Click(`button[type=submit]`, chromedp.ByQuery),
		chromedp.Sleep(5 * time.Second),
	}); err != nil {
		log.Fatalf("Error iniciando sesión: %v", err)
	}

	log.Println("Navegando a la URL del proyecto...")
	if err := chromedp.Run(ctx, chromedp.Tasks{
		chromedp.Navigate(projectURL),
		chromedp.Sleep(3 * time.Second),
	}); err != nil {
		log.Fatalf("Error al ir a la URL del proyecto: %v", err)
	}

	log.Println("Navegando a la URL de descarga...")
	if err := chromedp.Run(ctx, chromedp.Tasks{
		browser.SetDownloadBehavior(browser.SetDownloadBehaviorBehaviorAllowAndName).
			WithDownloadPath(wd).
			WithEventsEnabled(true),
		chromedp.Navigate(downloadURL),
		chromedp.Sleep(3 * time.Second),
	}); err != nil {
		log.Fatalf("Error al ir a la URL de descarga: %v", err)
	}

	fmt.Println("¡Descarga completada!")

	guid := <-done
	log.Printf("se escribió %s", filepath.Join(wd, guid))
}
