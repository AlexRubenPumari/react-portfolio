import { createContext, useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import { PAGES, DEFAULT_PAGES_CANT } from '../config/pages'

export const PagesContext = createContext()

export default function PagesProvider ({ children }) {
  const [page, setPage] = useState(PAGES.INDEX)
  const { projects } = useProjects()
  // // console.log(projects.length)
  const goToNextPage = () => {
    if (page >= PAGES.INDEX) {
      if (page < projects.length - 1) setPage(page + 1)
      if (page >= projects.length - 1) setPage(PAGES.CONTACTS)
    }
    if (page === PAGES.CONTACTS) {
      setPage(PAGES.INDEX)
    }
  }
  const goToPreviousPage = () => {
    if (page >= PAGES.INDEX) setPage(page - 1)
    if (page === PAGES.CONTACTS) setPage(projects.length - 1)
  }
  const goToIndexPage = () => setPage(PAGES.INDEX)
  const goToAboutMePage = () => setPage(PAGES.ABOUT_ME)
  const goToFirstProjectPage = () => setPage(PAGES.FIRST_PROJECT)
  const goToContactsPage = () => setPage(PAGES.CONTACTS)

  return (
    <PagesContext.Provider
      value={{
        page, cantPages: projects.length + DEFAULT_PAGES_CANT,
        goToNextPage, goToPreviousPage,
        goToIndexPage, goToAboutMePage, goToFirstProjectPage, goToContactsPage
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}
