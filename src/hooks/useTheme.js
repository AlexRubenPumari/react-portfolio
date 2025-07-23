import { useState, useEffect } from 'react'
import { SCHEMES } from '../config/constants'
import { setSchemeTo, getDefaultScheme } from '../logic/scheme'

const { DARK, LIGHT, AUTO } = SCHEMES

export default function useTheme () {
  const [scheme, setScheme] = useState(() => getDefaultScheme())

  const setDarkScheme = () => setScheme(DARK)
  const setLigthScheme = () => setScheme(LIGHT)
  const setAutoScheme = () => setScheme(AUTO)

  useEffect(() => setSchemeTo(scheme), [scheme])

  return { scheme, setDarkScheme, setLigthScheme, setAutoScheme }
}