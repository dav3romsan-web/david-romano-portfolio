import { useEffect, useRef, useState } from 'react'
import {
  FastForward,
  Pause,
  Play,
  Rewind,
  Volume2,
  VolumeX,
} from 'lucide-react'

const SALTO = 5
const SONIDO_EVENTO = 'portafolio:sonido'

function formatearTiempo(segundos: number) {
  if (!Number.isFinite(segundos) || segundos < 0) return '00:00'
  const m = Math.floor(segundos / 60)
  const s = Math.floor(segundos % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

type Props = {
  src: string
  titulo: string
  categoria: string
  formato: 'horizontal' | 'vertical'
  poster?: string
}

export default function VideoPlayer({
  src,
  titulo,
  categoria,
  formato,
  poster,
}: Props) {
  const contenedor = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [mejorado, setMejorado] = useState(false)
  const [reproduciendo, setReproduciendo] = useState(false)
  const [silenciado, setSilenciado] = useState(true)
  const [tiempo, setTiempo] = useState(0)
  const [duracion, setDuracion] = useState(0)

  // Sin JavaScript se muestran los controles nativos; al hidratar se reemplazan.
  useEffect(() => {
    const v = video.current
    if (!v) return
    v.muted = true
    setMejorado(true)
    if (v.readyState >= 1) setDuracion(v.duration)
  }, [])

  const reproducir = (desdeInicio: boolean) => {
    const v = video.current
    if (!v) return
    if (desdeInicio) v.currentTime = 0
    v.play().catch(() => {
      // Si el navegador bloquea el audio, se reproduce en silencio.
      v.muted = true
      setSilenciado(true)
      v.play().catch(() => {})
    })
  }

  // Reproducción automática al entrar en el área visible, pausa al salir.
  useEffect(() => {
    const nodo = contenedor.current
    const v = video.current
    if (!nodo || !v || !('IntersectionObserver' in window)) return
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reducido.matches) reproducir(true)
        } else if (!v.paused) {
          v.pause()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(nodo)
    return () => observer.disconnect()
  }, [])

  // Solo un video con sonido a la vez.
  useEffect(() => {
    const alOtroConSonido = (e: Event) => {
      const v = video.current
      if (!v || (e as CustomEvent<string>).detail === src) return
      v.muted = true
      setSilenciado(true)
    }
    window.addEventListener(SONIDO_EVENTO, alOtroConSonido)
    return () => window.removeEventListener(SONIDO_EVENTO, alOtroConSonido)
  }, [src])

  const alternarReproduccion = () => {
    const v = video.current
    if (!v) return
    if (v.paused) reproducir(true)
    else v.pause()
  }

  const desplazar = (segundos: number) => {
    const v = video.current
    if (!v) return
    const total = Number.isFinite(v.duration) ? v.duration : 0
    v.currentTime = Math.min(Math.max(v.currentTime + segundos, 0), total)
    setTiempo(v.currentTime)
  }

  const buscar = (valor: number) => {
    const v = video.current
    if (!v) return
    v.currentTime = valor
    setTiempo(valor)
  }

  const alternarSonido = () => {
    const v = video.current
    if (!v) return
    v.muted = !v.muted
    setSilenciado(v.muted)
    if (!v.muted) {
      window.dispatchEvent(new CustomEvent(SONIDO_EVENTO, { detail: src }))
      if (v.paused) reproducir(false)
    }
  }

  const progreso = duracion ? (tiempo / duracion) * 100 : 0

  return (
    <figure className={'video-item ' + formato}>
      <article
        ref={contenedor}
        className={'video-work ' + formato + (mejorado ? ' enhanced' : '')}
        data-reveal
      >
        <video
          ref={video}
          src={src}
          poster={poster}
          playsInline
          loop
          muted
          preload="metadata"
          controls={!mejorado}
          aria-label={`${titulo} · ${categoria}`}
          onClick={mejorado ? alternarReproduccion : undefined}
          onPlay={() => setReproduciendo(true)}
          onPause={() => setReproduciendo(false)}
          onTimeUpdate={(e) => setTiempo(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuracion(e.currentTarget.duration)}
          onDurationChange={(e) => setDuracion(e.currentTarget.duration)}
          onVolumeChange={(e) => setSilenciado(e.currentTarget.muted)}
        />
        {mejorado && (
          <div className="video-controls">
            <div className="video-timeline">
              <input
                type="range"
                className="video-progress"
                min={0}
                max={duracion || 0}
                step={0.01}
                value={Math.min(tiempo, duracion || 0)}
                onChange={(e) => buscar(Number(e.currentTarget.value))}
                aria-label={`Línea de tiempo de ${titulo}`}
                aria-valuetext={`${formatearTiempo(tiempo)} de ${formatearTiempo(duracion)}`}
                style={{ '--progreso': `${progreso}%` } as React.CSSProperties}
              />
            </div>
            <div className="video-buttons">
              <button
                type="button"
                onClick={() => desplazar(-SALTO)}
                aria-label={`Retroceder ${SALTO} segundos`}
                title={`Retroceder ${SALTO} s`}
              >
                <Rewind size={18} />
              </button>
              <button
                type="button"
                className="video-play"
                onClick={alternarReproduccion}
                aria-label={
                  reproduciendo
                    ? `Pausar ${titulo}`
                    : `Reproducir ${titulo} desde el inicio`
                }
                title={reproduciendo ? 'Pausar' : 'Reproducir desde el inicio'}
              >
                {reproduciendo ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
              </button>
              <button
                type="button"
                onClick={() => desplazar(SALTO)}
                aria-label={`Adelantar ${SALTO} segundos`}
                title={`Adelantar ${SALTO} s`}
              >
                <FastForward size={18} />
              </button>
              <span className="video-time" aria-hidden="true">
                {formatearTiempo(tiempo)} / {formatearTiempo(duracion)}
              </span>
              <button
                type="button"
                className="video-sound"
                onClick={alternarSonido}
                aria-label={silenciado ? 'Activar sonido' : 'Silenciar'}
                aria-pressed={!silenciado}
                title={silenciado ? 'Activar sonido' : 'Silenciar'}
              >
                {silenciado ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        )}
      </article>
      <figcaption className="video-work-title" data-reveal>
        {titulo}
      </figcaption>
    </figure>
  )
}
