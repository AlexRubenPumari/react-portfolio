import { useContext, useState } from 'react'
import { PAGES } from './config/constants'
import { ModalContext } from './contexts/modal'
import useFullScreen from './hooks/useFullScreen'
import Header from './components/interface/Header'
import Viewport from './components/interface/Viewport'
import Footer from './components/interface/Footer'
import ProjectModal from './components/interface/ProjectModal'
import './styles/App.css'
import './index.scss'

export default function App() {
  const { modal, closeModal } = useContext(ModalContext)
  const [page, setPage] = useState(PAGES.INDEX)
  const { fullScreen, enableFullScreen, disableFullScreen } =
    useFullScreen(false)
  return (
    <>
      <Header
        currentPage={page}
        changePage={setPage}
      />
      <Viewport
        currentPage={page}
        changePage={setPage}
        onNormalScreen={disableFullScreen}
        isFullScreen={fullScreen}
      />
      <Footer
        currentPage={page}
        changePage={setPage}
        onFullScreen={enableFullScreen}
      />
      {modal && (
        <ProjectModal
          project={modal}
          toClose={closeModal}
        />
      )}
    </>
  )
}
