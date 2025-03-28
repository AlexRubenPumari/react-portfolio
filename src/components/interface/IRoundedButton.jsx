import IButton from './IButton'
export default function IRoundedButton ({ symbol, onClick }) {
  return (
    <IButton className='IButton--rounded' symbol={symbol} onClick={onClick} />
  )
}
