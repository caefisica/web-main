---
title: "Física Computacional II"
lead: ""
description: ""
id: "CFO502"
credits: 4
prerrequisites: ["Física Computacional I"]
semester: 5
contributors: [ "David", "Alvaro" ]
featured: false
pdf: false
math: false
draft: false
weight: 502
images: []
toc: true
date: 2022-02-01T12:00:00
lastmod:
  - :git
  - lastmod
  - date
  - publishDate
menu:
  guias:
    parent: "pregrado"
---

{{< infobox-alert text="En el curso de Física Computacional II, aprenderás a resolver problemas físicos utilizando métodos numéricos, como ecuaciones no lineales, ecuaciones diferenciales y análisis de muchos cuerpos, empleando Fortran 90 o Fortran 95." />}}

🔎 El plan de estudios incluye los siguientes temas:

- Errores de cálculo
- Simulación del movimiento planetario
- Introducción a la dinámica molecular
- Métodos de Euler, Verlet, Runge-Kutta
- Método de Montecarlo
- Modelo de Ising

## Libros recomendados

Para complementar tu aprendizaje en Física Computacional II, hemos seleccionado una lista de libros que proporcionan una combinación de conocimientos teóricos y prácticos sobre los temas del curso:

### Teóricos

Te recomendamos consultar los siguientes libros, que incluyen información teórica detallada y ejemplos de programas escritos en Python u otros lenguajes (ten en cuenta que Fortran no es comúnmente utilizado en cursos similares en otros países):

{{< book_table >}}
  {{< book_row title="Métodos numéricos y computación" author="Ward Cheney" editorial="Cengage Learning" year="2010" edition="6ta ed." url="https://drive.google.com/file/d/184zvDMtxff9VyxUPFn6PuzJoyDVnQXmk/view?usp=share_link" >}}
  {{< book_row title="Computational Physics: Fortran Version" author="Steve Koonin & Dawn Meredith" editorial="Taylor & Francis" year="2018" edition="1ra ed." url="https://drive.google.com/file/d/1QpHRzoHUIX-Z8fV_GnfPHPjxWpnpDe1s/view?usp=share_link" >}}
  {{< book_row title="Computational Physics" author="Jos Thijssen" editorial="Cambridge University Press" year="2007" edition="2da ed." url="https://drive.google.com/file/d/1ue1r86KtMOJtE8X4JFdLX2qhtAUHpkE8/view?usp=share_link" >}}
  {{< book_row title="Computational Physics" author="Nicholas Giordano y Hisao Nakanishi" editorial="Pearson Prentice Hall" year="2006" edition="2da ed." url="https://drive.google.com/file/d/1JD0IDBYSs0LMEle9_hQ5y5bkcEJBvwr8/view?usp=share_link" >}}
  {{< book_row title="Computational Physics" author="Mark Newman" editorial="CreateSpace" year="2013" edition="1ra ed." url="https://drive.google.com/file/d/1u077jDiYRvgXl0ldOLZ6c1OQ9kW4tT9X/view?usp=share_link" >}}
  {{< book_row title="Computational Methods for Fluid Dynamics" author="J. Ferziger, M. Perić y R. Street" editorial="Springer Nature" year="2020" edition="4ta ed." url="https://drive.google.com/file/d/16OJHnWcG1s_8DqT6mE8NMRbM70BObSSl/view?usp=share_link" >}}
  {{< book_row title="Computational Fluid Dynamics: Principles and Applications" author="Jiri Blazek" editorial="Elsevier" year="2015" edition="3ra ed." url="https://drive.google.com/file/d/1sOfqzjeFne8HDKgK--iXyvH7Q--pGPHa/view?usp=share_link" >}}
  {{< book_row title="Markov Chain Monte Carlo Simulations And Their Statistical Analysis: With Web-based Fortran Code" author="Bernd Berg" editorial="World Scientific" year="2004" edition="1ra ed." url="https://drive.google.com/file/d/1cERsqX7MR-zvlALSZ_YO_Lr_HXaQRMfu/view?usp=share_link" >}}
{{< /book_table >}}

### Teórico-Prácticos

Estos libros combinan teoría y práctica, presentando una amplia gama de ejercicios resueltos para aplicar y reforzar tus conocimientos.

