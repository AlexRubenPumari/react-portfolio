import { usePagesContext } from '../../../contexts/pages'
import PageFlaps from '../PageFlaps/PageFlaps'
import DarkModeButton from '../DarkModeButton/DarkModeButton'
import iconGithub from '../../../assets/img/icon_github.png'
import iconLinkedin from '../../../assets/img/icon_linkedin.png'
import iconCV from '../../../assets/img/icon_cv.png'
import iconPortfolio from '../../../assets/img/icon_portfolio.png'
import cvPath from '../../../assets/pdf/alex_pumari_cv.pdf'
import IButton from '../IButton/IButton'
import './Header.scss'

const buttons = [
  {
    label: 'Ver CV',
    img: iconCV,
    onClick: () => window.open(cvPath, '_blank'),
  },
  {
    label: 'Ver Proyectos',
    img: iconPortfolio,
    useContextAction: true,
  },
  {
    label: 'Mi GitHub',
    img: iconGithub,
    onClick: () => window.open('https://github.com/AlexRubenPumari', '_blank'),
  },
  {
    label: 'Mi LinkedIn',
    img: iconLinkedin,
    onClick: () => window.open('https://www.linkedin.com/in/alex-pumari-diaz/', '_blank'),
  },
]

export default function Header () {
  const { goToFirstProjectPage } = usePagesContext()

  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <PageFlaps />
        <DarkModeButton />
      </nav>
      <div className='Header__buttons'>
        {buttons.map(({ label, img, onClick, useContextAction }) => (
          <IButton
            key={label}
            img={img}
            mod='header'
            onClick={useContextAction ? goToFirstProjectPage : onClick}
          >
            {label}
          </IButton>
        ))}
      </div>
    </header>
  )
}