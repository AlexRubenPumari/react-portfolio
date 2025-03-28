import Flaps from './Flaps'
import DarkModeButton from './DarkModeButton'
import { PAGES_NAMES, PAGES_VALUES } from '../../config/constants'
import iconGithub from '../../assets/img/icon_github.png'
import iconCV from '../../assets/img/icon_cv.png'
import iconLinkedin from '../../assets/img/icon_linkedin.png'
import iconPortfolio from '../../assets/img/icon_portfolio.png'

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
      <div className='Header__buttons'>
        <button className='IButton IButton--header'>
          <img className='IButton__img' src={iconCV} alt='Icono de CV' />
          <span>Ver CV</span>
        </button>
        <button className='IButton IButton--header'>
          <img
            className='IButton__img'
            src={iconPortfolio}
            alt='Icono de portafolio'
          />
          <span>Ver Proyectos</span>
        </button>
        <button className='IButton IButton--header'>
          <img
            className='IButton__img'
            src={iconGithub}
            alt='Icono de GitHub'
          />
          <span>Ir a GitHub</span>
        </button>
        <button className='IButton IButton--header'>
          <img
            className='IButton__img'
            src={iconLinkedin}
            alt='Icono de LinkedIn'
          />
          <span>Ir a LinkedIn</span>
        </button>
      </div>
    </header>
  )
}
