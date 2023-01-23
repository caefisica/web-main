Gracias por considerar contribuir al repositorio de la página web del CAE-Física. Agradecemos y apreciamos cualquier contribución, ya sea grande o pequeña.

## ¿Cómo puedo contribuir?

- Añadir nuevas Guías de Estudio o Notas de Clase para cursos universitarios de Física
- Actualizar o mejorar las Guías de Estudio o Notas de Clase existentes
- Añadir libros o material de estudio para el estudio de la física
- Informar de errores o problemas con las guías de estudio (ejemplo: hay enlaces que ya no pueden ser accedidos, errores ortográficos)

## ¿Cómo contribuir?

Para contribuir en la sección de Guía de Estudios, siga estos pasos:

1. Encuentra el archivo que deseas editar
   
   | Recomendado 🛡 | Complicado 🤔 |
   | -------------- | ----------- |
   | 1. Dírigete al artículo que deseas editar en nuestra página web <br> 2. En la parte final del artículo encontrarás la opción de `Edita esta página`. Al hacer click te redirigirá a la página del artículo en GitHub. | 1. Todos las guías se encuentran en el siguiente directorio: `content/unmsm/pregrado/`.<br> 2. Las guías están divididas por semestre, dentro de la carpeta `1` estarán los cursos de primer semestre en archivos Markdown. |
2. Encuentra el botón de editar en la esquina superior derecha, el botón es representado por el símbolo del lápiz.

   <img src="https://i.imgur.com/RYzzFJF.png" alt="Botón de edición en GitHub" height="125">
  
3. Edita el contenido en el editor nativo de GitHub. Recuerda que usamos Markdown para estos archivos.
4. En la parte final de la página hay una sección de "_Commit changes_". Deja un mensaje breve sobre los cambios que hiciste.
5. Presiona en "_Commit changes_".

### Usuario avanzado 🔧

*Prerrequisitos*: Git y tener una cuenta en GitHub.

1. En tu terminal favorita, ejecuta:

    ```
    git clone https://github.com/caefisica/web
    git branch sugerencias
    git checkout sugerencias
    ```

2. Realiza los cambios necesarios en el repositorio. Para encontrar los archivos de esta sección puedes guiarte de la información en la tabla anterior.
3. Luego de guardar tus cambios localmente. Ejecuta:

    ```
    git add .
    git commit -m "Edita esto por un mensaje indicando brevemente tus cambios"
    git push
    ```
4. Ve a la sección de "[Pull requests](https://github.com/caefisica/web/pulls)" en el repositorio del CAE-Física:

    <img src="https://i.imgur.com/T5Gacvf.png" alt="Botón de Pull Requests en Github" height="125">

5. Presiona en el botón de "_New pull request_". 
6. Selecciona el _branch_ que creaste. En este caso, `sugerencias`.
7. Revisa que estás conforme con tus cambios.
8. Presiona en el botón de "_Create pull request_".
9.  Pon un título y una descripción para el "_Pull Request_", explicando los cambios que has realizado.
10. Envía el "_Pull Request_".

Revisaremos tu pull request y te daremos nuestra opinión si es necesario. Una vez que tus cambios hayan sido revisados y aprobados, se fusionarán en el repositorio principal.

## Código de conducta

Pedimos a todos los colaboradores que sigan nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar en este proyecto, aceptas cumplir con sus términos.

## Licencia

Al contribuir a este repositorio, acepta publicar sus contribuciones bajo la [licencia MIT](LICENSE).

¡Gracias por tu contribución!