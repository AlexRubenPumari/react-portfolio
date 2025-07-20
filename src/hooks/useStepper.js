import { useState } from 'react'
import { clamp, clampLoop } from '../logic/clamps'

export function useStepper ({
  min, max, step = 1, initial = min
}) {
  const [value, setValue] = useState(() => clamp(initial, min, max))

  const goNext = () => setValue(prev => clamp(prev + step, min, max))
  const goPrevious = () => setValue(prev => clamp(prev - step, min, max))
  const goNextLooped = () => setValue(prev => clampLoop(prev + step, min, max))
  const goPreviousLooped = () => setValue(prev => clampLoop(prev - step, min, max))

  return {
    value,
    setValue: (val) => setValue(clamp(val, min, max)),
    goNext, goNextLooped,
    goPrevious, goPreviousLooped,
  }
}