import { classNames } from '../../../logic/classNames'
import DropMenu from '../DropMenu/DropMenu'
import './Flaps.scss'

export default function Flaps({ currentValue, defaultValue, flaps, values, callbacks }) {
  const getTextOfCurrentValue = currentValue => {
    const i = values.indexOf(currentValue)

    return i >= 0 ? flaps[i] : flaps[values.indexOf(defaultValue)]
  }
  return (
    <>
      <DropMenu
        className='dUnresponsive'
        items={flaps}
        currentValue={currentValue}
        defaultValue={defaultValue}
        values={values}
        text={getTextOfCurrentValue(currentValue)}
        direction='bottom left'
        callbacks={callbacks}
      />
      <ul className='Flaps dResponsive'>
        {flaps.map((flap, index) => (
          <Flap
            key={values[index]}
            name={flap}
            currentValue={currentValue}
            isDefaultFlap={!values.includes(currentValue) && values[index] === defaultValue}
            value={values[index]}
            callback={callbacks[index]}
          />
        ))}
      </ul>
    </>
  )
}
function Flap({ name, currentValue, isDefaultFlap, value, callback }) {
  const className = classNames('Flap', {
    'selected': currentValue === value || isDefaultFlap
  })
  return (
    <li
      className={className}
      onClick={() => callback(value)}>
      {name}
    </li>
  )
}
