import { classNames } from '../../../logic/classNames'
import IButton from '../IButton/IButton'
import './ICloseButton.scss'

export default function ICloseButton({ onClick, className, mod }) {
  const btnClass = classNames('ICloseButton', className, mod && `ICloseButton--${mod}`)
  return (
    <IButton className={btnClass} onClick={onClick} symbol='×' />
  )
}
