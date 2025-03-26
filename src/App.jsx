import { useState } from 'react'
import { PAGES } from './config/constants'
import Header from './components/interface/Header'
import Footer from './components/interface/Footer'
import IndexPage from './components/pages/IndexPage'
import ProjectsPage from './components/pages/ProjectsPage'
import AboutMePage from './components/pages/AboutMePage'
import ContactsPage from './components/pages/ContactsPage'
import './styles/App.css'

export default function App() {
  const [page, setPage] = useState(PAGES.INDEX)
  return (
    <>
      <Header currentPage={page} changePage={setPage} />
      <main className='Viewport'>
        <div className='Page'>
          {page === PAGES.INDEX && <IndexPage />}
          {page === PAGES.PROJECTS && <ProjectsPage />}
          {page === PAGES.ABOUT_ME && <AboutMePage />}
          {page === PAGES.CONTACTS && <ContactsPage />}
        </div>
      </main>
      <Footer currentPage={page} changePage={setPage} />
    </>
  )
}
