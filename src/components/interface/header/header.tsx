// import { usePagesContext } from "../../../contexts/pages.jsx"
import { cvIcon, githubIcon, linkedinIcon, portfolioIcon } from "../../../assets/img/index.js"
import { Button, Flaps, MenuButton } from "../index.js"
import cv from "../../../assets/pdf/cv.pdf"
import "./header.scss"
import { useState } from "react"

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

const pageNames = ["Inicio", "Proyectos", "Sobre mi", "Contacto"] as const
type PageName = typeof pageNames[number]
function getPageName(page: number): PageName {
  return pageNames[page - 1]!
}
function getPage(pageName: PageName): number {
  const page = pageNames.findIndex(currentPageName => currentPageName === pageName) + 1
  return page
}
const themes = ["Light", "Dark"] as const
type Theme = typeof themes[number]

export function Header () {
  // const { goToFirstProjectPage } = usePagesContext()
  const [page, setPage] = useState<number>(1)
  const [theme, setTheme] = useState<Theme>("Light")

  return (
    <header className="header">
      <nav className="header__nav">
        <Flaps
          flaps={pageNames as unknown as string[]}
          selectedFlap={getPageName(page)}
          onChange={pageName => setPage(getPage(pageName as PageName))}
        />
        <MenuButton
          label="Theme"
          items={themes as unknown as string[]}
          direction="bottom-right"
          selectedItem={theme}
          onChange={theme => setTheme(theme as Theme)}
        />
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