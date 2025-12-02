import { useState } from "react"
import { getChevronIcon, joinClasses } from "../../../logic/index.js"
import { Menu, Button } from "../index.js"
import type { Direction } from "../../../types/direction.js"
import type { ItemValue, Item } from "../menu/item.js"
import "./menu-button.scss"

interface MenuButtonProps {
  label: string
  items: Item[]
  direction?: Direction
  initialIsOpen?: boolean
  selectedItem?: ItemValue
}

export function MenuButton(
   { label, items, selectedItem, direction = "bottom", initialIsOpen }: MenuButtonProps
) {
  const [isOpen, setIsOpen] = useState<boolean>(!!initialIsOpen)
  const chevronIcon: string = getChevronIcon(isOpen, direction)
  const menuClasses = joinClasses(
    "menu-button__menu",
    `menu-button__menu--${direction}`,
  )

  return (
    <div className="menu-button">
      <Button onClick={() => setIsOpen(!isOpen)}>
        {`${label} ${chevronIcon}`}
      </Button>
      {isOpen && (
        <Menu
          className={menuClasses}
          items={items}
          {...(selectedItem && { selectedItem })}
        />
      )}
    </div>
  )
}