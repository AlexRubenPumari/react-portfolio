import { MODES } from '../../config/constants'
import useColorScheme from '../../hooks/useColorScheme'
import IconDarkMode from '../../assets/svg/icons/IconDarkMode'
import IconMoon from '../../assets/svg/icons/IconMoon'
import IconSun from '../../assets/svg/icons/IconSun'
import DropMenu from './DropMenu'

export default function DarkModeButton() {
  const { mode, setMode, DARK, LIGHT, AUTO } = useColorScheme()
  return (
    <DropMenu
      items={['Dark', 'Light', 'Auto']}
      values={[DARK, LIGHT, AUTO]}
      currentValue={mode}
      icon={<IconManager currentMode={mode} />}
      direction='bottom right'
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
