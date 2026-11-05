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
  miniatura: string
  formato: 'horizontal' | 'vertical'
}
export const trabajosGraficos: GraphicWork[] = []
export const trabajosAudiovisuales: VideoWork[] = []
export const segundaFotografia = '/img/david-sobre-mi.jpg'
