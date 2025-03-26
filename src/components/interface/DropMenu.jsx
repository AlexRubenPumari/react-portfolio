import { useState, cloneElement } from 'react'
import { getDropMenuStyles } from '../../logic/styles'

export default function DropMenu({
  items,
  values,
  currentValue,
  text,
  icon,
  direction,
  callback,
}) {
  const [isDropped, setIsDropped] = useState(false)
  let arrow
  const getArrow = bool => (bool ? '▼' : '▲')
  const styles = getDropMenuStyles(direction)
  if (direction.startsWith('bottom')) {
    arrow = getArrow(!isDropped)
  }
  if (direction.startsWith('top')) {
    arrow = getArrow(isDropped)
  }
  return (
    <>
      <button
        className='IButton DropMenu'
        onClick={() => setIsDropped(!isDropped)}>
        {icon && cloneElement(icon, { classIcon: 'DropMenu__icon' })}
        {text && <span>{text}</span>}
        <span className='DropMenu__arrow'>{arrow}</span>
        {isDropped && (
          <Menu
            styles={styles}
            items={items}
            values={values}
            currentValue={currentValue}
            callback={callback}
          />
        )}
      </button>
    </>
  )
}
function Menu({ items, values, currentValue, styles, callback }) {
  return (
    <ul className='DropMenu__menu' style={styles}>
      {items.map((item, index) => {
        const value = values[index]
        return (
          <li
            key={value}
            className={`DropMenu__item ${
              value === currentValue ? 'selected' : ''
            }`}
            onClick={() => callback(value)}>
            {item}
          </li>
        )
      })}
    </ul>
  )
}
