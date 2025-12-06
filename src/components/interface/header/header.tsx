import { useState } from "react"
import { usePageContext } from "../../../contexts/page.js"
import { cvIcon, githubIcon, linkedinIcon, portfolioIcon } from "../../../assets/img/index.js"
import { Button, Flaps, MenuButton } from "../index.js"
import { pageNames } from "../../../config/constants.js"
import { getPage, getPageName } from "../../../logic/index.js"
import cv from "../../../assets/pdf/cv.pdf"
import "./header.scss"

const themes = ["Light", "Dark"] as const
type Theme = typeof themes[number]

export function Header () {
  const { page, setPage } = usePageContext()
  const [theme, setTheme] = useState<Theme>("Light")

  const buttons = [
    {
      label: "Ver CV",
      imgPath: cvIcon,
      onClick: () => window.open(cv, "_blank"),
    },
    {
      label: "Ver Proyectos",
      imgPath: portfolioIcon,
      onClick: () => setPage(3),
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

  return (
    <header className="header">
      <nav className="header__nav">
        <Flaps
          flaps={pageNames}
          selectedFlap={getPageName(page)}
          onChange={pageName => setPage(getPage(pageName))}
        />
        <MenuButton
          label="Theme"
          items={themes}
          direction="bottom-right"
          selectedItem={theme}
          onChange={theme => setTheme(theme)}
        />
      </nav>
      <div className="header__panel">
        <div className="header__actions">
        {buttons.map(({ label, imgPath, onClick }) => (
          <Button
            direction="column"
            onClick={onClick}
            key={label}
          >
            <img className="icon icon--md" src={imgPath} alt="icon" />
            <span>{label}</span>
          </Button>
        ))}
        </div>
      </div>
    </header>
  )
}