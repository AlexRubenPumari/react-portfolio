// import { usePagesContext } from "../../../contexts/pages.jsx"
import DarkModeButton from "../menu-button/menu-button.js"
import githubIcon from "../../../assets/img/icon-github.png"
import linkedinIcon from "../../../assets/img/icon_linkedin.png"
import cvIcon from "../../../assets/img/icon_cv.png"
import portfolioIcon from "../../../assets/img/icon_portfolio.png"
import cv from "../../../assets/pdf/alex_pumari_cv.pdf"
import { Flaps } from "../flaps/flaps.js"
import { Button } from "../button/button.js"
import "./header.scss"

const buttons = [
  {
    label: "Ver CV",
    img: cvIcon,
    onClick: () => window.open(cv, "_blank"),
  },
  {
    label: "Ver Proyectos",
    img: portfolioIcon,
    useContextAction: true,
  },
  {
    label: "Mi GitHub",
    img: githubIcon,
    onClick: () => window.open("https://github.com/AlexRubenPumari", "_blank"),
  },
  {
    label: "Mi LinkedIn",
    img: linkedinIcon,
    onClick: () => window.open("https://www.linkedin.com/in/alex-pumari-diaz/", "_blank"),
  },
]

const flaps = [
  { value: "Inicio" },
  { value: "Proyectos" },
  { value: "Sobre mi" },
  { value: "Contacto" },
]

export function Header () {
  // const { goToFirstProjectPage } = usePagesContext()

  return (
    <header className="header">
      <nav className="header__nav">
        <Flaps flaps={flaps} selectedFlap="Inicio" />
        {/* <DarkModeButton /> */}
      </nav>
      <div className="header__panel">
        <div className="header__actions">
        {buttons.map(({ label, img, onClick, useContextAction }) => (
          <Button
            key={label}
            icon={<img src={img} />}
          >
            {label}
          </Button>
        ))}
        </div>
      </div>
    </header>
  )
}