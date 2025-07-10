import PageFlaps from '../PageFlaps/PageFlaps'
import DarkModeButton from '../DarkModeButton/DarkModeButton'
import HeaderButtons from './HeaderButtons'
import './Header.scss'

export default function Header() {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <PageFlaps />
        <DarkModeButton />
      </nav>
      <HeaderButtons />
    </header>
  )
}
