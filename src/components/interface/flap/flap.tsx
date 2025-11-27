import { joinClasses } from "../../../logic/index.js"
import "./flap.scss"

export type FlapValue = string | number

interface FlapProps {
  value: FlapValue
  selected: boolean
  onClick?: (value: FlapValue) => void
}

export function Flap (
  { value, selected, onClick }: FlapProps
) {
  const flapClasses: string = joinClasses(
    "flap",
    selected && "flap--selected",
  )

  return (
    <li className={flapClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}