import DropMenu from './DropMenu'
import { getNameFor } from '../../logic/getData'

export default function Flaps({ currentFlap, changeFlap, flaps, values }) {
  return (
    <>
      <DropMenu
        className='dUnresponsive'
        items={flaps}
        values={values}
        currentValue={currentFlap}
        text={getNameFor(currentFlap)}
        direction='bottom left'
        callback={changeFlap}
      />
      <ul className='Flaps dResponsive'>
        {flaps.map((flap, index) => (
          <Flap
            key={values[index]}
            current={currentFlap}
            item={flap}
            value={values[index]}
            callback={changeFlap}
          />
        ))}
      </ul>
    </>
  )
}
function Flap({ current, item, value, callback }) {
  return (
    <li
      className={`Flap${current === value ? ' selected' : ''}`}
      onClick={() => callback(value)}>
      {item}
    </li>
  )
}
