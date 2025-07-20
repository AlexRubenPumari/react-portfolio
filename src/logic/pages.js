import { PAGES, DEFAULT_PAGES_CANT } from '../config/pages'

export function getCorrectPageN (pageValue, n) {
  if (pageValue === PAGES.CONTACTS) {
    return n
  } else {
    return pageValue + DEFAULT_PAGES_CANT
  }
}

export function getTotalPages (projectsLength) {
  return projectsLength + DEFAULT_PAGES_CANT
}

export function getValueOfPage (page, cantPages) {
  if (page === PAGES.CONTACTS) return cantPages

  return page + DEFAULT_PAGES_CANT
}

export function getPageOfValue (value, cantPages) {
  if (value === 7) return -3
  const VALUES = {
    [1]: PAGES.INDEX,
    [2]: PAGES.ABOUT_ME,
    [cantPages]: PAGES.CONTACTS
  }

  return VALUES[value] || value - DEFAULT_PAGES_CANT
}