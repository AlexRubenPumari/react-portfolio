import { useEffect, useState } from 'react'
import { MODES } from '../../config/constants'
import IconDarkMode from '../../assets/svg/icons/IconDarkMode'
import IconMoon from '../../assets/svg/icons/IconMoon'
import IconSun from '../../assets/svg/icons/IconSun'
import DropMenu from './DropMenu'

export default function DarkModeButton() {
  const { DARK, LIGHT, AUTO } = MODES
  const [mode, setMode] = useState(AUTO)
  useEffect(() => {
    if (mode === DARK) {
      // setDarkMode()
      alert('Dark')
    }
    if (mode === LIGHT) {
      // setLightMode()
      alert('Light')
    }
    if (mode === AUTO) {
      // setDarkMode()
      alert('Auto')
    }
  }, [mode])
  return (
    <DropMenu
      items={['Dark', 'Light', 'Auto']}
      values={[DARK, LIGHT, AUTO]}
      currentValue={mode}
      icon={<IconManager currentMode={mode} />}
      callback={setMode}
    />
  )
}
function IconManager({ currentMode, classIcon = '' }) {
  if (currentMode === MODES.LIGHT) {
    return <IconSun className={classIcon} />
  }
  if (currentMode === MODES.DARK) {
    return <IconMoon className={classIcon} />
  }
  if (currentMode === MODES.AUTO) {
    return <IconDarkMode className={classIcon} />
  }
}
