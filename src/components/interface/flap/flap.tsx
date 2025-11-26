import { joinClasses } from "../../../logic/index.js"
import "./flap.scss"

export type FlapValue = string | number

interface FlapProps {
  value: FlapValue
  isSelectedFlap: boolean
  onClick?: (value: FlapValue) => void
}

export function Flap (
  { value, isSelectedFlap, onClick }: FlapProps
) {
  const flapClasses: string = joinClasses(
    "flap",
    isSelectedFlap && "flap--selected",
  )

  return (
    <li className={flapClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}