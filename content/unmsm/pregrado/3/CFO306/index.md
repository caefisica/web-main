---
title: "Física Computacional I"
lead: ""
description: ""
id: "CFO306"
credits: 4
prerrequisites: [ "Cálculo I" ]
semester: 3
contributors: [ "Richard", "David" ]
featured: false
pdf: false
math: true
draft: false
weight: 306
images: []
toc: true
date: 2022-02-01T00:00:00
lastmod:
  - :git
  - lastmod
  - date
  - publishDate
menu:
  guias:
    parent: "pregrado"
---

{{< infobox-alert text="El curso de Física Computacional I ofrece una introducción a los métodos numéricos y la programación en Fortran, con el objetivo de enseñar a diseñar programas para resolver problemas y analizar los resultados obtenidos mediante métodos computacionales en diversos problemas físicos." />}}

## Temas

Nota: Los temas pueden variar según el profesor.

- Definición de variables
- Método de interpolación y extrapolación
  - Programación modular
  - Método de Bisección
  - Método de falsa posición
  - Método de Newton-Raphson
  - Método de secante
  - Interpolación de Lagrange
  - Interpolación de Newton
- Integración numérica
  - Regla del trapecio
  - Regla de Simpson: $1/3$ y $3/8$
  - Método de Romberg
  - Método de Euler
- Ecuaciones diferenciales
  - Método de Runge-Kutta
  - Método de Runge-Kutta para sistemas con múltiples variables dependientes

## Libros recomendados

Para complementar tu aprendizaje en Física Computacional I, hemos seleccionado una lista de libros que proporcionan una combinación de conocimientos teóricos y prácticos sobre los temas del curso:

### Teóricos

Te recomendamos consultar los siguientes libros, que incluyen información teórica detallada y ejemplos de programas escritos en Python u otros lenguajes (ten en cuenta que Fortran no es comúnmente utilizado en cursos similares en otros países):

{{< book_table >}}
  {{< book_row title="Introduction to Programming with Fortran" author="Ian Chivers y Jane Sleightholme" editorial="Springer International Publishing AG" year="2018" edition="4ta ed." url="https://drive.google.com/file/d/1qKxqT4IcyfFROFiFrwhqfX5bhfOU5Ynm/view?usp=share_link" >}}
  {{< book_row title="A First Course in Computational Physics" author="Paul DeVries" editorial="John Wiley & Sons" year="1994" edition="1ra ed." url="https://drive.google.com/file/d/1YsPZJ0fCP4-gYKNO2X4kCoiOxEIIldco/view?usp=share_link" >}}
  {{< book_row title="An Introduction to Computational Physics" author="Tao Pang" editorial="Cambride University Press" year="2006" edition="2da ed." url="https://drive.google.com/file/d/1hLow99N95A2BWNDTbL635LJFZYUwOdDz/view?usp=share_link" >}}
  {{< book_row title="Numerical Methods for Scientists and Engineers" author="H. M. Antia" editorial="Hindustan Book Agency" year="2012" edition="3ra ed." url="https://drive.google.com/file/d/1eAHhtZAHGLncF7TvKMG6yTX0c9b9s7ps/view?usp=share_link" >}}
  {{< book_row title="Numerical Methods of Mathematics Implemented in Fortran" author="Sujit Kumar Bose" editorial="Springer Nature Singapore" year="2019" edition="1ra ed." url="https://drive.google.com/file/d/1EBg-Ay8QQPa69BLYdblvkAbYUEG2glcL/view?usp=share_link" >}}
  {{< book_row title="How to learn Applied Mathematics through Modern Fortran" author="Juan Hernández y Javier Escoto" editorial="Independiente" year="2022" edition="3ra ed." url="https://drive.google.com/file/d/1iFw449C5q8AQoVEYNqtf-uJ-1gxTO611/view?usp=share_link" >}}
{{< /book_table >}}

Antia: https://www.tifr.res.in/~antia/nmse3.html

