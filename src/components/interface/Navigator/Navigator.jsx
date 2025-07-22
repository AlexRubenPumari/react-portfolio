import { classNames } from '../../../logic/classNames'
import IRoundedButton from '../IRoundedButton/IRoundedButton'
import './Navigator.scss'

export default function Navigator ({
  cant, label = '', current, mod = '', onNext, onPrevious,
}) {
  const className = classNames('Navigator', mod && `Navigator--${mod}`)
  const fullLabel = label ? `${label} ` : ''

  return (
    <div className={className}>
      <IRoundedButton symbol='◀' onClick={onPrevious} />
      <span>
        {label && <span className='dResponsive'>{fullLabel}</span>}
        {`${current} de ${cant}`}
      </span>
      <IRoundedButton symbol='▶' onClick={onNext} />
    </div>
  )
}