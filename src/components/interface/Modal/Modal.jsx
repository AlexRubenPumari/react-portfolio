import ICloseButton from '../ICloseButton/ICloseButton'
import './Modal.scss'

export default function Modal({ children, toClose, className }) {
  return (
    <div className='Modal__overlay'>
      <div className='Modal'>
        <ICloseButton onClick={() => toClose()} />
        <div className={className}>{children}</div>
      </div>
    </div>
  )
}
