import { createContext, useState } from 'react'

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