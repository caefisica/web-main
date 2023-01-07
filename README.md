# Documentación del CAE-Física 💻 <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Netlify](https://api.netlify.com/api/v1/badges/abc167f5-8dee-48db-a7da-3c97c18849be/deploy-status)](https://app.netlify.com/sites/caefis/deploys)

Bienvenidos al repositorio de la documentación de cada curso del Plan de Estudios de Física 2018 de la Facultad de Ciencias Físicas de la Universidad Nacional Mayor de San Marcos.

- [Nosotros](#nosotros)
  * [Colaboradores](#colaboradores)
- [Deseo colaborar](#contribuciones)
  * [¿Por qué contribuir lo vale?](#¿por-qué-contribuir)
- [Convenciones](#convenciones)
  * [Estructura de las carpetas y nombre de los archivos](#estructura-del-directorio-y-nombre-de-los-archivos)
  * [Formato de texto](#formato-del-texto)
  * [Colores](#colores)
  * [Plantillas](#plantillas)
- [Para desarrolladores](#desarrolladores)

## Nosotros

El Centro de Apoyo al Estudiante de Física (CAE-Física) es un grupo de estudiantes universitarios de física enfocados en ayudar a otros estudiantes de física. Nuestro objetivo es proporcionar recursos y apoyo de alta calidad para ayudar a los estudiantes a tener éxito en sus estudios.

### Colaboradores

Este repositorio es mantenido por un equipo de voluntarios dedicados. Si deseas contribuir, por favor consulta la sección "Contribuciones" a continuación.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://totallynotdavid.github.io"><img src="https://avatars.githubusercontent.com/u/20960328?v=4?s=100" width="100px;" alt="David"/><br /><sub><b>David</b></sub></a><br /><a href="#maintenance-totallynotdavid" title="Maintenance">🚧</a> <a href="#security-totallynotdavid" title="Security">🛡️</a> <a href="#research-totallynotdavid" title="Research">🔬</a> <a href="#blog-totallynotdavid" title="Blogposts">📝</a></td>
      <td align="center"><a href="https://github.com/alvaro18101"><img src="https://avatars.githubusercontent.com/u/75409414?v=4?s=100" width="100px;" alt="Alvaro Alejandro Siesquen Abad"/><br /><sub><b>Alvaro Alejandro Siesquen Abad</b></sub></a><br /><a href="#research-alvaro18101" title="Research">🔬</a> <a href="#blog-alvaro18101" title="Blogposts">📝</a></td>
      <td align="center"><a href="https://github.com/Ser-CorD"><img src="https://avatars.githubusercontent.com/u/98802192?v=4?s=100" width="100px;" alt="Ser-CorD"/><br /><sub><b>Ser-CorD</b></sub></a><br /><a href="#research-Ser-CorD" title="Research">🔬</a> <a href="#blog-Ser-CorD" title="Blogposts">📝</a></td>
      <td align="center"><a href="https://github.com/Rifejo"><img src="https://avatars.githubusercontent.com/u/99055529?v=4?s=100" width="100px;" alt="Rifejo"/><br /><sub><b>Rifejo</b></sub></a><br /><a href="#research-Rifejo" title="Research">🔬</a> <a href="#blog-Rifejo" title="Blogposts">📝</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contribuciones

¡Agradecemos cualquier contribución de la comunidad! Si tienes experiencia en física o educación y quieres ayudar a otros estudiantes a mejorar en sus estudios, por favor considera contribuir a este repositorio. Algunas formas en las que puedes hacerlo son:

1. **Guías de estudio**: Si has completado un curso y quieres compartir tus conocimientos y recursos con otros estudiantes, puedes crear o actualizar guías de estudio para ese curso. Asegúrate de incluir recomendaciones de libros y otros materiales útiles, y utiliza un lenguaje claro y accesible para facilitar la comprensión de los temas. En general tratamos de:

    - Recomendar libros de estudio.
    - Recomendar canales de Youtube u otra plataforma que aborde temas similares a los sílabos.

2. **Apuntes de Clase**: Si tienes apuntes de clase completos y bien organizados, podrías considerar compartirlos con otros estudiantes. Asegúrate de usar un lenguaje sencillo y claro, y elimina cualquier información innecesaria para mantener los apuntes concisos y fáciles de seguir.

3. **Recomendaciones de libros y otras fuentes de información**: Si conoces libros o canales de Youtube que cubren temas relevantes para los estudiantes de física, compártelos con la comunidad a través de nuestro repositorio. Asegúrate de proporcionar una descripción clara y completa de cada recomendación para que otros puedan evaluar si es relevante para ellos.

### ¿Por qué contribuir?

Si te apasiona la física y quieres ayudar a los nuevos estudiantes a sobresalir en sus asignaturas, contribuir a este proyecto es una gran manera de hacerlo. Al proporcionar tus propias recomendaciones de libros y listas de reproducción de Youtube, puedes ayudar a los nuevos estudiantes a sacar el máximo provecho de sus estudios de física.

## Convenciones

### Estructura del directorio y nombre de los archivos

Los archivos que contienen las guías de estudio se almacenan en una estructura de carpetas y subcarpetas que reflejan la universidad, el nivel de grado, el semestre y el código del curso. Por ejemplo, la guía de estudio para un curso de pregrado en el primer semestre con el código `CBO106` se guardaría en la siguiente ubicación: `content/unmsm/pregrado/1/CBO106.md`

Para facilitar la navegación, se recomienda seguir una nomenclatura consistente para los nombres de los archivos y carpetas. Por ejemplo, se podrían utilizar minúsculas y separar las palabras con guiones bajos en lugar de espacios en blanco.

Adicionalmente, puedes acceder a la dirección en GitHub de cada archivo a través del menú ubicado al final de la página de la guía o nota de clase en particular. Deberías encontrar algo similar a esto:

<p align="center">
<img src="https://i.imgur.com/CIobd1U.png" width=60% height=60%>
</p>

### Formato del texto

Las guías de estudio deben estar escritas en formato Markdown y deben procesarse utilizando goldmark. Markdown es un lenguaje de marcado sencillo que permite enfatizar el texto con asteriscos o subrayados (por ejemplo, *énfasis* o _énfasis_) y crear enlaces con corchetes y paréntesis (por ejemplo, [enlace](https://caefisica.com/)). Si necesitas más información sobre el uso de Markdown, puedes consultar [esta guía](https://datosgobar.github.io/portal-andino/markdown-guide/).

### Colores 

Utilizamos principalmente colores en degradado, especificados en formato HEX. Por ejemplo, el azul se especifica como: `#0F9BF6` a `#1823AB`, el morado como: `#5D46B4` a `#5D2F86` y el negro como: `#212529`. Se recomienda utilizar un conjunto de colores coherente a lo largo de todas las guías de estudio.

### Plantillas

1. Emoji

    ```text
    {{ ":zap:" | emojify }}
    ```

## Desarrolladores

### Software necesario

Para desarrollar y contribuir a este proyecto, necesitarás tener instalado cierto software en tu sistema operativo. A continuación se describen los pasos para instalar cada uno de estos programas en un sistema operativo Windows:

* `npm`: es el administrador de paquetes de Node.js. Puedes instalarlo a través de la página de descargas de [Node.js](https://nodejs.org/es/download/). Asegúrate de descargar la versión `16.16.0` y sigue los pasos predeterminados durante la instalación. Una vez finalizada, reinicia tu ordenador y abre una consola (por ejemplo, cmd). Escribe npm -v y presiona Enter. Si aparece una serie de números como 1.4, significa que npm se ha instalado correctamente. Alternativamente, puedes utilizar [nvm-windows](https://github.com/coreybutler/nvm-windows). Si decides usar nvm, no utilices el instalador de Node.js.
* `git`: es una herramienta de control de versiones que nos permitirá gestionar y mantener el código fuente del proyecto. Puedes descargarlo desde la página de [`git-scm`](https://git-scm.com/downloads). Sigue los pasos predeterminados durante la instalación. Una vez finalizada la instalación, abre una consola (por ejemplo, Powershell) y escribe git --version. Si aparece una línea como `git version 2.37.3.windows.1`, significa que git se ha instalado correctamente.
* `VSCode` (opcional): es un editor de código fuente muy popular y completo. Puedes descargarlo desde la página de [VSCode](https://code.visualstudio.com/download).

### Configuración del entorno de desarrollo

En adelante, se denominará como consola a un terminal como Powershell o Command Prompt (CMD). Para configurar tu entorno de desarrollo, sigue estos pasos:

1. Clona el repositorio en tu equipo usando git. Abre una consola y escribe `git clone https://github.com/caefisica/web.git`. Esto creará una copia del repositorio en tu equipo en una carpeta llamada web.
2. Accede a la carpeta del proyecto. En la consola, escribe `cd web` para entrar en la carpeta del proyecto.
3. Instala las dependencias del proyecto. En la consola, escribe `npm install`. Este comando instalará todas las dependencias necesarias para ejecutar y desarrollar el proyecto.
4. Arranca el servidor de desarrollo. En la consola, escribe `npm run start`. Este comando arrancará el servidor de desarrollo y abrirá automáticamente una pestaña en tu navegador con la página del proyecto. A partir de ahora, cada vez que hagas un cambio en el código fuente, el servidor se reiniciará automáticamente y podrás ver los cambios en tiempo real. Podrás acceder a la página en `http://localhost:1313`.
5. Para comenzar a editar el proyecto utilizando VSCode, escribe `code .` (no te olvides del punto y el espacio después de `code`). Una vez que hayas realizado los cambios que desees en el proyecto, puedes publicarlos en el repositorio de GitHub siguiendo estos pasos:
  * Abre la lista de archivos modificados en VSCode haciendo clic en el icono de control de código fuente en la barra lateral izquierda o presionando Ctrl + Mayús + G.
  * Selecciona los archivos que deseas incluir en el commit haciendo clic en el icono de "staged changes" al lado de cada archivo.
  * Escribe una descripción clara y concisa del commit en el campo "Message" en la parte inferior de la ventana.
  * Haz clic en el botón "Commit All" para realizar el commit.
  * Para enviar tus cambios al repositorio de GitHub, haz clic en el botón "Push" en la barra superior o selecciona "Push" en el menú "Control de código fuente". Esto enviará tus cambios al repositorio de GitHub y los hará disponibles para todos los miembros del equipo.
