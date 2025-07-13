import { classNames } from '../../../logic/classNames'
import DropMenu from '../DropMenu/DropMenu'
import './Flaps.scss'

export default function Flaps({ currentValue, defaultValue, flaps, values, callbacks }) {
  const dropMenuText = getTextOfCurrentValue(defaultValue, currentValue, values, flaps)
  const listOfFlaps = flaps.map((flap, index) => (
    <Flap
      key={values[index]}
      name={flap}
      currentValue={currentValue}
      isDefaultFlap={!values.includes(currentValue) && values[index] === defaultValue}
      value={values[index]}
      callback={callbacks[index]}
    />
  ))
  return (
    <>
      <DropMenu
        className='dUnresponsive'
        items={flaps}
        currentValue={currentValue}
        defaultValue={defaultValue}
        values={values}
        text={dropMenuText}
        direction='bottom left'
        callbacks={callbacks}
      />
      <ul className='Flaps dResponsive'>{listOfFlaps}</ul>
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
function getTextOfCurrentValue(defaultValue, currentValue, values, names) {
  const nameIndex = values.indexOf(currentValue)
  const defaultIndex = values.indexOf(defaultValue)

  return names[nameIndex >= 0 ? nameIndex : defaultIndex]
}