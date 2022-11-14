# Documentación del CAE-Física 💻 [![Netlify](https://api.netlify.com/api/v1/badges/abc167f5-8dee-48db-a7da-3c97c18849be/deploy-status)](https://app.netlify.com/sites/caefis/deploys) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Este es el repositorio de la documentación de cada curso del Plan de Estudios de Física 2018 de la Facultad de Ciencias Físicas de la Universidad Nacional Mayor de San Marcos.

- [Colaboradores](#colaboradores)
- [Deseo colaborar](#colaborar)
  - [¿Por qué contribuir lo vale?]()
- [Convenciones]()
  - [Estructura de las carpetas y nombre de los archivos]()
  - [Formato de texto]()
  - [Colores]()
- [Licencia y derechos de autor]()

## Colaboradores

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Ser-CorD"><img src="https://avatars.githubusercontent.com/u/98802192?v=4?s=100" width="100px;" alt="Ser-CorD"/><br /><sub><b>Ser-CorD</b></sub></a><br /><a href="#research-Ser-CorD" title="Research">🔬</a> <a href="#blog-Ser-CorD" title="Blogposts">📝</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

### Estilos 

1. Azul: 0F9BF6 a 1823AB
2. Morado: 5D46B4 a 5D2F86
3. Negro: 212529
4. Opacidad 15%

---

<h3 align="center"><em>Requisitos:</em></h3> 

> El autor usa Windows 11 (64 bits). Los pasos pueden variar un poco si usas un SO basado en Linux por ejemplo. Adicionalmente, te recomendaría usar las variantes para x64 al escoger los instaladores.

* `npm`
  * Instala `npm` a través de [Node.js](https://nodejs.org/es/download/). Las opciones predeterminadas bastan. 
  * Al culminar, reinicia tu ordenador por si acaso.
  * Abre una consola (`cmd` por ejemplo) y escribe:

        npm -v
  * Si te aparece una serie de números tipo: 1.4, entonces se instaló correctamente.

* `git`
  * Descarga [`git-scm`](https://git-scm.com/downloads), click en el nombre.
  * Sigue los pasos predeterminados.
  * Al culminar, abre Powershell y escribe: 

        git --version
  * Si te da un valor tipo: `git version 2.34.1.windows.1`. Entonces se ha instalado correctamente.
* `vscode`
  * Descarga e instala [VSCode](https://code.visualstudio.com/download).

---

### Entorno local

1. Crea la carpeta donde guardarás el repositorio localmente.
2. Haz anticlic en la carpeta que acabas de crear, luego clic en "Abrir en VSCode".
3. En VSCode, presiona `Ctrl + Shift + Ñ`
4. En el terminal que se acaba de abrir escribe el siguiente comando (clonar el repositorio de Github):

        git clone https://github.com/caefis/cae.git

5. Ahora cambiaremos de carpeta:
        
        cd .\cae\

6. Revisa los remotos:

        git remote -v
  
    La consola tiene que contestar con un mensaje similar a este (puede que en tu caso no diga `cae` sino `origin`, no deseas cambiarlo, sáltate al paso X):

        cae     https://github.com/caefis/cae.git (fetch)
        cae     https://github.com/caefis/cae.git (push)

7. Cambiaremos `origin` por `cae` con:

        git remote remove origin
        git remote add cae https://github.com/caefis/cae.git

    Ahora, al escribir `git remote -v`, tiene que salir algo similar a:

        cae     https://github.com/caefis/cae.git (fetch)
        cae     https://github.com/caefis/cae.git (push)

8. Veamos cuantas ramas hay:

        git fetch cae

   Te saldrá un resultado similar a este:

        * master
          remotes/cae/deploy
          remotes/cae/gh-pages
          remotes/cae/master
          remotes/cae/pub

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
        npm run start

11. Corre localmente: 

        hugo server

12: A continuación, en tu navegador de preferencia, ve a:
        
        http://localhost:1313

13. Tras hacer tus cambios, crea un commit.

    * `Ctrl + Mayus + G`
    * Clic en el símbolo ✔️ al lado de "Control de código fuente".
    * Te pedirá que escribas una descripción del commit, escribe qué haz añadido o quitado.
    * Presiona `enter`.
---

### Publicar tus cambios

> **Importante**: antes de publicar tus cambios, haz pull para evitar historias conflictivas. Es decir, vuelve a realizar el paso 9.

Finalmente:

1. `Ctrl + Mayus + G`
2. En los tres puntos de la esquina derecha, haz clic en `Pull/Push`. 
3. Selecciona `Insertar en...`
4. Selecciona `cae`.

### Ejemplos

#### Emoji

```text
{{ ":zap:" | emojify }}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!