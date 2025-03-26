import { useState, cloneElement } from 'react'

export default function DropMenu({
  items,
  values,
  currentValue,
  text,
  icon,
  callback,
}) {
  const [isDropped, setIsDropped] = useState(false)
  return (
    <>
      <button
        className='IButton DropMenu'
        onClick={() => setIsDropped(!isDropped)}>
        {icon && cloneElement(icon, { classIcon: 'DropMenu__icon' })}
        {text && <span>{text}</span>}
        <span className='DropMenu__arrow'>▼</span>
        {isDropped && (
          <Menu
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
function Menu({ items, values, currentValue, callback }) {
  return (
    <ul className='DropMenu__menu'>
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
