import { useProjectsContext } from '../hooks/useProjectsContext'
import { useStepper } from './useStepper'
import { PAGES } from '../config/pages'
import { getTotalPages, getValueOfPage } from '../logic/pages'

export function usePageNavigation() {
  const cantPages = getTotalPages(useProjectsContext().projects.length)
  const { value, setValue, goNextLooped, goPreviousLooped } = useStepper(
    { min: 1, max: cantPages, initial: getValueOfPage(PAGES.INDEX) }
  )

  const goToIndexPage = () => setValue(getValueOfPage(PAGES.INDEX))
  const goToAboutMePage = () => setValue(getValueOfPage(PAGES.ABOUT_ME))
  const goToFirstProjectPage = () => setValue(getValueOfPage(PAGES.FIRST_PROJECT))
  const goToContactsPage = () => setValue(getValueOfPage(PAGES.CONTACTS, cantPages))

  return { 
    page: value, cantPages,
    goToNextPage: goNextLooped, goToPreviousPage: goPreviousLooped,
    goToIndexPage, goToAboutMePage, goToFirstProjectPage, goToContactsPage
  }
}