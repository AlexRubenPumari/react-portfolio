import { SCHEMES as S } from '../../../config/constants'
import { IconSun, IconDarkMode, IconMoon } from '../Icons/Icons'
import useTheme from '../../../hooks/useTheme'
import DropMenu from '../DropMenu/DropMenu'

const icons = {
  [S.LIGHT]: IconSun,
  [S.DARK]: IconMoon,
  [S.AUTO]: IconDarkMode,
}

export default function DarkModeButton() {
  const { scheme, setDarkScheme, setLigthScheme, setAutoScheme } = useTheme()

  return (
    <DropMenu
      currentValue={scheme}
      Icon={icons[scheme]}
      items={['Dark', 'Light', 'Auto']}
      values={[S.DARK, S.LIGHT, S.AUTO]}
      callbacks={[setDarkScheme, setLigthScheme, setAutoScheme]}
      direction="bottom right"
    />
  )
}