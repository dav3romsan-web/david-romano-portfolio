# Portafolio de David Romano Sánchez

Portafolio personal en español para un estudiante de Diseño Gráfico y editor de videos. Su identidad editorial combina rojo, tipografía condensada, el retrato original de David y seis secciones en una página adaptable.

Utiliza React 19, TypeScript, TanStack Start, Vite, Lucide y Netlify Image CDN. El tema se guarda en el navegador; no necesita cuentas ni base de datos. El video de referencia no se publica ni se reproduce.

## Desarrollo local

Con Node 22.13 o superior compatible y pnpm:

```sh
pnpm install
netlify dev --port 8889
```

Netlify instala y compila el proyecto durante el despliegue.

## Incorporar fotografías y trabajos

Editar `src/data/portfolio.ts` desde el editor del proyecto. Los espacios vacíos indican explícitamente que los trabajos se publicarán próximamente y no representan proyectos realizados.

1. Añadir los archivos de diseño, miniaturas y videos a `public/trabajos/`.
2. Incorporar entradas en `trabajosGraficos` con `titulo`, `categoria`, `imagen` (por ejemplo `/trabajos/afiche.jpg`) y `formato` (`horizontal`, `vertical` o `cuadrado`).
3. Incorporar entradas en `trabajosAudiovisuales` con `titulo`, `categoria`, `video`, `miniatura` y `formato` (`horizontal` o `vertical`). Usar videos compatibles con navegadores, como MP4 H.264.
4. Para la segunda fotografía, añadir el archivo a `public/img/` y completar `segundaFotografia` con su ruta pública.
5. Para eliminar una pieza, quitar su entrada de la lista. Para reordenarla, cambiar su posición.

Al agregar contenido, cada galería sustituye sus espacios pendientes por las piezas. Las imágenes abren una vista ampliada y los videos se reproducen en un diálogo con controles nativos. Se puede cerrar con el botón, con Escape o al presionar el fondo. No hay un panel de administración ni carga pública de archivos.

Los enlaces de contacto apuntan a WhatsApp e Instagram de David. La animación de entrada se reinicia al salir y volver a entrar en pantalla, respeta movimiento reducido y no bloquea el desplazamiento.
