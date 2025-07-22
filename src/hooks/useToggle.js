import { useState } from 'react'

export function useToggle(initValue = false) {
  const [toggle, setToggle] = useState(initValue)
  const setToOn = () => setToggle(true)
  const setToOff = () => setToggle(false)
  const setToToggle = () => setToggle(!toggle)

  return { toggle, setToOn, setToOff, setToToggle }
}