import IButton from '../IButton/IButton'
export default function IRoundedButton ({ symbol, onClick }) {
  return (
    <IButton mod='rounded' symbol={symbol} onClick={onClick} />
  )
}
