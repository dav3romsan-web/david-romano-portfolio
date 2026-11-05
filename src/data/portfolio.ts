// Agregá archivos en public/trabajos y completá estas listas para publicar tus piezas.
// Las rutas comienzan en /trabajos/. No incluir el video de referencia.
// Las imágenes y el PDF se publican tal como se recibieron, sin recomprimir.
// tipo 'imagen': una pieza; 'pdf': se abre en el visor del navegador;
// 'serie': la primera imagen es la portada y las demás se recorren con flechas.
export type GraphicWork =
  | { tipo: 'imagen'; titulo: string; imagen: string }
  | { tipo: 'pdf'; titulo: string; marca: string; archivo: string }
  | { tipo: 'serie'; titulo: string; imagenes: string[] }
export type VideoWork = {
  titulo: string
  categoria: string
  video: string
  miniatura?: string
  formato: 'horizontal' | 'vertical'
}
// El orden de esta lista es el orden de aparición en Diseño gráfico.
export const trabajosGraficos: GraphicWork[] = [
  {
    tipo: 'imagen',
    titulo: 'AFICHE PROMOCIONAL',
    imagen: '/trabajos/graficos/afiche-promocional-01.png',
  },
  {
    tipo: 'imagen',
    titulo: 'AFICHE PROMOCIONAL',
    imagen: '/trabajos/graficos/afiche-promocional-02.png',
  },
  {
    tipo: 'pdf',
    titulo: 'DISEÑO DE PACKAGING — ACNTO',
    marca: 'ACNTO',
    archivo: '/trabajos/graficos/acnto-packaging.pdf',
  },
  {
    tipo: 'imagen',
    titulo: 'AFICHE DE CONCIENTIZACIÓN',
    imagen: '/trabajos/graficos/afiche-concientizacion.png',
  },
  {
    tipo: 'serie',
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
