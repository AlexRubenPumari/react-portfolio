import { useState, useEffect } from 'react'
import { MODES } from '../config/constants'
import { changeDisplayMode } from '../logic/styles'

export default function useColorScheme () {
  const { DARK, LIGHT, AUTO } = MODES
  const [mode, setMode] = useState(AUTO)
  useEffect(() => {
    if (mode === DARK) {
      changeDisplayMode(DARK)
    }
    if (mode === LIGHT) {
      changeDisplayMode(LIGHT)
    }
    if (mode === AUTO) {
      changeDisplayMode(AUTO)
    }
  }, [mode])

  return { mode, setMode, DARK, LIGHT, AUTO }
}