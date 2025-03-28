import IButton from './IButton'

export default function ICloseButton({ onClick }) {
  return (
    <IButton className='ICloseButton' onClick={onClick} symbol='×' />
  )
}
