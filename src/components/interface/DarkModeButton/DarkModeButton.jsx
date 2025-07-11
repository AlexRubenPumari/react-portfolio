import { MODES as M } from '../../../config/constants'
import { IconSun, IconDarkMode, IconMoon } from '../../../assets/svg/icons/Icons'
import useColorScheme from '../../../hooks/useColorScheme'
import DropMenu from '../DropMenu/DropMenu'

export default function DarkModeButton() {
  const { mode, setDarkMode, setLigthMode, setAutoMode } = useColorScheme()
  return (
    <DropMenu
      items={['Dark', 'Light', 'Auto']}
      values={[M.DARK, M.LIGHT, M.AUTO]}
      currentValue={mode}
      Icon={getIcon({ currentMode: mode })}
      direction='bottom right'
      callbacks={[setDarkMode, setLigthMode, setAutoMode]}
    />
  )
}
function getIcon({ currentMode }) {
  if (currentMode === M.LIGHT) return IconSun
  if (currentMode === M.DARK) return IconMoon
  if (currentMode === M.AUTO) return IconDarkMode
}