import { PAGES as P } from '../../../config/pages'
import { useDraggable } from '../../../hooks/useDraggable'
import { usePagesContext } from '../../../hooks/usePagesContext'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AboutMePage from '../../pages/AboutMePage/AboutMePage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import './Page.scss'

export default function PageController() {
  const { elementRef } = useDraggable()
  const { page } = usePagesContext()

  return (
    <div ref={elementRef} className='Page' >
      {page === P.INDEX && <IndexPage />}
      {page === P.ABOUT_ME && <AboutMePage />}
      {page === P.CONTACTS && <ContactsPage />}
      {page >= P.FIRST_PROJECT && page}
    </div>
  )
} 