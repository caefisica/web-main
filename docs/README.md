# Documentación

## CSS

Con el motivo de simplificar el código. A continuación una lista de clases personalizadas reutilizables.

1. Background cover: 

    ```css
    .bg-cover {
      background-repeat: no-repeat;
    }
    ```

# Markdown 

1. Tablas:

    ```
    {{< content_table >}}
      {{< book_row title="" author="" editorial="" year="" edition="" url="" >}}
      {{< book_row_multiple title="" author="" editorial="" urls="" editions="" years="" >}}
      {{< playlist_row title="" channel="" lecturer="" videos="" url="" >}}
    {{< /content_table >}}
    ```

# Listas

1. Profesores:
    ```
    - name: ''
      title: ''
      courses:
        - code: ''
          semesters:
            - ''
    ```