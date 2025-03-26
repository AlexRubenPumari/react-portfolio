import {
  MODES,
  LIGHT_MODE_SCHEME,
  DARK_MODE_SCHEME,
  COLOR_SCHEME,
} from '../config/constants'

export function getDropMenuStyles(direction) {
  let styles
  const stylesCenter = {
    left: '50%',
    transform: 'translateX(-50%)',
  }
  if (direction.startsWith('top')) {
    styles = { bottom: '125%' }
    if (direction === 'top') {
      styles = { ...styles, ...stylesCenter }
    }
  }
  if (direction.startsWith('bottom')) {
    styles = { top: '125%' }
    if (direction === 'bottom') {
      styles = { ...styles, ...stylesCenter }
    }
    if (direction === 'bottom right') {
      styles = { ...styles, right: '0' }
    }
    if (direction === 'bottom left') {
      styles = { ...styles, left: '0' }
    }
  }

  return styles
}
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
