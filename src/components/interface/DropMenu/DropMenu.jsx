import { useState, useEffect, useRef } from 'react'
import { getDropMenuStyles } from '../../../logic/styles'
import './DropMenu.scss'

export default function DropMenu({
  className = '',
  items,
  defaultValue,
  values,
  currentValue,
  text,
  Icon,
  direction,
  callbacks,
  mod = '',
}) {
  const [isDropped, setIsDropped] = useState(false)
  const { arrow, styles } = getDropMenuStyles(direction, isDropped)
  const btnRef = useRef(null)
  const handleClickOutMenu = e => {
    if (btnRef.current && !btnRef.current.contains(e.target)) {
      setIsDropped(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutMenu)
    return () => {
      document.removeEventListener('click', handleClickOutMenu)
    }
  }, [])
  return (
    <>
      <button
        className={`IButton DropMenu ${className}`}
        onClick={() => setIsDropped(!isDropped)}
        ref={btnRef}>
        {Icon && <Icon className='DropMenu__icon' />}
        {text && (
          <span
            className={`DropMenu__label ${
              mod ? `DropMenu__label--${mod}` : ''
            }`}>
            {text}
          </span>
        )}
        <span className='DropMenu__arrow'>{arrow}</span>
        {isDropped && (
          <ul className='DropMenu__menu' style={styles}>
            {items.map((item, index) => (
              <Item
                key={values[index]}
                current={currentValue}
                isDefaultItem={!values.includes(currentValue) && values[index] === defaultValue}
                value={values[index]}
                callback={callbacks[index]}
              >
                {item}
              </Item>
            ))}
          </ul>
        )}
      </button>
    </>
  )
}
function Item({ children, current, value, isDefaultItem, callback }) {
  return (
    <li
      className={`DropMenu__item ${value === current || isDefaultItem ? 'selected' : ''}`}
      onClick={() => callback(value)}
    >
      {children}
    </li>
  )
}
