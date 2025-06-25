import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ModalProvider from './contexts/modal'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider><App /></ModalProvider>
  </StrictMode>
)
