import Flaps from './Flaps'
import DarkModeButton from './DarkModeButton'
import { PAGES_NAMES, PAGES_VALUES } from '../../config/constants'

export default function Header({ currentPage, changePage }) {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <Flaps
          flaps={PAGES_NAMES}
          values={PAGES_VALUES}
          currentFlap={currentPage}
          changeFlap={changePage}
        />
        <DarkModeButton />
      </nav>
    </header>
  )
}
