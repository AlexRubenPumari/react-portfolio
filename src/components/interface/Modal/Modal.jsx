import { useEffect } from 'react'
import ICloseButton from '../ICloseButton/ICloseButton'
import './Modal.scss'

export default function Modal({ children, onClose, className = '' }) {
  useEffect(() => {
    const handleKeyUp = ({ key }) => {
      if (key === 'Escape') onClose()
    }

    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [])


  return (
    <div className='Modal'>
      <ICloseButton className='Modal__btn' onClick={onClose} />
      <div className={className}>{children}</div>
    </div>
  )
}