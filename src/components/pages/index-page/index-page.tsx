import { DownloadIcon } from "../../icons/index.js"
import { Blob, Button } from "../index.js"
import { profile, cv } from "../../../assets/index.js"
import "./index-page.scss"

export function IndexPage () {
  return (
    <div className="index-page">
      <Blob className="index-page__blob--2" />
      <Blob className="index-page__blob--1" />

      <div className="index-page__content">
        <img src={profile} className="index-page__profile" alt="Profile" draggable="false" />
        <div className="index-page__column">
          <h3 className="index-page__subtitle">Alex Pumari Diaz</h3>
          <h2 className="index-page__title">
            Desarrollador
            <br />
            Frontend
          </h2>
          <Button onClick={() => window.open(cv, "_blank")}>
            <DownloadIcon size="lg"/>
            <span>Descargar CV</span>
          </Button>
        </div>
      </div>
    </div>
  )
}