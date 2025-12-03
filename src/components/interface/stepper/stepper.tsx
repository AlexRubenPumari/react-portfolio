import { joinClasses } from "../../../logic/index.js"
import { Button } from "../button/index.js"
import "./stepper.scss"

export interface StepperProps {
  value: number
  min?: number
  max: number
  onChange?: (newValue: number) => void
  label?: string | ((value: number, max: number, min: number) => string)
  className?: string
  disabled?: boolean
}

export function Stepper ({
  value,
  min = 1,
  max,
  label,
  className,
  onChange,
  disabled,
}: StepperProps) {
  const canDecrease = !disabled && value > min
  const canIncrease = !disabled && value < max
  const labelContent: string = isFunction(label)
    ? label(value, max, min)
    : label ?? `${value} / ${max}`


  const handleDecrease = () => {
    if (canDecrease) {
      const newValue = value - 1;
      onChange?.(newValue);
    }
  }

  const handleIncrease = () => {
    if (canIncrease) {
      const newValue = value + 1;
      onChange?.(newValue);
    }
  }

  return (
    <div className={joinClasses("stepper", className)}>
        <Button
          size="sm"
          disabled={!canDecrease}
          onClick={handleDecrease}
        >
          ◀
        </Button>

      <span className="stepper-label">
        {labelContent}
      </span>

        <Button
          size="sm"
          disabled={!canIncrease}
          onClick={handleIncrease}
        >
          ▶
        </Button>
    </div>
  )
}

function isFunction (value: any): value is Function {
  return typeof value === "function"
}