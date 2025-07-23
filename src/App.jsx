import { useModalContext } from './contexts/modal'
import { useToggle } from './hooks/useToggle'

import PagesProvider from './contexts/pages'
import ProjectsProvider from './contexts/projects'
import ElementProvider from './contexts/element'

import Header from './components/interface/Header/Header'
import Viewport from './components/interface/Viewport/Viewport'
import Footer from './components/interface/Footer/Footer'
import ProjectModal from './components/interface/ProjectModal/ProjectModal'
import './styles/index.scss'

export default function App() {
  const { modal, closeModal } = useModalContext()
  const { toggle: isFullScreen, setToOn: turnOnFullScreen, setToOff: turnOffFullScreen } = useToggle()
  return (
    <ProjectsProvider>
      <PagesProvider>
        <ElementProvider>
          <Header />
          <Viewport
            onNormalScreen={turnOffFullScreen}
            isFullScreen={isFullScreen}
          />
          {modal && (
            <ProjectModal project={modal} onClose={closeModal} />
          )}
          <Footer onFullScreen={turnOnFullScreen} />
        </ElementProvider>
      </PagesProvider>
    </ProjectsProvider>
  )
}