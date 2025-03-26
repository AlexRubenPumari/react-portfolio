import Flaps from './Flaps'
import DarkModeButton from './DarkModeButton'

export default function Header({ currentPage, changePage }) {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <Flaps page={currentPage} changePage={changePage} />
        <DarkModeButton />
      </nav>
    </header>
  )
}
