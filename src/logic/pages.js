import { PAGES, DEFAULT_PAGES_CANT } from '../config/pages'

export function getTotalPages (repositoriesLength) {
  return repositoriesLength + DEFAULT_PAGES_CANT
}

export function getValueOfPage (page, cantPages) {
  if (page === cantPages)  return PAGES.CONTACTS

  return page - DEFAULT_PAGES_CANT
}

export function getPageOfValue (page, cantPages) {
  if (page === PAGES.CONTACTS) return cantPages

  return page + DEFAULT_PAGES_CANT
}