import type { ReactNode } from "react"
import { joinClasses } from "../../../logic/index.js"
import "./button.scss"

interface ButtonProps {
  shape?: "square" | "rectangle"
  onClick?: () => void
  disabled?: boolean
  icon?: ReactNode
  children: string
}

export function Button(
  { children, shape = "rectangle", onClick, disabled, icon }: ButtonProps
) {
  const btnClasses = joinClasses(
    "button",
    shape === "square" && "button--square",
    (shape === "square" && !!icon) && "button--square-with-icon",
    (shape === "rectangle" && !!icon) && "button--rectangle-with-icon",
  )

  return (
    <button
      className={btnClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}