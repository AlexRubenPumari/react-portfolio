import { useContext } from 'react'
import { ModalContext } from './contexts/modal'
import useFullScreen from './hooks/useFullScreen'
import PagesProvider from './contexts/projects'
import Header from './components/interface/Header/Header'
import Viewport from './components/interface/Viewport/Viewport'
import Footer from './components/interface/Footer/Footer'
import ProjectModal from './components/interface/ProjectModal/ProjectModal'
import './styles/index.scss'

export default function App() {
  const { modal, closeModal } = useContext(ModalContext)
  const { fullScreen, enableFullScreen, disableFullScreen } =
    useFullScreen(false)
  return (
    <PagesProvider>
      <Header />
      <Viewport
        onNormalScreen={disableFullScreen}
        isFullScreen={fullScreen}
      />
      {/* {modal && (
        <ProjectModal
          project={modal}
          toClose={closeModal}
        />
      )} */}
      <Footer onFullScreen={enableFullScreen} />
    </PagesProvider>
  )
}
