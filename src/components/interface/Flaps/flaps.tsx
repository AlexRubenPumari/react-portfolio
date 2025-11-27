import { Flap } from "../flap/flap.js"
import type { FlapValue } from "../flap/flap.js"
import "./flaps.scss"

interface Flap {
  value: FlapValue
  onClick?: (value: FlapValue) => void
}

interface FlapsProps {
  flaps: Flap[]
  selectedFlap: FlapValue
}

export function Flaps({ flaps, selectedFlap } : FlapsProps) {
  return (
    <>
      <ul className="flaps">
        {flaps.map(({ value, onClick }: Flap) => (
          <Flap
            key={value}
            value={value}
            selected={value === selectedFlap}
            {...(onClick ? { onClick } : {})}
          />
        ))}
      </ul>
    </> 
  )
}