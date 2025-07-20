import { PAGES as P } from '../../../config/pages'
// import { useDraggable } from '../../../hooks/useDraggable'
import { scaleElement } from '../../../logic/styles'
import { getPageOfValue } from '../../../logic/pages'
import { useZoom } from '../../../hooks/useZoom'
import { usePagesContext } from '../../../hooks/usePagesContext'
import { useProjectsContext } from '../../../hooks/useProjectsContext'
import { useElementContext } from '../../../contexts/element'
import IndexPage from '../../pages/IndexPage/IndexPage'
import AboutMePage from '../../pages/AboutMePage/AboutMePage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import ProjectPage from '../../pages/ProjectPage/ProjectPage'
import './Page.scss'

export default function PageController() {
  const { elementRef, value } = useElementContext()
  const isTouchDevice = ('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0)
  useZoom({
    ref: elementRef,
    onZoomIn: e => scaleElement(elementRef.current, value + e / 20),
    onZoomOut: e => scaleElement(elementRef.current, value - e / 20),
    isTouchDevice,
  })
  const { page, cantPages } = usePagesContext()
  const { projects } = useProjectsContext()
  const pageValue = getPageOfValue(page, cantPages)
  return (
    <div ref={elementRef} className='Page' >
      {pageValue === P.INDEX && <IndexPage />}
      {pageValue === P.ABOUT_ME && <AboutMePage />}
      {pageValue === P.CONTACTS && <ContactsPage />}
      {pageValue >= P.FIRST_PROJECT && <ProjectPage project={projects[pageValue]} />}
    </div>
  )
}  