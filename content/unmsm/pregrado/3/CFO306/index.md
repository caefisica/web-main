---
title: "Física Computacional I"
lead: "Introducción a métodos numéricos y programación en Fortran aplicados a problemas físicos"
description: "Este curso ofrece una visión general de los métodos numéricos y la programación en Fortran, con el objetivo de enseñar a diseñar programas para resolver problemas y analizar los resultados obtenidos mediante métodos computacionales en diversos problemas físicos"
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

{{< infobox-alert text="Este curso brinda una introducción a los métodos numéricos y la programación en Fortran, con el propósito de enseñar cómo diseñar programas para resolver problemas y analizar resultados mediante métodos computacionales aplicados a diversos problemas físicos." />}}

El plan de estudios incluye los siguientes temas:

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

Para complementar tu aprendizaje hemos seleccionado una lista de libros que proporcionan una combinación de conocimientos teóricos y prácticos sobre los temas del curso. Estos libros se encuentran agrupados en las siguientes categorías:

### Teóricos

Puedes consultar los siguientes libros, que incluyen información teórica detallada y ejemplos de programas escritos en C, Python u otros lenguajes (ten en cuenta que Fortran no es comúnmente utilizado en cursos similares en otros países):

{{< content_table type="book" >}}
  {{< book_row title="Métodos numéricos aplicados con software" author="Shoichiro Nakamura" editorial="Prentice-Hall Hispanoamericana" year="1992" edition="1ra ed." url="https://drive.google.com/file/d/1K8xuRqu_pqSj0iPL6s0RJtiza4Jj4m6C/view?usp=sharing" >}}
  {{< book_row title="Métodos numéricos y computación" author="Ward Chene & David Kincaid" editorial="Cengage Learning" year="2010" edition="6ta ed." url="https://drive.google.com/file/d/1nU1KXcONN0TAKUzv4NPDd29cD-GjC_bY/view?usp=sharing" >}}
  {{< book_row title="Computational Physics-Fortran Version" author="Steven E. Koonin & Dawn Meredith" editorial="Westview Press" year="1990" edition="1ra ed." url="https://drive.google.com/file/d/1crbnbw0ndKnaj_Pp1M5l-obdzCUwP3eq/view?usp=sharing" >}}
  {{< book_row title="An Introduction to Computational Physics" author="Tao Pang" editorial="Cambride University Press" year="2006" edition="2da ed." url="https://drive.google.com/file/d/1hLow99N95A2BWNDTbL635LJFZYUwOdDz/view?usp=share_link" >}}
  {{< book_row title="Numerical Methods for Scientists and Engineers" author="H. M. Antia" editorial="Hindustan Book Agency" year="2012" edition="3ra ed." url="https://drive.google.com/file/d/1eAHhtZAHGLncF7TvKMG6yTX0c9b9s7ps/view?usp=share_link" >}}
  {{< book_row title="Numerical Methods of Mathematics Implemented in Fortran" author="Sujit Kumar Bose" editorial="Springer Nature Singapore" year="2019" edition="1ra ed." url="https://drive.google.com/file/d/1EBg-Ay8QQPa69BLYdblvkAbYUEG2glcL/view?usp=share_link" >}}
{{< /content_table >}}

### Teórico-prácticos

{{< content_table type="book" >}}
  {{< book_row title="Introduction to Programming with Fortran" author="Ian Chivers y Jane Sleightholme" editorial="Springer International Publishing AG" year="2018" edition="4ta ed." url="https://drive.google.com/file/d/1qKxqT4IcyfFROFiFrwhqfX5bhfOU5Ynm/view?usp=share_link" >}}
  {{< book_row title="A First Course in Computational Physics" author="Paul DeVries" editorial="John Wiley & Sons" year="1994" edition="1ra ed." url="https://drive.google.com/file/d/1YsPZJ0fCP4-gYKNO2X4kCoiOxEIIldco/view?usp=share_link" >}}
  {{< book_row title="How to learn Applied Mathematics through Modern Fortran" author="Juan Hernández y Javier Escoto" editorial="Independiente" year="2022" edition="3ra ed." url="https://drive.google.com/file/d/1iFw449C5q8AQoVEYNqtf-uJ-1gxTO611/view?usp=share_link" >}}
{{< /content_table >}}

### Prácticos

{{< content_table type="book" >}}
  {{< book_row title="Computational Physics: A practical introduction to Computational Physics and Scientific Computing" author="Konstantinos Anagnostopoulos" editorial="National Technical University of Athens" year="2014" edition="1ra ed." url="http://www.physics.ntua.gr/~konstant/ComputationalPhysics/Book/ComputationalPhysicsKNA_nocover.pdf" >}}
  {{< book_row title="Computational Physics" author="Michael Bestehorn" editorial="Walter de Gruyter GmbH" year="2018" edition="1ra ed." url="https://drive.google.com/file/d/1ulFB8q0K45EIsIjwOVsI069Kia6ThyVk/view?usp=share_link" >}}
  {{< book_row title="Introduction to Fortran 90" author="Daniel Brown" editorial="University of Wales Aberystwyth" year="2009" edition="1ra ed." url="https://drive.google.com/file/d/1xKWosC94wpXKEcGl5o-3VHXjS9L5bca6/view?usp=share_link" >}}
{{< /content_table >}}

