import { createContext, useState, useContext } from 'react'

export const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState(null)
  const closeModal = () => setModal(null)
  return (
    <ModalContext.Provider value={{ modal, closeModal, openModal: setModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext () {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}