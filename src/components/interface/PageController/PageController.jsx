import { useRepositoriesContext } from '../../../contexts/repositories'
import { usePagesContext } from '../../../contexts/pages'
import { useElementContext } from '../../../contexts/element'

import { useDraggable } from '../../../hooks/useDraggable'
import { useZoomable } from '../../../hooks/useZoomable'
import { getPageOfValue, getValueOfPage } from '../../../logic/pages'
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

  const value = getValueOfPage(page, cantPages)

  useZoomable({ ref: elementRef, onZoomIn: goNext, onZoomOut: goPrevious, isTouchDevice })
  useDraggable({ ref: elementRef, isTouchDevice })

  const renderPage = () => {
    if (value === P.INDEX) return <IndexPage />
    if (value === P.ABOUT_ME) return <AboutMePage />
    if (value === P.CONTACTS) return <ContactsPage />

    if (value >= P.FIRST_PROJECT && repositories[value]) {
      return <RepositoryPage repository={repositories[value]} />;
    }
  }

  return (
    <div ref={elementRef} className='Page'>
      {renderPage()}
    </div>
  )
}