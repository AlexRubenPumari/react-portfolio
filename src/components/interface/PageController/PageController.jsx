import { useRepositoriesContext } from '../../../contexts/repositories'
import { usePagesContext } from '../../../contexts/pages'
import { useElementContext } from '../../../contexts/element'

import { useDraggable } from '../../../hooks/useDraggable'
import { useZoomable } from '../../../hooks/useZoomable'
import { getPageOfValue } from '../../../logic/pages'
import { PAGES as P } from '../../../config/pages'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AboutMePage from '../../pages/AboutMePage/AboutMePage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import RepositoryPage from '../../pages/RepositoryPage/RepositoryPage'
import './Page.scss'

const isTouchDevice = ('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  (navigator.msMaxTouchPoints > 0)

export default function PageController() {
  const { elementRef, goNext, goPrevious } = useElementContext()
  const { page, cantPages } = usePagesContext()
  const { repositories } = useRepositoriesContext()

  const pageValue = getPageOfValue(page, cantPages)

  useZoomable({ ref: elementRef, onZoomIn: goNext, onZoomOut: goPrevious, isTouchDevice })
  useDraggable({ ref: elementRef, isTouchDevice })

  const renderPage = () => {
    if (pageValue === P.INDEX) return <IndexPage />
    if (pageValue === P.ABOUT_ME) return <AboutMePage />
    if (pageValue === P.CONTACTS) return <ContactsPage />

    if (pageValue >= P.FIRST_PROJECT && repositories[pageValue]) {
      return <RepositoryPage repository={repositories[pageValue]} />;
    }
  }

  return (
    <div ref={elementRef} className="Page">
      {renderPage()}
    </div>
  )
}