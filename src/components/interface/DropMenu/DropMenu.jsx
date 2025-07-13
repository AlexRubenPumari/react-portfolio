import { useClickOutside } from './useClickOutside'
import { useToggle } from './useToggle'
import { classNames } from '../../../logic/classNames'
import DropMenuButton from './DropMenuButton'
import Menu from './Menu'
import './DropMenu.scss'

export default function DropMenu({
  className, direction = 'bottom',
  Icon, text,
  items, values, defaultValue, currentValue, callbacks,
}) {
  const { toggle: dropped, setToToggle: toggleMenu, setToOff: closeMenu } = useToggle()
  const { ref: btnRef } = useClickOutside(closeMenu)
  const DropMenuClasses = classNames(
    'DropMenu', getDropMenuClass(direction, dropped), className
  )
  return (
    <div className={DropMenuClasses}>
      <DropMenuButton
        ref={btnRef}
        Icon={Icon}
        text={text}
        onClick={toggleMenu}
      />
      {dropped && (
        <Menu
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

function getDropMenuClass(direction, dropped) {
  let arrClassNames = []

  if (direction.includes('bottom')) arrClassNames.push('DropMenu--bottom')
  if (direction.includes('top')) arrClassNames.push('DropMenu--top')

  if (direction.includes('left')) arrClassNames.push('DropMenu--left')
  if (direction.includes('right')) arrClassNames.push('DropMenu--right')

  if (dropped) arrClassNames.push('DropMenu--dropped')

  return arrClassNames
}