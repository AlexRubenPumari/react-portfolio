import { useModalContext } from './contexts/modal'
import { useToggle } from './hooks/useToggle'

import PagesProvider from './contexts/pages'
import RepositoriesProvider from './contexts/repositories'
import ElementProvider from './contexts/element'

import Header from './components/interface/Header/Header'
import Viewport from './components/interface/Viewport/Viewport'
import Footer from './components/interface/Footer/Footer'
import RepositoryModal from './components/interface/RepositoryModal/RepositoryModal'
import './styles/index.scss'

export default function App() {
  const { modal, closeModal } = useModalContext()
  const { toggle: isFullScreen, setToOn: turnOnFullScreen, setToOff: turnOffFullScreen } = useToggle()
  return (
    <RepositoriesProvider>
      <ElementProvider>
        <PagesProvider>
          <Header />
          <Viewport
            onNormalScreen={turnOffFullScreen}
            isFullScreen={isFullScreen}
          />
          {modal && (
            <RepositoryModal project={modal} onClose={closeModal} />
          )}
          <Footer onFullScreen={turnOnFullScreen} />
        </PagesProvider>
      </ElementProvider>
    </RepositoriesProvider>
  )
}