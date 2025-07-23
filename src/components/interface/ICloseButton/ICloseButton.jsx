import { classNames } from '../../../logic/classNames'
import IButton from '../IButton/IButton'
import './ICloseButton.scss'

export default function ICloseButton({ onClick, mod }) {
  const className = classNames('ICloseButton', mod && `ICloseButton--${mod}`)
  return (
    <IButton className={className} onClick={onClick} symbol='×' />
  )
}
