# Bienvenido al caefisica.com

| Publicación y CI | Calidad del código | Monitoreo |
| --------------- | ------------------ | --------- |
| [![Netlify](https://api.netlify.com/api/v1/badges/abc167f5-8dee-48db-a7da-3c97c18849be/deploy-status)](https://app.netlify.com/sites/caefis/deploys) | [![Momobot CI](https://github.com/caefisica/web/actions/workflows/node.js_ci.yml/badge.svg)](https://github.com/caefisica/web/actions/workflows/node.js_ci.yml) | [![Análisis CodeQL](https://github.com/caefisica/web/actions/workflows/analisis_codeql.yml/badge.svg)](https://github.com/caefisica/web/actions/workflows/analisis_codeql.yml) |
| | [![Lighthouse CI](https://github.com/caefisica/web/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/caefisica/web/actions/workflows/lighthouse.yml) | [![🔎 Enlaces no existentes](https://github.com/caefisica/web/actions/workflows/enlaces_404.yml/badge.svg)](https://github.com/caefisica/web/actions/workflows/enlaces_404.yml) |

## Contexto y el núcleo del problema 🤐

**`caefisica.com` es una iniciativa de estudiantes de la [Escuela Profesional de Física](https://fisica.unmsm.edu.pe) de la Universidad Nacional Mayor de San Marcos**. Queremos apoyar a nuestros compañeros ofreciéndoles recursos para hacer más fácil su aprendizaje y éxito en física.

**El problema fundamental que observamos es** la falta de un espacio centralizado donde encontrar recomendaciones, oportunidades y materiales de estudio.

La realidad es que parte de estos recursos, como apuntes de clase, libros y exámenes anteriores, andan desperdigados y 'atrapados' dentro de cada base. Sí, los profes comparten material con su clase, pero luego ese material se queda ahí nomás. Los mismos estudiantes no suelen compartir sus experiencias, los materiales o los exámenes que rindieron con las nuevas bases (¡lo cual se entiende!, tampoco es su deber hacerlo).

> [!NOTE]  
> Vale mencionar que gracias al esfuerzo de varias bases anteriores a la 20, se logró crear una biblioteca virtual en Google Drive. Esta biblioteca también incluye algunos exámenes y documentos recopilados por el CEF alrededor del año 2015.

Entonces, ¿qué sucede? Las nuevas bases quedan excluidas, sin acceso a información (y/o recomendaciones) que podría serles de utilidad para prepararse con anticipación o repasar conceptos importantes. Esta fragmentación del conocimiento crea barreras innecesarias, especialmente para la gente de primeros años que aún no tienen vínculos con las bases superiores.

Sabremos que estamos avanzando en este problema si logramos construir un repositorio amplio y organizado, donde todos los recursos estén accesibles para cualquier estudiante, sin importar su año académico.

## Visión 👀, misión 🎯 y estrategia a futuro 🗺️

### Aspiramos a la igualdad de oportunidades para todos los estudiantes de física, creyendo que hasta el menor apoyo puede transformar su futuro.

> [!NOTE]  
> Cuando hablamos de oportunidades, nos referimos principalmente a que todos tengan conocimiento de las mismas convocatorias, accedan a las mismas recomendaciones, libros y demás recursos disponibles.

**Nuestra misión** es mantener diversos canales de información en beneficio de nuestra comunidad estudiantil.

**Nuestros principales resultados** a futuro son:

- Mejorar significativamente la comunicación y accesibilidad del material de estudio disponible.
- Lograr que todos puedan encontrar y utilizar la información necesaria para tomar decisiones informadas.
- Establecer un sistema sostenible y acorde a las necesidades de nuestra comunidad.

**El público objetivo** a futuro es:

- Dentro de la UNMSM - Estudiantes y docentes de la E.P. de Física.
- Fuera de la UNMSM - Comunidad universitaria de habla castellana.

## Estrategia y plan 🤔

### Estrategia de priorización

- Ahora:
  - [X] Construir una serie de canales de información en redes sociales ([Facebook](https://facebook.com/caefisica), [Instagram](https://www.instagram.com/caefisica), WhatsApp público).
  - [X] Prototipar y desarrollar la [versión inicial de la web](https://caefisica.com/) con documentación limitada al Plan de Estudios 2018.
  - [X] Compartir oportunidades y becas a través del grupo de WhatsApp público.
- Siguiente:
  - [ ] Consolidar la información a través de grupos de WhatsApp divididos por categorías (oportunidades, artículos científicos, física de altas energías, etc).
  - [ ] Añadir apuntes de clase en formato LaTeX transcritas de notas publicadas por profesores de la facultad. Véase [caefisica/NotasTeX](https://github.com/caefisica/NotasTeX).
  - [ ] Implementar las partes necesarias para escalar la página web a otros planes de estudio dentro y fuera de la facultad.
- Después - Añadir funcionalidades terciarias.

| Fase | Prioridades |
| ---- | ----------- |
| Hecho - Prototipo | <ul><li>Iniciamos cubriendo el Plan de Estudios 2018 hasta el séptimo ciclo. Véase la sección de [cursos](https://caefisica.com/unmsm/).</li><li>Requisitos y opciones viables para un CMS: [Pages CMS](https://auth.caefisica.com/), utilizábamos Forestry, pero [fue abandonado](https://tina.io/forestry/).</li><li>Integrado [Splitbee](https://splitbee.io/) como herramienta analítica para optimizar la experiencia del usuario.</li><li>Implementado revisión automática de enlaces para asegurar su funcionamiento a través de GitHub Actions (gracias a [atalent-labs/404-link](https://github.com/atalent-labs/404-links))</li></ul> |
| **Ahora - Consolidación** | <ul><li>Ampliamos información cubriendo todos los planes de estudio con apoyo docente.</li><li>Desarrollamos automatización para la transcripción de documentos a formato LaTeX</li><li>Unificamos los grupos de WhatsApp para fortalecer nuestra comunidad</li><li>Estamos trabajando en un sistema de automatización para compartir automáticamente oportunidades académicas y becas entre grupos de WhatsApp, canales de WhatsApp, página web y newsletter. Véase [caefisica/whatsapp-manager](https://github.com/caefisica/whatsapp-manager)</li></ul> |
| Siguiente - Expandir | <ul><li>Implementaremos técnicas de extracción de datos para actualizar noticias relacionadas a la física en tiempo real. Véase [rss.caefisica.com](https://rss.caefisica.com/)</li><li>Automatizaremos la creación de copias de seguridad con cada nuevo boletín informativo</li><li>Mejoraremos la funcionalidad de búsqueda en nuestra biblioteca virtual</li><li>Publicaremos automáticamente contenidos en redes sociales, añadiéndolo al feed de los autores (véase el feed de [David](https://caefisica.com/contributors/david/))</li></ul> |
| Después | <ul><li>Planificaremos una transición y migración del proyecto para asegurar su sostenibilidad a largo plazo, considerando la graduación de varios miembros del @caefisica.</li><li>Priorizaremos el mantenimiento continuo para garantizar la relevancia y utilidad de las herramientas.</li></ul> |

## Cómo tendremos éxito o fracasaremos 😮‍💨

### Tendremos éxito si:

- trabajamos de buena fe con estudiantes de diversas bases para expandir el contenido disponible y comprender sus necesidades
- los estudiantes toman decisiones informadas basadas en sus áreas de interés, aumentando la cantidad de estudiantes que realizan intercambios académicos (especialmente al extranjero) e incrementando las posibilidades de continuar con estudios de posgrado como maestría o doctorado
- los estudiantes de nuestra facultad interactúan y comparten conocimientos con estudiantes de facultades de física de otras universidades
- surgen nuevos grupos estudiantiles dedicados a informar y organizar eventos en áreas más específicas dentro de nuestra facultad
- obtenemos _feedback_ continuo sobre el código en funcionamiento e ideas para nuevas funcionalidades, en lugar de quedar como simples propuestas.

### Fracasaremos si:

- las visitas a nuestros canales son mínimas, en lugar de ser adoptados orgánicamente por los estudiantes
- la cantidad de estudiantes realizando intercambios estudiantiles se mantiene sin incremento significativo
- no se incrementa la cantidad de eventos organizados dentro de nuestra facultad y no surgen nuevos grupos estudiantiles
- la página web no se actualiza continuamente con nuevo contenido y oportunidades relevantes
- trabajamos de manera aislada, sin interactuar con otros grupos estudiantiles o facultades afines.

## Dominio público

Este proyecto se encuentra bajo la [licencia MIT](LICENCE), lo que significa que es de código abierto y cualquier persona puede utilizarlo, modificarlo y distribuirlo libremente.

## Contribuciones de la comunidad

Este repositorio es mantenido por un equipo de voluntarios dedicados.

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

¡Valoramos y alentamos las contribuciones de la comunidad! Si tienes experiencia en física y quieres ayudar a otros estudiantes a mejorar en sus estudios, te invitamos a contribuir a este repositorio. Puedes consultar más detalles en [CONTRIBUTING](.github/CONTRIBUTING.md).

Algunas formas en las que puedes colaborar son:

1. **Guías de estudio**: Crea o actualiza guías para cursos que hayas aprobado. Incluye recomendaciones de libros, materiales útiles y explica los temas con un lenguaje claro y accesible. En general tratamos de:

   - Recomendar libros de estudio.
   - Recomendar canales de Youtube u otra plataforma que aborde temas similares a los sílabos.

2. **Apuntes de clase**: Comparte tus apuntes. Tus notas pueden ser muy valiosas para otros estudiantes.

3. **Recomendaciones**: Sugiere libros, artículos, videos, consejos u otros recursos que te hayan sido útiles. Agrega una descripción clara para que otros puedan evaluar su relevancia.

Todas las contribuciones son bienvenidas, ¡no importa su tamaño! Juntos podemos construir un increíble repositorio de recursos para beneficiar a toda la comunidad estudiantil. Si necesitas ayuda, no dudes en contactarnos. ¡Esperamos tus aportes!

## Tech Stack

Tipo: Headless CSS (Pages CMS)
Lenguajes y frameworks: Hugo, Bootstrap, SCSS, Golang

Puedes encontrar más detalles sobre cómo ejecutar este repositorio localmente, visita [CONTRIBUTING](.github/CONTRIBUTING.md).

---

Redactado por David Duran, _coordinador general del @caefisica (2022-Actualidad)_
