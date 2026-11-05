import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Plus,
  Play,
  X,
  MessageCircle,
} from 'lucide-react'
import { site, pageMeta } from '../lib/site'
import FluxLines from '../components/FluxLines'
import VideoPlayer from '../components/VideoPlayer'
import {
  trabajosGraficos,
  trabajosAudiovisuales,
  segundaFotografia,
} from '../data/portfolio'
export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta('Portafolio', site.description),
})
type Media = { title: string; src: string; video?: boolean }
function AnimatedBackground() {
  const [light, setLight] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    const sync = () => setLight(root.dataset.theme === 'claro')
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])
  const tone = light ? '#000000' : '#ffffff'
  return (
    <FluxLines
      className="ambient-lines"
      colors={[tone, tone, tone]}
      glow={2}
      rimWidth={0.2}
      lineWidth={1}
      flowDirection="down"
      mouseInteraction
      clickSwirl
      speed={0.5}
      scale={1.2}
      turbulence={1}
      fluidity={0.1}
      sharpness={2.5}
      shimmer={1.5}
      mouseStrength={1}
      mouseRadius={0.35}
      intro
      lightMode={light}
    />
  )
}
function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="section-label" data-reveal>
      <span className="section-number">/{number}</span>
      <span>{children}</span>
      <Plus size={14} />
    </div>
  )
}
function PortfolioHome() {
  const [media, setMedia] = useState<Media | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle('visible', entry.isIntersecting),
        ),
      { threshold: 0.08 },
    )
    document
      .querySelectorAll('[data-reveal], [data-ambient]')
      .forEach((el) => observer.observe(el))
    document.documentElement.classList.add('motion-ready')
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])
  useEffect(() => {
    if (media) {
      dialog.current?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialog.current?.close()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [media])
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-topline">
          <span>DISEÑO CON INTENCIÓN. EDICIÓN CON RITMO.</span>
          <span>PORTAFOLIO PERSONAL — 2026</span>
        </div>
        <div className="hero-stage" data-reveal>
          <h1 className="portfolio-title" aria-label="Portafolio">
            <svg viewBox="0 0 1200 240" role="presentation" aria-hidden="true">
              <text
                x="600"
                y="208"
                textAnchor="middle"
                textLength="1190"
                lengthAdjust="spacingAndGlyphs"
              >
                {Array.from('PORTAFOLIO').map((letra, i) => (
                  <tspan key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                    {letra}
                  </tspan>
                ))}
              </text>
              <text
                className="portfolio-glint"
                x="600"
                y="208"
                textAnchor="middle"
                textLength="1190"
                lengthAdjust="spacingAndGlyphs"
              >
                {Array.from('PORTAFOLIO').map((letra, i) => (
                  <tspan key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                    {letra}
                  </tspan>
                ))}
              </text>
            </svg>
          </h1>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-name" data-reveal>
            <span className="tiny-label">
              <i /> IDEAS EN MOVIMIENTO
            </span>
            <p>
              DAVID
              <br />
              <span>ROMANO</span>
              <br />
              <span>SÁNCHEZ.</span>
            </p>
            <div className="hero-role">
              <span>ESTUDIANTE DE DISEÑO GRÁFICO</span>
              <span>EDITOR DE VIDEOS</span>
            </div>
            <a className="hero-work-link" href="#diseno-grafico">
              VER MIS TRABAJOS <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="portrait-wrap">
            <img
              className="hero-portrait"
              src="/.netlify/images?url=/img/david-romano.png&w=1200&fm=webp&q=100"
              alt="David Romano Sánchez sentado, con camiseta verde"
              fetchPriority="high"
            />
          </div>
          <div className="hero-note">
            <span className="asterisk" aria-hidden="true">
              ✳
            </span>
            <p>
              Diseño, creatividad
              <br />y movimiento.
            </p>
            <span>
              Ideas que se transforman en
              <br />
              experiencias visuales.
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#sobre-mi">
            <span className="scroll-icon">
              <ArrowDown size={15} />
            </span>
            DESLIZÁ PARA EXPLORAR
          </a>
          <span>
            CREATIVIDAD SIN PUNTO FINAL <i className="red-dot" />
          </span>
        </div>
      </section>
      <section id="sobre-mi" className="section about" data-ambient>
        <AnimatedBackground />
        <SectionLabel number="01">UN POCO DE MÍ</SectionLabel>
        <div className="about-grid">
          <div className="about-visual" data-reveal>
            <div className="photo-glow">
              <div className="photo-frame has-photo">
                <img
                  src={`/.netlify/images?url=${segundaFotografia}&w=1400&fm=webp&q=100`}
                  alt="David Romano Sánchez con buzo negro y blanco"
                  width={2657}
                  height={4344}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div className="about-copy" data-reveal>
            <h2>
              SOBRE <span className="outline">MÍ</span>
              <span className="red">.</span>
            </h2>
            <p className="lead">
              Detrás de cada idea,
              <br />
              una <em>mirada diferente.</em>
            </p>
            <p>
              Soy <strong>David Romano Sánchez</strong>, estudiante de Diseño
              Gráfico y editor de videos. Transformo ideas en piezas gráficas y
              audiovisuales con concepto, creatividad y una mirada propia.
            </p>
            <p>
              Exploro la tipografía, el color, la composición y el movimiento
              para comunicar con claridad e impacto.
            </p>
            <div className="interests">
              <span className="tiny-label">ÁREAS DE INTERÉS</span>
              <div>
                {[
                  'Identidad y logotipos',
                  'Editorial y publicidad',
                  'Comunicación visual',
                  'Redes sociales',
                  'Composición visual',
                  'Edición audiovisual',
                  'Animación y movimiento',
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="herramientas" className="section tools">
        <SectionLabel number="02">MI CAJA DE IDEAS</SectionLabel>
        <div className="section-heading" data-reveal>
          <h2>
            HERRAMIENTAS<span className="red">.</span>
          </h2>
          <p>
            El concepto marca el camino.
            <br />
            Las herramientas lo hacen posible.
          </p>
        </div>
        <div className="tool-list">
          {[
            {
              name: 'Adobe Illustrator',
              icon: 'illustrator',
              desc: 'Vectores e identidad visual',
              short: '01',
            },
            {
              name: 'Adobe Photoshop',
              icon: 'photoshop',
              desc: 'Imagen y composición',
              short: '02',
            },
            {
              name: 'Adobe InDesign',
              icon: 'indesign',
              desc: 'Diseño y narrativa editorial',
              short: '03',
            },
            {
              name: 'CapCut',
              icon: 'capcut',
              desc: 'Edición y movimiento',
              short: '04',
            },
          ].map((t) => (
            <article className="tool" key={t.name} data-reveal>
              <span className="tool-index">/{t.short}</span>
              <div className={'tool-icon ' + t.icon}>
                <img
                  src={'/icons/' + t.icon + '.svg'}
                  alt={'Logotipo oficial de ' + t.name}
                  loading="lazy"
                />
              </div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </section>
      <section id="diseno-grafico" className="section graphic">
        <SectionLabel number="03">IDEAS QUE TOMAN FORMA</SectionLabel>
        <div className="section-heading" data-reveal>
          <h2>
            DISEÑO
            <br />
            <span className="outline">GRÁFICO</span>
            <span className="red">.</span>
          </h2>
          <div>
            <p>
              Concepto, composición y carácter.
              <br />
              Un espacio para mi universo visual.
            </p>
            <span className="collection-note">
              <i className="red-dot" />
              {trabajosGraficos.length
                ? 'SELECCIÓN DE TRABAJOS'
                : 'SELECCIÓN EN CONSTRUCCIÓN'}
            </span>
          </div>
        </div>
        <div className="graphic-gallery">
          {trabajosGraficos.length ? (
            trabajosGraficos.map((work) => (
              <button
                data-reveal
                className={'work ' + work.formato}
                key={work.imagen}
                onClick={() =>
                  setMedia({ title: work.titulo, src: work.imagen })
                }
              >
                <img loading="lazy" src={work.imagen} alt={work.titulo} />
                <span className="work-caption">
                  <span>
                    {work.titulo}
                    <small>{work.categoria}</small>
                  </span>
                  <ArrowUpRight />
                </span>
              </button>
            ))
          ) : (
            <>
              <div className="empty-work large" data-reveal>
                <div className="empty-art art-one" aria-hidden="true">
                  <span>
                    FORMA
                    <br />
                    <i>&</i> CONCEPTO
                  </span>
                  <div className="crosshair">+</div>
                </div>
                <div className="empty-caption">
                  <span>Identidad y comunicación visual</span>
                  <span>PRÓXIMAMENTE ↗</span>
                </div>
              </div>
              <div className="empty-work small" data-reveal>
                <div className="empty-art art-two" aria-hidden="true">
                  <span className="empty-number">Aa</span>
                  <span>
                    EL PODER DE
                    <br />
                    LO VISUAL.
                  </span>
                </div>
                <div className="empty-caption">
                  <span>Diseño editorial y composición</span>
                  <span>PRÓXIMAMENTE ↗</span>
                </div>
              </div>
              <p className="gallery-message" data-reveal>
                Las ideas ya están en marcha.
                <br />
                <span>
                  Este espacio se completa con mis proyectos originales.
                </span>
              </p>
            </>
          )}
        </div>
      </section>
      <section id="edicion-videos" className="section videos">
        <SectionLabel number="04">HISTORIAS EN MOVIMIENTO</SectionLabel>
        <div className="section-heading" data-reveal>
          <h2>
            EDICIÓN
            <br />
            DE <span className="outline">VIDEOS</span>
            <span className="red">.</span>
          </h2>
          <p>
            Un corte. Un ritmo. Una historia.
            <br />
            Otra forma de mirar y de contar.
          </p>
        </div>
        <div
          className={
            'video-gallery' + (trabajosAudiovisuales.length ? ' has-works' : '')
          }
        >
          {trabajosAudiovisuales.length ? (
            trabajosAudiovisuales.map((work, i) => (
              <VideoPlayer
                key={work.video}
                src={work.video}
                poster={work.miniatura}
                titulo={work.titulo}
                categoria={work.categoria}
                formato={work.formato}
                numero={String(i + 1).padStart(2, '0')}
              />
            ))
          ) : (
            <>
              <div className="video-placeholder horizontal" data-reveal>
                <span className="video-frame-label">
                  FORMATO HORIZONTAL / 16:9
                </span>
                <div className="video-empty-center">
                  <span className="play-circle">
                    <Play size={24} />
                  </span>
                  <h3>
                    LO QUE VIENE,
                    <br />
                    SE MUEVE.
                  </h3>
                  <p>Próximamente, mis ediciones audiovisuales.</p>
                </div>
                <span className="video-frame-bottom">
                  EDICIÓN · RITMO · NARRATIVA <span>— : —</span>
                </span>
              </div>
              <div className="video-placeholder vertical" data-reveal>
                <span className="video-frame-label">
                  FORMATO VERTICAL / 9:16
                </span>
                <span className="vertical-outline" aria-hidden="true">
                  9:16
                </span>
                <span className="video-frame-bottom">
                  OTRAS PERSPECTIVAS. <ArrowUpRight size={16} />
                </span>
              </div>
            </>
          )}
        </div>
      </section>
      <section id="contacto" className="section contact" data-ambient>
        <AnimatedBackground />
        <SectionLabel number="05">LA PRÓXIMA IDEA EMPIEZA ACÁ</SectionLabel>
        <div className="contact-title" data-reveal>
          <h2>
            ¿TRABAJAMOS
            <br />
            <span>JUNTOS?</span>
          </h2>
          <ArrowUpRight className="contact-arrow" strokeWidth={1} />
        </div>
        <div className="contact-bottom" data-reveal>
          <p>
            ¿Tenés una idea o un proyecto en mente?
            <br />
            Hablemos y hagámoslo realidad.
          </p>
          <div className="contact-links" onTouchStart={() => {}}>
            <a
              href="https://wa.me/5493834566551"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              <span>
                WHATSAPP<small>+54 9 383 456 6551</small>
              </span>
              <ArrowUpRight />
            </a>
            <a
              href="https://www.instagram.com/david__romano__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>
                INSTAGRAM<small>@david__romano__</small>
              </span>
              <ArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/david-romano-s%C3%A1nchez-2395353b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="-3 -3 30 30"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>
                LINKEDIN<small>David Romano Sánchez</small>
              </span>
              <ArrowUpRight />
            </a>
            <a href="mailto:dav3romsan@gmail.com">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span>
                CORREO ELECTRÓNICO<small>dav3romsan@gmail.com</small>
              </span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-top">
          <a href="#inicio" className="wordmark">
            dr<span>®</span>
            <i />
          </a>
          <p>
            DAVID ROMANO SÁNCHEZ
            <small>Diseño Gráfico | Edición de Videos</small>
          </p>
          <a
            href="https://www.instagram.com/david__romano__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @david__romano__ <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 - Todos los derechos reservados.</span>
          <a href="#inicio">
            VOLVER AL INICIO <ArrowUp size={15} />
          </a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        onCancel={() => setMedia(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMedia(null)
        }}
        aria-label={media?.title || 'Vista ampliada'}
      >
        <div className="modal-top">
          <span>{media?.title}</span>
          <button
            onClick={() => setMedia(null)}
            aria-label="Cerrar vista ampliada"
          >
            <X />
          </button>
        </div>
        {media &&
          (media.video ? (
            <video
              key={media.src}
              controls
              autoPlay
              playsInline
              src={media.src}
              aria-label={media.title}
            />
          ) : (
            <img src={media.src} alt={media.title} />
          ))}
      </dialog>
    </>
  )
}
