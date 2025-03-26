import { clamp } from '../../logic/clamps'

export default function Trackbar({
  value,
  changeValue,
  min,
  max,
  step,
  className = '',
}) {
  const TrackbarClass = `Trackbar ${className}` 
  return (
    <div className={TrackbarClass}>
      <button
        className='IButton IButton--rounded'
        onClick={() => changeValue(clamp(value - step, min, max))}>
        -
      </button>
      <input
        className='Trackbar__input'
        onChange={e => changeValue(Number(e.target.value))}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <button
        className='IButton IButton--rounded'
        onClick={() => changeValue(clamp(value + step, min, max))}>
        +
      </button>
    </div>
  )
}