### Solucionarios

{{< content_table type="book" >}}
  {{< book_row title="An Introduction to Computational Physics" author="Tao Pang" editorial="Cambridge University Press" year="1997" edition="1ra ed." url="https://www.physics.unlv.edu/~pang/cp_f90.html" >}}
{{< /content_table >}}

## Documentos

### Fortran

Aquí encontrarás una lista de documentos relacionados con el lenguaje de programación Fortran, que pueden servir como recursos adicionales para aprender y practicar:

| Nombre | Autor | Enlace |
| ------ | ----- | ------ |
| Fortran 90 Tutorial | C. K. Shene | [eng](https://pages.mtu.edu/~shene/COURSES/cs201/NOTES/fortran.html) |
| Computational Physics | Morten Hjorth-Jensen | [eng](https://www.uio.no/studier/emner/matnat/fys/FYS4411/v14/lectures2013.pdf)
| Guía de estudio de Fortran95 | Rachael Padman de la U. de Oxford | [eng](https://drive.google.com/file/d/1JQmKvYLoviuUZG4QCmyycvVKu1WYloQ9/view?usp=share_link) |
| Fortran | David Apsley | [eng](https://web.pa.msu.edu/people/duxbury/courses/phy201_f06/Fortran90NotesI.pdf) |
| Introducción a Fortran | Miguel Alcubierre | [spa](https://drive.google.com/file/d/1so75hpOmN0zOyI6UgPC4MBPXw3pFgPoS/view?usp=sharing) |
| Computational Physics | Martin Siegert | [eng](https://drive.google.com/file/d/155RnnWIAPyASs3RBuI_KvQTI3so9_fAI/view?usp=drive_link) |

## Listas de reproducción

{{< content_table type="playlist" >}}
  {{< playlist_row title="Curso de programación científica usando Fortran" channel="" lecturer="Fernando Garzón" videos="20" url="https://www.youtube.com/playlist?list=PLrzzpUO1QeKqG-wbR1aEb9mkEFl6UyNji" >}}
  {{< playlist_row title="Fortran Video Tutorials" channel="" lecturer="Cyprien Rusu" videos="11" url="https://www.youtube.com/playlist?list=PLvkU6i2iQ2fprrVmmkNP_V36mh0BMnS5L" >}}
  {{< playlist_row title="Fortran ejercicios" channel="Eletorres" lecturer="Luis Torres" videos="20" url="https://www.youtube.com/playlist?list=PLJCOP7K8-ts3GaYeAw-ynfoZxqdFqA797" >}}
  {{< playlist_row title="Metodos númericos en Fortran" channel="" lecturer="Claudio Canales D." videos="6" url="https://youtube.com/playlist?list=PLppzU9a2axuRXD4idiiicGb3dSS_F8adN" >}}
  {{< playlist_row title="Física Computacional I" channel="" lecturer="Prof. Francisco Moura" videos="40" url="https://www.youtube.com/playlist?list=PLCWOBtltrHovcMBoapQp7NfmsUyu0YRwc" >}}
  {{< playlist_row title="Métodos númericos en Fortran" channel="" lecturer="TheMarcosVerissimo" videos="71" url="https://youtube.com/playlist?list=PLPKxl5s4bNYxgeedSZy_5V_eB2NssC-7u" >}}
{{< /content_table >}}

## Páginas web

A continuación, se presentan algunas páginas web que brindan información adicional y recursos sobre métodos numéricos y programación en Fortran:

| Nombre | Autor | Enlace |
| ------ | ----- | ------ |
| Numerical Methods for Scientists | H. M. Anthia | [eng](https://www.tifr.res.in/~antia/nmse3.html) |
| Fortran 90 for the Fortran 77 Programmer | Bo Einarsson & Yurij Shokin | [eng](https://ergodic.ugr.es/cphys/index.php?id=lec_fortran_html2)
| Learning Fortran | Alvaro Siesquen | [spa](https://sites.google.com/unmsm.edu.pe/learningfortran/inicio) |

## Sílabos

Para tener una idea más clara de los contenidos del curso, puedes consultar los sílabos de cursos anteriores impartidos por diferentes profesores en la UNMSM:

{{< details "Profesor Chachi, semestre 2021-I, UNMSM" >}}
  {{< pdfjs file="CP_Silabo_2021-I_Rojas.pdf" >}}
{{< /details >}}

{{< details "Profesor Arbañil, semestre 2021-I, UNMSM" >}}
  {{< pdfjs file="CP_Silabo_2021-I_Arbañil.pdf" >}}
{{< /details >}}

## Docentes
