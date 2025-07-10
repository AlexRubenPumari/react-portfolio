import { usePagesContext } from '../../../hooks/usePagesContext'
import iconGithub from '../../../assets/img/icon_github.png'
import iconLinkedin from '../../../assets/img/icon_linkedin.png'
import iconCV from '../../../assets/img/icon_cv.png'
import iconPortfolio from '../../../assets/img/icon_portfolio.png'
import cvPath from '../../../assets/pdf/alex_pumari_cv.pdf'
import IButton from '../IButton/IButton'

export default function HeaderButtons () {
  const { goToFirstProjectPage } = usePagesContext()
  return (
    <div className='Header__buttons'>
      <IButton
        img={iconCV}
        value='Ver CV'
        mod='header'
        onClick={() => window.open(cvPath, '_blank')}
      />
      <IButton
        img={iconPortfolio}
        value='Ver Proyectos'
        mod='header'
        onClick={() => goToFirstProjectPage()}
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
  )
}