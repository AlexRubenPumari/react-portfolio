import { useState, cloneElement, useEffect, useRef } from 'react'
import { getDropMenuStyles } from '../../logic/styles'

export default function DropMenu({
  className = '',
  items,
  values,
  currentValue,
  text,
  icon,
  direction,
  callback,
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
      console.log('Desmontando tarea...')
      document.removeEventListener('click', handleClickOutMenu)
    }
  }, [])
  return (
    <>
      <button
        className={`IButton DropMenu ${className}`}
        onClick={() => setIsDropped(!isDropped)}
        ref={btnRef}>
        {icon && cloneElement(icon, { classIcon: 'DropMenu__icon' })}
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
                value={values[index]}
                callback={callback}>
                {item}
              </Item>
            ))}
          </ul>
        )}
      </button>
    </>
  )
}
function Item({ children, current, value, callback }) {
  return (
    <li
      className={`DropMenu__item ${value === current ? 'selected' : ''}`}
      onClick={() => callback(value)}>
      {children}
    </li>
  )
}
