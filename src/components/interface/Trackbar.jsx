import { clamp } from '../../logic/clamps'
import IRoundedButton from './IRoundedButton'

export default function Trackbar({
  value,
  changeValue,
  min,
  max,
  step,
  className = '',
  callback,
}) {
  return (
    <div className={`Trackbar ${className}`}>
      <IRoundedButton
        onClick={() => changeValue(clamp(value - step, min, max))}
        symbol='-'
      />
      <input
        className='Trackbar__input'
        onChange={e => changeValue(Number(e.target.value))}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <IRoundedButton
        onClick={() => changeValue(clamp(value + step, min, max))}
        symbol='+'
      />
    </div>
  )
}
