import { PAGES } from '../../config/constants'
import IndexPage from '../pages/IndexPage'
import ProjectsPage from '../pages/ProjectsPage'
import AboutMePage from '../pages/AboutMePage'
import ContactsPage from '../pages/ContactsPage'
import ICloseButton from './ICloseButton'
import Pagination from './Pagination'

export default function Viewport({
  currentPage,
  changePage,
  onNormalScreen,
  isFullScreen,
}) {
  const { INDEX, PROJECTS, ABOUT_ME, CONTACTS } = PAGES
  return (
    <main className={`Viewport${isFullScreen ? ' Viewport--fullScreen' : ''}`}>
      <div className='Page'>
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
