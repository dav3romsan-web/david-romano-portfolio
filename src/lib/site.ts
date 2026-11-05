export const site = {
  name: 'David Romano Sánchez',
  role: 'Estudiante de Diseño Gráfico | Editor de videos',
  description:
    'Diseño, creatividad y movimiento. Portafolio de David Romano Sánchez, estudiante de Diseño Gráfico y editor de videos.',
  summary:
    'Diseño, creatividad y movimiento. Ideas que se transforman en experiencias visuales.',
}

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
