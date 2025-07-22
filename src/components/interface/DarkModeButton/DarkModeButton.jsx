import { MODES as M } from '../../../config/constants'
import { IconSun, IconDarkMode, IconMoon } from '../Icons/Icons'
import useColorScheme from '../../../hooks/useColorScheme'
import DropMenu from '../DropMenu/DropMenu'

const icons = {
  [M.LIGHT]: IconSun,
  [M.DARK]: IconMoon,
  [M.AUTO]: IconDarkMode,
}

export default function DarkModeButton() {
  const { mode, setDarkMode, setLigthMode, setAutoMode } = useColorScheme()

  return (
    <DropMenu
      currentValue={mode}
      Icon={icons[mode]}
      items={['Dark', 'Light', 'Auto']}
      values={[M.DARK, M.LIGHT, M.AUTO]}
      callbacks={[setDarkMode, setLigthMode, setAutoMode]}
      direction="bottom right"
    />
  )
}
