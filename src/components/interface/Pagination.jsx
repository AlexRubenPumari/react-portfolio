import { clampLoop } from '../../logic/clamps'

export default function Pagination({
  label,
  min,
  max,
  current,
  updateTo,
}) {
  return (
    <div className='Pagination'>
      <button
        className='IButton IButton--rounded'
        onClick={() => updateTo(clampLoop(current - 1, min, max))}>
        <span className='Pagination__arrow'>◀</span>
      </button>
      <span>
        <span className='dResponsive'>{`${label} `}</span>
        {`${current + 1} de ${max + 1}`}
      </span>
      <button
        className='IButton IButton--rounded'
        onClick={() => updateTo(clampLoop(current + 1, min, max))}>
        <span className='Pagination__arrow'>▶</span>
      </button>
    </div>
  )
}
