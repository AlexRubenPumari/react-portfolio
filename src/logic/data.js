export function getTitleFrom (string) {
  return string.replaceAll('-', ' ').toUpperCase().slice(2)
}

export function getFormatedTag(tag) {
  const tags = {
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    js: 'JavaScript',
    javascript: 'JavaScript',
    tailwind: 'Tailwind',
    express: 'Express',
    expressjs: 'Express',
    tailwindcss: 'Tailwind',
    react: 'React',
    'asp-net': 'ASP.NET',
  }

  return tags[tag] || ''
}