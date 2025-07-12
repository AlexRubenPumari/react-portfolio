import { classNames } from '../../../logic/classNames'

export default function Menu({ items, values, currentValue, defaultValue, callbacks }) {
  return (
    <ul className='DropMenu__menu'>
      {items.map((item, index) => {
        return (
          <Item
            key={values[index]}
            current={currentValue}
            isDefaultItem={!values.includes(currentValue) && values[index] === defaultValue}
            value={values[index]}
            callback={
              typeof callbacks === 'function'
                ? callbacks
                : callbacks[index]
            }
          >
            {item}
          </Item>
        )
      })}
    </ul>
  )
}

function Item({ children, current, value, isDefaultItem, callback }) {
  const className = classNames(
    'DropMenu__item', { 'selected': value === current || isDefaultItem }
  )
  return (
    <li
      className={className}
      onClick={() => callback(value)}
    >
      {children}
    </li>
  )
}