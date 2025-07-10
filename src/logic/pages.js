import { PAGES, DEFAULT_PAGES_CANT } from '../config/pages'

export function getCorrectPageN (pageValue, n) {
  if (pageValue === PAGES.CONTACTS) {
    return n
  } else {
    return pageValue + DEFAULT_PAGES_CANT
  }
}

export function getTotalPages(projectsLength) {
  return projectsLength + DEFAULT_PAGES_CANT
}

export function getNextPage(currentPage, projectsLength) {
  if (currentPage === PAGES.CONTACTS) return PAGES.INDEX
  if (currentPage < projectsLength - 1) return currentPage + 1
  return PAGES.CONTACTS
}

export function getPreviousPage(currentPage, projectsLength) {
  if (currentPage === PAGES.CONTACTS) return projectsLength - 1
  if (currentPage >= PAGES.INDEX) return currentPage - 1
}