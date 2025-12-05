import { useState } from "react"
import type { Direction } from "../../../types/direction.js"
import { getChevronIcon, joinClasses } from "../../../logic/index.js"
import { Menu, Button } from "../index.js"
import "./menu-button.scss"

interface MenuButtonProps<ItemType> {
  label: string
  items: readonly ItemType[]
  direction?: Direction
  initialIsOpen?: boolean
  selectedItem?: ItemType
  onChange?: (newItem: ItemType) => void
  renderItem?: (item: ItemType) => string
}

export function MenuButton<const ItemType extends string | number> ({
  label,
  items,
  selectedItem,
  direction = "bottom",
  initialIsOpen,
  onChange,
  renderItem,
}: MenuButtonProps<ItemType>) {
  const [isOpen, setIsOpen] = useState<boolean>(!!initialIsOpen)
  const chevronIcon: string = getChevronIcon(isOpen, direction)
  const menuClasses = joinClasses(
    "menu-button__menu",
    `menu-button__menu--${direction}`,
  )

  return (
    <div className="menu-button">
      <Button size="lg" onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span><span>{chevronIcon}</span>
      </Button>
      {isOpen && (
        <Menu
          className={menuClasses}
          items={items}
          {...(selectedItem && { selectedItem })}
          {...(onChange && { onChange })}
          {...(renderItem && { renderItem })}
        />
      )}
    </div>
  )
}