{{< book_table >}}
  {{< book_row title="Métodos numéricos aplicados con software" author="Shoichiro Nakamura" editorial="Pearson Education" year="1992" edition="1ra ed." url="https://drive.google.com/file/d/1MkqTEV9L5GzxkYT0xuXyAychGhGs7jrR/view?usp=share_link" >}}
  {{< book_row title="Computational Physics: Problem Solving with Computers" author="R. Landau, M. Páez y C. Bordeianu" editorial="Wiley" year="2012" edition="2da ed." url="https://www.eidos.ic.i.u-tokyo.ac.jp/~tau/lecture/computational_physics/docs/computational_physics.pdf" >}}
  {{< book_row title="Computational Physics: With Worked Out Examples in Fortran and MatLab" author="Michael Bestehorn" editorial="Walter de Gruyter" year="2018" edition="1ra ed." url="https://drive.google.com/file/d/1ulFB8q0K45EIsIjwOVsI069Kia6ThyVk/view?usp=share_link" >}}
{{< /book_table >}}

### Prácticos

Diseñados para mejorar tus habilidades de resolución de problemas, estos libros se centran en ejercicios y problemas con contenido teórico mínimo.

{{< book_table >}}
  {{< book_row title="Computational Physics: A practical introduction to Computational Physics and Scientific Computing" author="Konstantinos Anagnostopoulos" editorial="National Technical University of Athens" year="2014" edition="1ra ed." url="http://www.physics.ntua.gr/~konstant/ComputationalPhysics/Book/ComputationalPhysicsKNA_nocover.pdf" >}}
{{< /book_table >}}

### Solucionarios

Para ayudarte aún más en la comprensión del material, aquí tienes una lista de solucionarios para algunos libros seleccionados.

{{< book_table >}}
  {{< book_row title="Computational Physics With Python" author="Mark Newman" editorial="CreateSpace" year="2013" edition="1ra ed." url="http://www-personal.umich.edu/~mejn/computational-physics/" >}}
  {{< book_row title="Computational Physics Solutions" author="Luis Felipe Llano" editorial="Independiente (GitHub)" year="2020" edition="1ra ed." url="https://github.com/Nesador95/Computational-Physics-Solutions" >}}
  {{< book_row title="Koonin Problems" author="Sudhanva Lalit" editorial="Independiente (GitHub)" year="2021" edition="1ra ed." url="https://github.com/sudhanvalalit/Koonin-Problems" >}}
  {{< book_row title="Solutions to Thijssen's 'Computational Physics'" author="Ty Sterling" editorial="Independiente (GitHub)" year="2019" edition="1ra ed." url="https://github.com/silentforest89/CompFizz/tree/master/Thijssen" >}}
  {{< book_row title="Exercises to accompany Giordano's 'Computational Physics'" author="Shichao Wu" editorial="Independiente (GitHub)" year="2016" edition="1ra ed." url="https://github.com/WuShichao/computational-physics" >}}
{{< /book_table >}}

## Documentos

| Nombre | Autor | Institución | Año |
| ------ | ----- | ----------- | --- |
| Física Computacional | Grupo de profesores | Universidad de Granada | [2019](https://ergodic.ugr.es/cphys/index.php?id=lecciones) |
| Computational Physics with Python | Soon-Hyung Yook | Kyunghee University | [2017](http://fracton.khu.ac.kr/~syook/Lectures/ComputPhys/) |
| Computational Physics With Python | Eric Ayars | California State University | [2013](https://belglas.files.wordpress.com/2018/03/cpwp.pdf) |

## Listas de reproducción

| Nombre | Autor | Enlace |
| ------ | ----- | ------ |
| ```11``` Computational Physics using Fortran | Mohan Giri | [eng](https://www.youtube.com/playlist?list=PL7p7K-N4TmQsI7KgdyKyh19sXWTd8UC28) |
|  ```58``` Computational Physics | NPTEL-NOC IITM | [eng](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8Lg4pPC2KKutByiFCR9kV0) |
|  ```32``` Computational Physics MSc course | Be_a_Physicist | [eng](https://www.youtube.com/playlist?list=PLJLcwUF3Yuc0kqgZTMXdWmAYeryJRk7lH) |

## Sílabos

{{< details "Sílabo del semestre 2022-I" >}}
{{< pdfjs file="CP2_Sílabo_2022-I_Manrique.pdf" >}}
{{< /details >}}

### Docentes
