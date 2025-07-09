import { MODES } from '../../../config/constants'
import { IconSun, IconDarkMode, IconMoon } from '../../../assets/svg/icons/Icons'
import useColorScheme from '../../../hooks/useColorScheme'
import DropMenu from '../DropMenu/DropMenu'

export default function DarkModeButton() {
  const { mode, setMode, DARK, LIGHT, AUTO } = useColorScheme()
  return (
    <DropMenu
      items={['Dark', 'Light', 'Auto']}
      values={[DARK, LIGHT, AUTO]}
      currentValue={mode}
      Icon={getIcon({ currentMode: mode })}
      direction='bottom right'
      callback={setMode}
    />
  )
}
function getIcon({ currentMode }) {
  if (currentMode === MODES.LIGHT) return IconSun
  if (currentMode === MODES.DARK) return IconMoon
  if (currentMode === MODES.AUTO) return IconDarkMode
}