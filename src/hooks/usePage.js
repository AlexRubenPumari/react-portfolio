import { useRepositoriesContext } from '../contexts/repositories'
import { useStepper } from './useStepper'
import { PAGES } from '../config/pages'
import { getTotalPages, getPageOfValue } from '../logic/pages'

export function usePageNavigation() {
  const cantPages = getTotalPages(useRepositoriesContext().repositories.length)
  const { value, setValue, goNextLooped, goPreviousLooped } = useStepper(
    { min: 1, max: cantPages, initial: getPageOfValue(PAGES.INDEX) }
  )

  const goToIndexPage = () => setValue(getPageOfValue(PAGES.INDEX))
  const goToAboutMePage = () => setValue(getPageOfValue(PAGES.ABOUT_ME))
  const goToFirstProjectPage = () => setValue(getPageOfValue(PAGES.FIRST_PROJECT))
  const goToContactsPage = () => setValue(getPageOfValue(PAGES.CONTACTS, cantPages))

  return { 
    page: value, cantPages,
    goToNextPage: goNextLooped, goToPreviousPage: goPreviousLooped,
    goToIndexPage, goToAboutMePage, goToFirstProjectPage, goToContactsPage
  }
}