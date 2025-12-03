import { Flap } from "../flap/flap.js"
import type { FlapValue } from "../flap/flap.js"
import "./flaps.scss"

interface FlapsProps {
  flaps: FlapValue[]
  selectedFlap: FlapValue
  onChange?: (newFlap: FlapValue) => void
}

export function Flaps({ flaps, selectedFlap, onChange } : FlapsProps) {
  return (
    <>
      <ul className="flaps">
        {flaps.map((flap: FlapValue) => (
          <Flap
            key={flap}
            value={flap}
            selected={flap === selectedFlap}
            onClick={() => {
              if (onChange && flap !== selectedFlap) onChange?.(flap)
            }}
          />
        ))}
      </ul>
    </> 
  )
}