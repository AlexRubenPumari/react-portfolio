import { useDraggable } from '../../hooks/useDraggable'
import { PAGES } from '../../config/constants'
import IndexPage from '../pages/IndexPage/IndexPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import AboutMePage from '../pages/AboutMePage/AboutMePage'
import ContactsPage from '../pages/ContactsPage/ContactsPage'
import ICloseButton from './ICloseButton'
import Pagination from './Pagination'

export default function Viewport({
  currentPage,
  changePage,
  onNormalScreen,
  isFullScreen,
}) {
  const { elementRef } = useDraggable()
  
  const { INDEX, PROJECTS, ABOUT_ME, CONTACTS } = PAGES
  return (
    <main className={`Viewport${isFullScreen ? ' Viewport--fullScreen' : ''}`}>
      <div ref={elementRef} className='Page' >
        {currentPage === INDEX && <IndexPage />}
        {currentPage === PROJECTS && <ProjectsPage />}
        {currentPage === ABOUT_ME && <AboutMePage />}
        {currentPage === CONTACTS && <ContactsPage />}
      </div>
      {isFullScreen && (
        <>
          <Pagination
            min={0}
            max={3}
            current={currentPage}
            updateTo={changePage}
            mod='fullScreen'
          />
          <ICloseButton onClick={onNormalScreen} />
        </>
      )}
    </main>
  )
}
