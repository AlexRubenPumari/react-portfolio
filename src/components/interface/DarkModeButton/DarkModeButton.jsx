import { MODES as M } from '../../../config/constants'
import { IconSun, IconDarkMode, IconMoon } from '../../../assets/svg/icons/Icons'
import useColorScheme from '../../../hooks/useColorScheme'
import DropMenu from '../DropMenu/DropMenu'

export default function DarkModeButton() {
  const { mode, setDarkMode, setLigthMode, setAutoMode } = useColorScheme()
  return (
    <DropMenu
      currentValue={mode}
      Icon={getIconByMode(mode)}
      items={['Dark', 'Light', 'Auto']}
      values={[M.DARK, M.LIGHT, M.AUTO]}
      callbacks={[setDarkMode, setLigthMode, setAutoMode]}
      direction='bottom right'
    />
  )
}
function getIconByMode(mode) {
  if (mode === M.LIGHT) return IconSun
  if (mode === M.DARK) return IconMoon
  if (mode === M.AUTO) return IconDarkMode
}