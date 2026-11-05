import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
export const secciones = [
  ['inicio', 'Inicio'],
  ['sobre-mi', 'Sobre mí'],
  ['herramientas', 'Herramientas'],
  ['diseno-grafico', 'Diseño gráfico'],
  ['edicion-videos', 'Edición de videos'],
  ['contacto', 'Contacto'],
]
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [active, setActive] = useState('inicio')
  useEffect(() => {
    try {
      const saved = localStorage.getItem('david-tema')
      const value = saved ? saved === 'oscuro' : true
      setDark(value)
      document.documentElement.dataset.theme = value ? 'oscuro' : 'claro'
    } catch {}
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -55% 0px' },
    )
    document
      .querySelectorAll('main section[id]')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.dataset.theme = next ? 'oscuro' : 'claro'
    try {
      localStorage.setItem('david-tema', next ? 'oscuro' : 'claro')
    } catch {}
  }
  return (
    <header className="site-header">
      <a
        href="#inicio"
        className="wordmark"
        aria-label="David Romano, volver al inicio"
      >
        dr<span>®</span>
        <i />
      </a>
      <nav
        aria-label="Navegación principal"
        className={open ? 'navigation is-open' : 'navigation'}
      >
        {secciones.map(([id, label]) => (
          <a
            key={id}
            href={'#' + id}
            className={active === id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          onClick={toggle}
          className="theme-toggle"
          aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
          title={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="header-contact" href="#contacto">
          Hablemos <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
