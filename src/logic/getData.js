import { PAGES_NAMES } from '../config/constants'

export function getTitleFrom (description) {
  const index = description.indexOf(':')
  return description.slice(0, index)
}
export function getDescriptionFrom (description) {
  const index = description.indexOf(':')
  return description.slice(index + 1)
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
    react: 'React'
  }

  return tags[tag] || ''
}