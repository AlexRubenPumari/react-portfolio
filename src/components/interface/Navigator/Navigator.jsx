import IRoundedButton from '../IRoundedButton/IRoundedButton'
import './Navigator.scss'

export default function Navigator({
  cant,
  label,
  current,
  mod='',
  onNext,
  onPrevious,
}) {
  return (
    <div className={`Navigator ${mod ? `Navigator--${mod}` : ''}`}>
      <IRoundedButton symbol='◀' onClick={onPrevious} />
      <span>
        { label && <span className='dResponsive'>{`${label} `}</span>}
        {`${current} de ${cant}`}
      </span>
      <IRoundedButton symbol='▶' onClick={onNext} />
    </div>
  )
}
