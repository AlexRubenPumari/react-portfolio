import { joinClasses } from "../../../logic/index.js"
import "./menu-item.scss"

export type MenuItemValue = string | number

interface MenuItemProps {
  value: MenuItemValue
  selected: boolean
  onClick?: (value: MenuItemValue) => void
}

export function MenuItem ({ value, selected, onClick }: MenuItemProps) {
  const itemClasses = joinClasses(
    "menu-item",
    selected && "menu-item--selected"
  )
  return (
    <li className={itemClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}