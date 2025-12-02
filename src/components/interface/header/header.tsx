// import { usePagesContext } from "../../../contexts/pages.jsx"
import { cvIcon, githubIcon, linkedinIcon, portfolioIcon } from "../../../assets/img/index.js"
import { Button, Flaps, MenuButton } from "../index.js"
import cv from "../../../assets/pdf/cv.pdf"
import "./header.scss"

const buttons = [
  {
    label: "Ver CV",
    imgPath: cvIcon,
    onClick: () => window.open(cv, "_blank"),
  },
  {
    label: "Ver Proyectos",
    imgPath: portfolioIcon,
    useContextAction: true,
  },
  {
    label: "Mi GitHub",
    imgPath: githubIcon,
    onClick: () => window.open("https://github.com/AlexRubenPumari", "_blank"),
  },
  {
    label: "Mi LinkedIn",
    imgPath: linkedinIcon,
    onClick: () => window.open("https://www.linkedin.com/in/alex-pumari-diaz/", "_blank"),
  },
]

const flaps = [
  { value: "Inicio" },
  { value: "Proyectos" },
  { value: "Sobre mi" },
  { value: "Contacto" },
]

const items = [
  { value: "Light" },
  { value: "Dark" },
]

export function Header () {
  // const { goToFirstProjectPage } = usePagesContext()

  return (
    <header className="header">
      <nav className="header__nav">
        <Flaps flaps={flaps} selectedFlap="Inicio" />
        <MenuButton label="Theme" items={items} direction="bottom-right" />
      </nav>
      <div className="header__panel">
        <div className="header__actions">
        {buttons.map(({ label, imgPath, onClick, useContextAction }) => (
          <Button
            direction="column"
            key={label}
          >
            <img height={28} src={imgPath} alt="icon" />
            <span>{label}</span>
          </Button>
        ))}
        </div>
      </div>
    </header>
  )
}