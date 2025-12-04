import { joinClasses } from "../../../logic/index.js"
import { Item } from "./item.js"
import "./menu.scss"

interface MenuProps<ItemType> {
  items: readonly ItemType[]
  selectedItem?: ItemType
  className?: string
  onChange?: (newItem: ItemType) => void
}

export function Menu<const ItemType extends string | number> ({ items, selectedItem, className, onChange }: MenuProps<ItemType>) {
  const menuClasses: string = joinClasses("menu", className)

  return (
    <ul className={menuClasses}>
      {items.map((item) => (
        <Item
          key={item}
          value={item}
          selected={item === selectedItem}
          onClick={() => {
            if (onChange && item !== selectedItem) onChange?.(item)
          }}
        />
      ))}
    </ul>
  )
}