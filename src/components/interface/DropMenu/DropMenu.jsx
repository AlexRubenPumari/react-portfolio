import { useRef, useEffect } from 'react'
import { joinClasses } from '../../../logic/index.js'
import { Button } from '../button/button'
import Menu from '../Menu/Menu'
import './DropMenu.scss'

// function useClickOutside(callback) {
//   const ref = useRef(null)
//   useEffect(() => {
//     const handleClick = e => {
//       if (ref.current && !ref.current.contains(e.target)) callback()
//     }
//     document.addEventListener('click', handleClick)
//     return () => document.removeEventListener('click', handleClick)
//   }, [])
//   return ref
// }

// function getArrowSymbol(dropped, direction) {
//   const isBottom = direction.includes('bottom');
//   return dropped
//     ? (isBottom ? '▲' : '▼')
//     : (isBottom ? '▼' : '▲')
// }

export default function DropMenu({
  className, direction = 'bottom',
  Icon, text,
  items, values, defaultValue, currentValue, callbacks,
}) {
  const { toggle: dropped, setToToggle: toggleMenu, setToOff: closeMenu } = useToggle()
  const btnRef = useClickOutside(closeMenu)

  const classes = joinClasses(
    'DropMenu', dropped && 'DropMenu--dropped', className
  )

  const menuClasses = classNames(
    direction.includes('bottom') && 'Menu--bottom',
    direction.includes('top') && 'Menu--top',
    direction.includes('left') && 'Menu--left',
    direction.includes('right') && 'Menu--right'
  )

  return (
    <div className={classes}>
      <Button
        onClick={toggleMenu}
        symbol={getArrowSymbol(dropped, direction)}
      >
        {text}
      </Button>

      {dropped && (
        <Menu
          className={menuClasses}
          items={items}
          currentValue={currentValue}
          defaultValue={defaultValue}
          values={values}
          callbacks={callbacks}
        />
      )}
    </div>
  )
}