import { clamp } from '../../../logic/clamps'
import IRoundedButton from '../IRoundedButton/IRoundedButton'
import './Trackbar.scss'

export default function Trackbar({
  value,
  onChange,
  min,
  max,
  step,
  className = '',
}) {
  return (
    <div className={`Trackbar ${className}`}>
      <IRoundedButton
        onClick={() => onChange({ target: { value: clamp(value - step, min, max) } })}
        symbol='-'
      />
      <input
        className='Trackbar__input'
        onChange={onChange}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <IRoundedButton
        onClick={() => onChange({ target: { value: clamp(value + step, min, max) } })}
        symbol='+'
      />
    </div>
  )
}
