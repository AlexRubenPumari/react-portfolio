import { useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import { PAGES } from '../config/pages'
import { getTotalPages, getNextPage, getPreviousPage } from '../logic/pages'

export function usePageNavigation() {
  const [page, setPage] = useState(PAGES.INDEX)
  const { projects } = useProjects()

  const goToNextPage = () => setPage(prev => getNextPage(prev, projects.length))
  const goToPreviousPage = () => setPage(prev => getPreviousPage(prev, projects.length))

  const goToIndexPage = () => setPage(PAGES.INDEX)
  const goToAboutMePage = () => setPage(PAGES.ABOUT_ME)
  const goToFirstProjectPage = () => setPage(PAGES.FIRST_PROJECT)
  const goToContactsPage = () => setPage(PAGES.CONTACTS)

  return { 
    page, cantPages: getTotalPages(projects.length),
    goToNextPage, goToPreviousPage,
    goToIndexPage, goToAboutMePage, goToFirstProjectPage, goToContactsPage
  }
}