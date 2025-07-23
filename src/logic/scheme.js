import { SCHEMES } from '../config/constants'

export function getDefaultScheme () {
  if (!window.matchMedia) return SCHEMES.LIGHT

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return SCHEMES.DARK
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return SCHEMES.LIGHT
  }
}

export function setSchemeTo (scheme) {
  const defaultScheme = scheme === SCHEMES.AUTO
    ? getDefaultScheme()
    : scheme
 
  if (defaultScheme === SCHEMES.LIGHT) setLigthScheme()
  if (defaultScheme === SCHEMES.DARK) setDarkScheme()
}
function setDarkScheme () {
  console.log('Setting scheme to dark...')
  document.querySelector(':root').setAttribute('data-scheme', 'dark')
}
function setLigthScheme () {
  console.log('Setting scheme to light...')
  document.querySelector(':root').setAttribute('data-scheme', 'light')
}