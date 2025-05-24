import { PAGES_NAMES } from '../config/constants'

export function getTitleFrom (string) {
  return string.replaceAll('-', ' ').toUpperCase().slice(2)
}
export function getNameFor(index) {
  return PAGES_NAMES[index]
}
export function getFormatedTag(tag) {
  const tags = {
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    js: 'JavaScript',
    javascript: 'JavaScript',
    tailwind: 'Tailwind',
    tailwindcss: 'Tailwind',
    react: 'React',
    'asp-net': 'ASP.NET',
  }

  return tags[tag] || ''
}