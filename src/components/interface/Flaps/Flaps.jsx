import { getNameFor } from '../../../logic/data'
import DropMenu from '../DropMenu/DropMenu'
import './Flaps.scss'

export default function Flaps({ currentValue, flaps, values, callbacks }) {
  return (
    <>
      <DropMenu
        className='dUnresponsive'
        items={flaps}
        currentValue={currentValue}
        values={values}
        text={getNameFor(currentValue)}
        direction='bottom left'
        callbacks={callbacks}
      />
      <ul className='Flaps dResponsive'>
        {flaps.map((flap, index) => (
          <Flap
            key={values[index]}
            name={flap}
            currentValue={currentValue}
            value={values[index]}
            callback={callbacks[index]}
          />
        ))}
      </ul>
    </>
  )
}
function Flap({ name, currentValue, value, callback }) {
  return (
    <li
      className={`Flap${currentValue === value ? ' selected' : ''}`}
      onClick={() => callback(value)}>
      {name}
    </li>
  )
}
