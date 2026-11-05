// Agregá archivos en public/trabajos y completá estas listas para publicar tus piezas.
// Las rutas comienzan en /trabajos/. No incluir el video de referencia.
export type GraphicWork = {
  titulo: string
  categoria: string
  imagen: string
  formato: 'horizontal' | 'vertical' | 'cuadrado'
}
export type VideoWork = {
  titulo: string
  categoria: string
  video: string
  miniatura?: string
  formato: 'horizontal' | 'vertical'
}
export const trabajosGraficos: GraphicWork[] = []
// El orden de esta lista es el orden de aparición en Edición de videos.
// Los archivos se publican sin recomprimir para conservar su calidad.
export const trabajosAudiovisuales: VideoWork[] = [
  {
    titulo: 'Marketing 01',
    categoria: 'Video de marketing',
    video: '/trabajos/videos/01-marketing.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'Marketing 02',
    categoria: 'Video de marketing',
    video: '/trabajos/videos/02-marketing.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'Reel CREDS DESIGN',
    categoria: 'Reel',
    video: '/trabajos/videos/03-reel-creds-design.mp4',
    formato: 'vertical',
  },
  {
    titulo: 'Edición 04',
    categoria: 'Edición de video',
    video: '/trabajos/videos/04-edicion.mp4',
    formato: 'vertical',
  },
]
export const segundaFotografia = '/img/david-sobre-mi.png'
