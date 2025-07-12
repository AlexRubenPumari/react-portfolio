import {
  MODES,
  LIGHT_MODE_SCHEME,
  DARK_MODE_SCHEME,
  COLOR_SCHEME,
} from '../config/constants'

function getCustomProperty(customPromperty) {
  const ROOT = document.querySelector(':root')
  return getComputedStyle(ROOT).getPropertyValue(customPromperty)
}
function setCustomProperty(customPromperty, newValue) {
  const ROOT = document.querySelector(':root')
  const value = newValue.startsWith('--')
    ? getCustomProperty(newValue)
    : newValue
  ROOT.style.setProperty(customPromperty, value)
}
export function changeDisplayMode(mode) {
  const { DARK, AUTO, LIGHT } = MODES
  const setColorScheme = scheme => {
    COLOR_SCHEME.forEach((customPromperty, index) => {
      setCustomProperty(
        customPromperty,
        scheme === DARK ? DARK_MODE_SCHEME[index] : LIGHT_MODE_SCHEME[index]
      )
    })
  }
  if (mode === AUTO) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setColorScheme(DARK)
    } else {
      setColorScheme(LIGHT)
    }
  }
  if (mode === DARK) {
    setColorScheme(DARK)
  }
  if (mode === LIGHT) {
    setColorScheme(LIGHT)
  }
}
export function changeFontSizeBody (value) {
  document.body.style.fontSize = `${value/100}rem`
}
