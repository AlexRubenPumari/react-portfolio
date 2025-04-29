import IButton from './IButton'
export default function IRoundedButton ({ symbol, onClick }) {
  return (
    <IButton mod='rounded' symbol={symbol} onClick={onClick} />
  )
}
