import Flaps from './Flaps'
import DarkModeButton from './DarkModeButton'
import { PAGES } from '../../config/constants'

export default function Header({ currentPage, changePage }) {
  const { INDEX, PROJECTS, ABOUT_ME, CONTACTS } = PAGES
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <Flaps
          flaps={['Inicio', 'Proyectos', 'Sobre mí', 'Contactos']}
          values={[INDEX, PROJECTS, ABOUT_ME, CONTACTS]}
          currentFlap={currentPage}
          changeFlap={changePage}
        />
        <DarkModeButton />
      </nav>
    </header>
  )
}
