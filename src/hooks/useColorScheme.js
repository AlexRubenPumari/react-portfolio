import { useState, useEffect } from 'react'
import { MODES } from '../config/constants'
import { changeDisplayMode } from '../logic/styles'

export default function useColorScheme () {
  const { DARK, LIGHT, AUTO } = MODES
  const [mode, setMode] = useState(AUTO)
  const setDarkMode = () => setMode(MODES.DARK)
  const setLigthMode = () => setMode(MODES.LIGHT)
  const setAutoMode = () => setMode(MODES.AUTO)
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

  return { mode, setDarkMode, setLigthMode, setAutoMode }
}