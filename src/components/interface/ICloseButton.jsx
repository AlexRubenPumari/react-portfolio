import IButton from './IButton'

export default function ICloseButton({ onClick }) {
  return (
    <IButton mod='close' onClick={onClick} symbol='×' />
  )
}
