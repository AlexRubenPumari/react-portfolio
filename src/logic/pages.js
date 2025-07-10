import { PAGES, DEFAULT_PAGES_CANT } from '../config/pages'

export function getCorrectPageN (pageValue, n) {
  if (pageValue === PAGES.CONTACTS) {
    return n
  } else {
    return pageValue + DEFAULT_PAGES_CANT
  }
}