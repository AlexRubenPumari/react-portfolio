import { PAGES_NAMES, PAGES_VALUES, PAGES } from '../../../config/constants'
import Flaps from '../Flaps/Flaps'
import DarkModeButton from '../DarkModeButton/DarkModeButton'
import iconGithub from '../../../assets/img/icon_github.png'
import iconCV from '../../../assets/img/icon_cv.png'
import iconLinkedin from '../../../assets/img/icon_linkedin.png'
import iconPortfolio from '../../../assets/img/icon_portfolio.png'
import IButton from '../IButton/IButton'
import cv from '../../../assets/pdf/alex_pumari_cv.pdf'
import './Header.scss'

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
        <IButton
          img={iconCV}
          value='Ver CV'
          mod='header'
          onClick={() => window.open(cv, '_blank')}
        />
        <IButton
          img={iconPortfolio}
          value='Ver Proyectos'
          mod='header'
          onClick={() => changePage(PAGES.PROJECTS)}
        />
        <IButton
          img={iconGithub}
          value='Mi GitHub'
          mod='header'
          onClick={() =>
            window.open('https://github.com/AlexRubenPumari', '_blank')
          }
        />
        <IButton
          img={iconLinkedin}
          value='Mi LinkedIn'
          mod='header'
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/alex-pumari-diaz/',
              '_blank'
            )
          }
        />
      </div>
    </header>
  )
}
