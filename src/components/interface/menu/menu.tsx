import { joinClasses } from "../../../logic/index.js"
import { Item } from "./item.js"
import type { ItemValue, Item as IItem } from "./item.js"
import "./menu.scss"

interface MenuProps {
  items: IItem[]
  selectedItem?: ItemValue
  className?: string
}

export function Menu ({ items, selectedItem, className }: MenuProps) {
  const menuClasses: string = joinClasses("menu", className)

  return (
    <ul className={menuClasses}>
      {items.map(({ value, onClick }: IItem) => (
        <Item
          key={value}
          value={value}
          selected={value === selectedItem}
          {...(onClick ? { onClick } : {})}
        />
      ))}
    </ul>
  )
}