### Solucionarios

{{< book_table >}}
  {{< book_row title="An Introduction to Computational Physics" author="Tao Pang" editorial="Cambridge University Press" year="1997" edition="1ra ed." url="https://www.physics.unlv.edu/~pang/cp_f90.html" >}}
{{< /book_table >}}

### Documentos

#### Fortran

| Nombre | Autor | Enlace |
| ------ | ----- | ------ |
| Fortran 90 Tutorial | C. K. Shene | [eng](https://pages.mtu.edu/~shene/COURSES/cs201/NOTES/fortran.html) |
| Computational Physics | Morten Hjorth-Jensen | [eng](https://www.uio.no/studier/emner/matnat/fys/FYS4411/v14/lectures2013.pdf)
| Guía de estudio de Fortran95 | Rachael Padman de la U. de Oxford | [eng](https://www.mrao.cam.ac.uk/~rachael/compphys/SelfStudyF95.pdf) |
| Fortran | David Apsley | [eng](https://web.pa.msu.edu/people/duxbury/courses/phy201_f06/Fortran90NotesI.pdf) |
| Introducción a Fortran | Miguel Alcubierre | [spa](https://drive.google.com/file/d/1so75hpOmN0zOyI6UgPC4MBPXw3pFgPoS/view?usp=sharing) |
| Computational Physics | Martin Siegert | [eng](https://www.phys.uconn.edu/~rozman/Courses/P2200_15F/campus_access/Siegert-comphys.pdf) |

#### Métodos Numéricos

| Nombre | Autor | Año | Editor | Enlace |
| ------ | ----- | --- | ------ | ------ |
| Métodos numéricos aplicados con software | Sholchlro Nakamura | 1992 | Prentice-Hall Hispanoamericana | [spa](https://drive.google.com/file/d/1K8xuRqu_pqSj0iPL6s0RJtiza4Jj4m6C/view?usp=sharing) |
| Métodos numéricos y computación | Ward Chene | 2010 | Cengage Learning | [spa](https://drive.google.com/file/d/1nU1KXcONN0TAKUzv4NPDd29cD-GjC_bY/view?usp=sharing) |
| Computational Physics - Fortran Version  | Steven E. Koonin | 1990 | Westview Press | [eng](https://drive.google.com/file/d/1crbnbw0ndKnaj_Pp1M5l-obdzCUwP3eq/view?usp=sharing) |

### Videos

| Nombre | Autor | Enlace |
| ------ | ----- | ------ |
| Curso de programación científica usando Fortran en Español, básico | Fernando Garzón | [spa](https://www.youtube.com/playlist?list=PLrzzpUO1QeKqG-wbR1aEb9mkEFl6UyNji) |
| Fortran Video Tutorials | Cyprien Rusu | [eng](https://www.youtube.com/playlist?list=PLvkU6i2iQ2fprrVmmkNP_V36mh0BMnS5L) |
| Fortran ejercicios | Eletorres | [spa](https://youtube.com/playlist?list=PL4D3mC8ZdKReOhL5yEADVs3qmlmpZjYu9) |
| Metodos númericos en Fortran | Claudio Canales | [spa](https://youtube.com/playlist?list=PL3PWU72lXK16ESgNVgS3e2WQqT_TQgv5_) |
| Métodos númericos en Fortran | TheMarcosVerissimo | [pt](https://youtube.com/playlist?list=PLPKxl5s4bNYxgeedSZy_5V_eB2NssC-7u) |

## Sílabos

{{< details "Profesor Chachi, semestre 2021-I, UNMSM" >}}
  {{< pdfjs file="CP_Silabo_2021-I_Rojas.pdf" >}}
{{< /details >}}

{{< details "Profesor Arbañil, semestre 2021-I, UNMSM" >}}
  {{< pdfjs file="CP_Silabo_2021-I_Arbañil.pdf" >}}
{{< /details >}}

## Docentes
