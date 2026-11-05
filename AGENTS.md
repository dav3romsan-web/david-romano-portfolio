# Arquitectura y convenciones

Este sitio es el portafolio de David Romano Sánchez. Es una sola página con exactamente seis secciones, en este orden: Inicio, Sobre mí, Herramientas, Diseño gráfico, Edición de videos y Contacto. El pie de página no añade una sección de contenido.

## Archivos principales

- `src/routes/index.tsx`: seis secciones, animaciones de visibilidad y diálogo para imágenes/videos.
- `src/components/FluxLines.tsx`: fondo animado WebGL2 de Sobre mí y Contacto; líneas blancas en tema oscuro y negras en tema claro.
- `src/components/SiteHeader.tsx`: navegación por anclas, estado de sección activa, menú móvil y selector de tema.
- `src/routes/__root.tsx`: documento en español, metadatos, inicialización del tema y estructura accesible.
- `src/styles.css`: identidad visual, variables de temas, tipografía, adaptación móvil y movimiento reducido. El bloque final «Adaptación responsive integral» solo ajusta medidas y distribución (celulares chicos ≤ 420 px, celulares ≤ 760 px, tablets, notebooks, horizontal y pantallas grandes); nunca efectos ni colores.
- `src/data/portfolio.ts`: listas editables de trabajos y ruta de la segunda fotografía. La lista de videos define el orden de la galería. Los trabajos gráficos llevan una `categoria` y se agrupan en las cuatro carpetas de `categoriasGraficas` (Diseño publicitario —incluye el afiche de concientización—, Diseño de packaging, Diseño editorial e Identidad visual); una carpeta sin trabajos se muestra vacía como «Próximamente».
- `src/components/Folder.tsx` y `Folder.css`: carpeta animada suministrada por el autor, usada en Diseño gráfico; en rojo puro #ff0000; nunca se despliega ni desaparece: las cuatro carpetas funcionan como navegación y quedan siempre visibles; la seleccionada queda entreabierta (prop `ajar`) y resaltada mediante el atributo `data-abierta` (nunca cambiar `className` en elementos con `data-reveal`: borra la clase `visible` y los oculta) mientras sus imágenes aparecen en un panel debajo de la fila; al ocultar el panel se vuelve a la vista de las cuatro, para elegir cuál ver en la vista ampliada (las hojas solo asoman al pasar el cursor; hasta seis). El tamaño de cada carpeta se calcula con ResizeObserver según el ancho de su columna (máximo 1).
- `src/components/VideoPlayer.tsx`: reproductor con controles propios (Play desde 00:00, pausa, ±5 s, línea de tiempo, sonido). Reproduce en silencio al entrar en pantalla y pausa al salir. Su estado mejorado usa el atributo `data-enhanced`; los controles se compactan con una container query en tarjetas angostas.
- `public/trabajos/videos/`: videos verticales 9:16 suministrados por el usuario, copiados sin recomprimir.
- `src/lib/site.ts`: identidad y metadatos para compartir.
- `public/img/`: fotografía original suministrada por el usuario, sin alteraciones de rostro ni color.
- `public/icons/`: logotipos de las aplicaciones; Adobe desde Devicon/Wikimedia y símbolo de CapCut desde Wikimedia.

## Decisiones

Todo el texto visible debe estar en español, excepto los nombres oficiales de programas y marcas. No inventar trabajos ni presentar los espacios tipográficos pendientes como proyectos. Nunca publicar el video de referencia: solo inspira el diseño. La segunda fotografía recibida se encuentra en `public/img/david-sobre-mi.png` y se utiliza exclusivamente en Sobre mí, conservando el archivo original.

Los temas solo cambian variables cromáticas. Su preferencia se almacena en localStorage como preferencia local del navegador. No hay datos de aplicación persistentes, autenticación ni formularios de contacto: el contacto usa los enlaces autorizados.

Las animaciones usan IntersectionObserver, eliminando la clase visible al salir del área observada para repetir entradas en ambas direcciones. Mantener accesible el contenido sin JavaScript y con prefers-reduced-motion. Los diálogos nativos conservan foco y cierre con Escape.

TanStack genera `src/routeTree.gen.ts` automáticamente; no editarlo manualmente. Se eliminaron las rutas y contenidos de demostración de la plantilla. Las imágenes de portada usan Netlify Image CDN y conservan la fuente original. No ejecutar compilaciones, servidores ni pruebas en la sesión automatizada: la plataforma valida el proyecto al terminar. Para trabajo local independiente, seguir README.md.
