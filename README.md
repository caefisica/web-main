# Documentación del CAE-Física 💻 [![Netlify](https://api.netlify.com/api/v1/badges/abc167f5-8dee-48db-a7da-3c97c18849be/deploy-status)](https://app.netlify.com/sites/caefis/deploys) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

Este es el repositorio de la documentación de cada curso del Plan de Estudios de Física 2018 de la Facultad de Ciencias Físicas de la Universidad Nacional Mayor de San Marcos.

- [Colaboradores](#colaboradores)
- [Deseo colaborar](#contribuciones)
  - [¿Por qué contribuir lo vale?](#¿por-qué-contribuir)
- [Convenciones](#convenciones)
  - [Estructura de las carpetas y nombre de los archivos](#estructura-del-directorio-y-nombre-de-los-archivos)
  - [Formato de texto](#formato-del-texto)
  - [Colores](#colores)
  - [Plantillas](#plantillas)
- [Para desarrolladores](#desarrolladores)

## Colaboradores

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

Puedes comenzar a contribuir corrigiendo errores tipográficos en nuestra documentación. Otros aspectos en los que necesitamos ayuda son los siguientes:

1. *Guías de estudio*

    Las guías de estudio necesitan de una mejor documentación para que los estudiantes los entiendan fácilmente. La documentación actual es a menudo vaga y no ofrece suficientes detalles sobre las asignaturas. Además, el lenguaje utilizado a menudo en las listas de reproducción que recomendamos suele ser demasiado técnicos o se encuentran únicamente en inglés; esta es una barrera para los estudiantes que no están familiarizados con la materia.

    - Recomendar libros de estudio.
    - Recomendar canales de Youtube u otra plataforma que aborde temas similares a los sílabos.

2. *Apuntes de Clase*

    Sería útil que los *Apuntes de Clase* sean más claros y concisos. Además, el uso de un lenguaje más sencillo facilitaría a los estudiantes la comprensión de algunos tópicos avanzados.

### ¿Por qué contribuir?

Si te apasiona la física y quieres ayudar a los nuevos estudiantes a sobresalir en sus asignaturas, contribuir a este proyecto es una gran manera de hacerlo. Al proporcionar tus propias recomendaciones de libros y listas de reproducción de Youtube, puedes ayudar a los nuevos estudiantes a sacar el máximo provecho de sus estudios de física.

## Convenciones

### Estructura del directorio y nombre de los archivos

Las versiones procesadas y en formato HTML de las guías de estudio se encuentran en [CAE-Física](https://caefis.netlify.app/). Los nombres de los cursos siguen la siguiente nomenclatura:

`[universidad]/[grado]/[número del semestre]/[código del curso sin espacios].md`

Por ejemplo, [la guía del curso](https://caefis.netlify.app/es/unmsm/pregrado/1/cbo106/) que se encuentra en: `https://caefis.netlify.app/es/unmsm/pregrado/1/cbo106/` tiene su [contenido en este repositorio](https://github.com/caefisica/web/blob/master/content/unmsm/pregrado/1/CBO106.md) en: `unmsm/pregrado/1/CBO106.md`

Adicionalmente, puedes acceder a la dirección en GitHub de cada página de las Guías de Estudio. Solo dirígete la parte final de la página y verás lo siguiente:

<p align="center">
<img src="https://i.imgur.com/CIobd1U.png" width=60% height=60%>
</p>

### Formato del texto

El formato de cada guía de estudio es Markdown y es procesada por `goldmark`. Como usamos Markdown, puedes añadir `*` o `_` para dar énfasis o `[enlaces](https://caefis.netlify.app/)`. Markdown tiene una sintaxis sencilla de aprender, puedes leer esto con más detalle [aquí](https://datosgobar.github.io/portal-andino/markdown-guide/).

### Colores 

Utlizamos mayoritariamente los siguiente colores (formato HEX) en degradado:

| Color  | HEX |
| -----  | --- |
| Azul   | #0F9BF6 a #1823AB |
| Morado | #5D46B4 a #5D2F86 |
| Negro  | #212529 |

### Plantillas

1. Emoji

    ```text
    {{ ":zap:" | emojify }}
    ```

## Desarrolladores

### Software necesario

> El autor usa Windows 11 (64 bits). Los pasos pueden variar un poco si usas un SO basado en Linux por ejemplo. Adicionalmente, te recomendaría usar las variantes para x64 al escoger los instaladores.

* `npm`
  * Instala `npm` a través de [Node.js](https://nodejs.org/es/download/). Las opciones predeterminadas bastan
  * Al culminar, reinicia tu ordenador por si acaso
  * Abre una consola (`cmd` por ejemplo) y escribe: `npm -v`
  * Si te aparece una serie de números tipo: 1.4, entonces se instaló correctamente
  * Una alternativa también es usar [nvm-windows](https://github.com/coreybutler/nvm-windows). Si decides usar nvm, no utilices el instalador de Node.js
* `git`
  * Descarga [`git-scm`](https://git-scm.com/downloads), click en el nombre.
  * Sigue los pasos predeterminados.
  * Al culminar, abre Powershell y escribe: `git --version`
  * Si te da un valor tipo: `git version 2.34.1.windows.1`. Entonces se ha instalado correctamente
* `vscode` (opcional)
  * Descarga e instala [VSCode](https://code.visualstudio.com/download)

### Entorno local

1. Crea la carpeta donde guardarás el repositorio localmente.
2. Haz anticlic en la carpeta que acabas de crear, luego clic en "Abrir en VSCode".
3. En VSCode, presiona `Ctrl + Shift + Ñ`
4. En el terminal que se acaba de abrir escribe el siguiente comando (clonar el repositorio de Github):

        git clone https://github.com/caefisica/web.git

5. Ahora cambiaremos de carpeta:
        
        cd .\cae\

6. Revisa los remotos:

        git remote -v
  
    La consola tiene que contestar con un mensaje similar a este (puede que en tu caso no diga `cae` sino `origin`, si no deseas cambiarlo, sáltate al paso 8):

        cae     https://github.com/caefis/web.git (fetch)
        cae     https://github.com/caefis/web.git (push)

7. Cambiaremos `origin` por `cae` con:

        git remote remove origin
        git remote add cae https://github.com/caefisica/web.git

    Ahora, al escribir `git remote -v`, tiene que salir algo similar a:

        cae  https://github.com/caefisica/web.git (fetch)
        cae  https://github.com/caefisica/web.git (push)

8. Veamos cuantas ramas hay:

        git branch -a

   Te saldrá un resultado similar a este:

          home-page
        * master
          remotes/origin/dependabot/npm_and_yarn/autoprefixer-10.4.10

    > El asterisco (`*`) antes de master nos indica que estamos en la rama master.

9. Hagamos pull para comprobar que no hay conflictos entre las historias:

        git pull cae master

    O también puedes hacerlo por VSCode:
      
      1. `Ctrl + Alt + G`
      2. Haz clic en los tres puntos del menú que se acaba de abrir.
      3. Selecciona `Pull/Push`.
      4. Selecciona `Extraer de`.
      5. Selecciona `cae` o `origin` (si te saltaste el paso 7).
      6. Selecciona `master`.

      </br>
  
    > **NO CONTINÚES CON EL RESTO DE INSTRUCCIONES SI ES QUE ESTE PASO TE DA ALGÚN TIPO DE ERROR**. Puedes consultar con el administrador en caso de necesitar ayuda.

10. Instala las dependencias:

        npm install

11. Corre localmente:

        npm run start

12: A continuación, en tu navegador de preferencia, ve a:
        
        http://localhost:1313

13. Tras hacer tus cambios, crea un commit.

    * `Ctrl + Mayus + G`
    * Clic en el símbolo ✔️ al lado de "Control de código fuente".
    * Te pedirá que escribas una descripción del commit, escribe qué haz añadido o quitado.
    * Presiona `enter`.

### Publicar tus cambios

> **Importante**: antes de publicar tus cambios, haz pull para evitar historias conflictivas. Es decir, vuelve a realizar el paso 9.

Finalmente:

1. `Ctrl + Mayus + G`
2. En los tres puntos de la esquina derecha, haz clic en `Pull/Push`. 
3. Selecciona `Insertar en...`
4. Selecciona `cae`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!