// Agregá archivos en public/trabajos y completá estas listas para publicar tus piezas.
// Las rutas comienzan en /trabajos/. No incluir el video de referencia.
// Las imágenes y el PDF se publican tal como se recibieron, sin recomprimir.
// tipo 'imagen': una pieza; 'pdf': se abre en el visor del navegador;
// 'serie': la primera imagen es la portada y las demás se recorren con flechas.
export type CategoriaGrafica =
  | 'publicitario'
  | 'packaging'
  | 'editorial'
  | 'identidad'
export type GraphicWork =
  | { tipo: 'imagen'; categoria: CategoriaGrafica; titulo: string; imagen: string }
  | { tipo: 'pdf'; categoria: CategoriaGrafica; titulo: string; marca: string; archivo: string }
  | { tipo: 'serie'; categoria: CategoriaGrafica; titulo: string; imagenes: string[] }
// Carpetas de Diseño gráfico, en orden de aparición.
export const categoriasGraficas: {
  id: CategoriaGrafica
  nombre: string
  descripcion: string
}[] = [
  {
    id: 'publicitario',
    nombre: 'DISEÑO PUBLICITARIO',
    descripcion:
      'Afiches promocionales, flyers, piezas publicitarias y afiches de concientización.',
  },
  {
    id: 'packaging',
    nombre: 'DISEÑO DE PACKAGING',
    descripcion: 'Diseño de envases y proyectos de packaging.',
  },
  {
    id: 'editorial',
    nombre: 'DISEÑO EDITORIAL',
    descripcion: 'Portadas de revistas, publicaciones y composiciones editoriales.',
  },
  {
    id: 'identidad',
    nombre: 'IDENTIDAD VISUAL',
    descripcion: 'Proyectos de identidad de marca.',
  },
]
export type VideoWork = {
  titulo: string
  categoria: string
  video: string
  miniatura?: string
  formato: 'horizontal' | 'vertical'
}
// Cada trabajo se muestra dentro de la carpeta de su categoría, en este orden.
export const trabajosGraficos: GraphicWork[] = [
  {
    tipo: 'imagen',
    categoria: 'publicitario',
    titulo: 'AFICHE PROMOCIONAL',
    imagen: '/trabajos/graficos/afiche-promocional-01.png',
  },
  {
    tipo: 'imagen',
    categoria: 'publicitario',
    titulo: 'AFICHE PROMOCIONAL',
    imagen: '/trabajos/graficos/afiche-promocional-02.png',
  },
  {
    tipo: 'serie',
    categoria: 'publicitario',
    titulo: 'FLYERS PROMOCIONALES | CREDS DESIGN',
    // Orden indicado por el autor.
    imagenes: [
      '/trabajos/graficos/creds-flyer-01.png',
      '/trabajos/graficos/creds-flyer-02.png',
      '/trabajos/graficos/creds-flyer-03.png',
      '/trabajos/graficos/creds-flyer-04.png',
    ],
  },
  {
    tipo: 'serie',
    categoria: 'packaging',
    titulo: 'DISEÑO DE PACKAGING | ACNTO',
    // Orden de lectura indicado por el autor.
    imagenes: [
      '/trabajos/graficos/acnto-01.png',
      '/trabajos/graficos/acnto-02.png',
      '/trabajos/graficos/acnto-03.png',
      '/trabajos/graficos/acnto-04.png',
      '/trabajos/graficos/acnto-05.png',
      '/trabajos/graficos/acnto-06.png',
      '/trabajos/graficos/acnto-07.png',
    ],
  },
  {
    tipo: 'imagen',
    categoria: 'editorial',
    titulo: 'PORTADA DE REVISTA | ORIGEN',
    imagen: '/trabajos/graficos/portada-revista-origen.png',
  },
  {
    tipo: 'imagen',
    categoria: 'publicitario',
    titulo: 'AFICHE DE CONCIENTIZACIÓN',
    imagen: '/trabajos/graficos/afiche-concientizacion.png',
  },
  {
    tipo: 'serie',
    categoria: 'identidad',
    titulo: 'CREDS DESIGN',
    // Orden original de los archivos recibidos: 9.png a 14.png.
    imagenes: [
      '/trabajos/graficos/creds-identidad-01.png',
      '/trabajos/graficos/creds-identidad-02.png',
      '/trabajos/graficos/creds-identidad-03.png',
      '/trabajos/graficos/creds-identidad-04.png',
      '/trabajos/graficos/creds-identidad-05.png',
      '/trabajos/graficos/creds-identidad-06.png',
    ],
  },
  {
    tipo: 'serie',
    categoria: 'identidad',
    titulo: 'OLIVIUM',
    // Orden original de los archivos recibidos: 1, 5, 6, 9 y 10.
    imagenes: [
      '/trabajos/graficos/olivium-01.png',
      '/trabajos/graficos/olivium-02.png',
      '/trabajos/graficos/olivium-03.png',
      '/trabajos/graficos/olivium-04.png',
      '/trabajos/graficos/olivium-05.png',
    ],
  },
  {
    tipo: 'serie',
    categoria: 'identidad',
    titulo: 'BUBBLY',
    imagenes: [
      '/trabajos/graficos/bubbly-01.png',
      '/trabajos/graficos/bubbly-02.png',
      '/trabajos/graficos/bubbly-03.png',
    ],
  },
]
// El orden de esta lista es el orden de aparición en Edición de videos.
// Los archivos se publican sin recomprimir para conservar su calidad.
export const trabajosAudiovisuales: VideoWork[] = [
  {
    titulo: 'PATRICIAN | AGENCIA DE MARKETING',
    categoria: 'Video de marketing',
    video: '/trabajos/videos/01-marketing.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'PATRICIAN | AGENCIA DE MARKETING',
    categoria: 'Video de marketing',
    video: '/trabajos/videos/02-marketing.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'CREDS DESIGN',
    categoria: 'Reel',
    video: '/trabajos/videos/03-reel-creds-design.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'IMPRENTA EL COMERCIANTE',
    categoria: 'Edición de video',
    video: '/trabajos/videos/04-edicion.mp4',
    formato: 'vertical',
  },
]
export const segundaFotografia = '/img/david-sobre-mi.png'
