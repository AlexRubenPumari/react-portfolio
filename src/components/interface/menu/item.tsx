import { joinClasses } from "../../../logic/index.js"
import "./item.scss"

export interface Item {
  value: ItemValue
  onClick?: (value: ItemValue) => void
}

export type ItemValue = string | number

interface ItemProps {
  value: ItemValue
  selected: boolean
  onClick?: (value: ItemValue) => void
}

export function Item ({ value, selected, onClick }: ItemProps) {
  const itemClasses = joinClasses(
    "item",
    selected && "item--selected"
  )
  return (
    <li className={itemClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}