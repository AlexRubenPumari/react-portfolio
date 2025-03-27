import { useState } from 'react'

export default function useModal (initialModal) {
  const [modal, setModal] = useState(initialModal)
  const closeModal = () => setModal(null)

  return { modal, setModal, closeModal }
}