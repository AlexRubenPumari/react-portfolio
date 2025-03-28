import { clampLoop } from '../../logic/clamps'
import IRoundedButton from './IRoundedButton'

export default function Pagination({
  label,
  min,
  max,
  current,
  updateTo,
  mod='',
}) {
  return (
    <div className={`Pagination ${mod ? `Pagination--${mod}` : ''}`}>
      <IRoundedButton
        symbol='◀'
        onClick={() => updateTo(clampLoop(current - 1, min, max))}
      />
      <span>
        { label && <span className='dResponsive'>{`${label} `}</span>}
        {`${current + 1} de ${max + 1}`}
      </span>
      <IRoundedButton
        symbol='▶'
        onClick={() => updateTo(clampLoop(current + 1, min, max))}
      />
    </div>
  )
}
