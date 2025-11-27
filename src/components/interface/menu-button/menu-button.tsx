import { useState } from "react"
import { getChevronIcon, joinClasses } from "../../../logic/index.js"
import { Menu } from "../menu/menu.js"
import type { Direction } from "../../../types/direction.js"
import "./menu-button.scss"

interface MenuButtonProps {
  direction: Direction
  initialIsOpen?: boolean
}

export function MenuButton({ direction, initialIsOpen }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!!initialIsOpen)
  const chevronIcon: string = getChevronIcon(isOpen, direction)
  const menuClasses = joinClasses(
    "menu-button__menu",
    `menu-button__menu--${direction}`,
  )

  return (
    <div className="menu-button">
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        {`Tema ${chevronIcon}`}
      </button>
      {isOpen && (
        <Menu
          className={menuClasses}
          items={[
            { value: "Open" },
            { value: "Save" },
            { value: "Edit" },
          ]}
        />
      )}
    </div>
  )
}