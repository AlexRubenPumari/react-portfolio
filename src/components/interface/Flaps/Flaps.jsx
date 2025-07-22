import { classNames } from '../../../logic/classNames'
import DropMenu from '../DropMenu/DropMenu'
import './Flaps.scss'

export default function Flaps({ currentValue, defaultValue, flaps, values, callbacks }) {
  const dropMenuText = getDisplayText({ currentValue, defaultValue, values, flaps })

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
      <ul className="Flaps dResponsive">
        {flaps.map((name, i) => (
          <Flap
            key={values[i]}
            name={name}
            value={values[i]}
            currentValue={currentValue}
            isDefault={!values.includes(currentValue) && values[i] === defaultValue}
            onClick={callbacks[i]}
          />
        ))}
      </ul>
    </>
  )
}
function Flap({ name, value, currentValue, isDefault, onClick }) {
  const className = classNames(
    'Flap', (currentValue === value || isDefault) && 'selected'
  )
  return (
    <li className={className} onClick={() => onClick(value)}>{name}</li>
  )
}

function getDisplayText({ currentValue, defaultValue, values, flaps }) {
  const index = values?.indexOf(currentValue)
  const fallbackIndex = values?.indexOf(defaultValue)

  if (fallbackIndex) return flaps[index >= 0 ? index : fallbackIndex]
}