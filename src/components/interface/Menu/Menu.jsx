import { classNames } from '../../../logic/classNames'
import './Menu.scss'

export default function Menu ({
  items, values, currentValue, defaultValue, callbacks, className
}) {
  const isFunctionCallback = typeof callbacks === 'function'

  return (
    <ul className={classNames('Menu', className)}>
      {items.map((label, index) => {
        const value = values[index];
        const isSelected = value === currentValue || (!values.includes(currentValue) && value === defaultValue)
        const handleClick = isFunctionCallback ? callbacks : callbacks?.[index]

        return (
          <MenuItem
            key={value}
            label={label}
            value={value}
            isSelected={isSelected}
            onClick={handleClick}
          />
        )
      })}
    </ul>
  )
}

function MenuItem ({ label, value, isSelected, onClick }) {
  const itemClass = classNames('Menu__item', isSelected && 'selected')

  return (
    <li className={itemClass} onClick={() => onClick?.(value)}>
      {label}
    </li>
  )
}