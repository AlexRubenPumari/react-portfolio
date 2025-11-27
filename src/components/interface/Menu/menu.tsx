import { joinClasses } from "../../../logic/index.js"
import { MenuItem } from "./menu-item.js"
import type { MenuItemValue } from "./menu-item.js"
import "./menu.scss"

interface MenuItem {
  value: MenuItemValue
  onClick?: (value: MenuItemValue) => void
}

interface MenuProps {
  items: MenuItem[]
  selectedItem?: MenuItemValue
  className?: string
}

export function Menu ({ items, selectedItem, className }: MenuProps) {
  const menuClasses: string = joinClasses("menu", className)

  return (
    <ul className={menuClasses}>
      {items.map(({ value, onClick }: MenuItem) => (
        <MenuItem
          key={value}
          value={value}
          selected={value === selectedItem}
          {...(onClick ? { onClick } : {})}
        />
      ))}
    </ul>
  )
}