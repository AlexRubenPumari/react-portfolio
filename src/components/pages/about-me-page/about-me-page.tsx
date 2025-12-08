import { Blob, Subtitle } from "../index.js"
import "./about-me-page.scss"

export function AboutMePage() {
  return (
    <div className="about-me-page">
      <div className="about-me-page__content">
        <Subtitle>Sobre mí</Subtitle>
        <p className="about-me-page__text">
          Soy Desarrollador Frontend y Técnico en Análisis, Desarrollo y Programación de Aplicaciones. Me especializo en construir interfaces modernas, eficientes y centradas en la experiencia del usuario, utilizando tecnologías actuales y buenas prácticas del ecosistema frontend.
        </p>
        <p className="about-me-page__text">
          Me interesa seguir creciendo profesionalmente, trabajar en equipo y explorar nuevas herramientas y metodologías que me permitan aportar soluciones de calidad. Estoy buscando mi primera experiencia laboral para demostrar mis habilidades, aprender de profesionales del sector y contribuir de manera activa a nuevos proyectos.
        </p>
      </div>
      <Blob shape="a" className="about-me-page__blob about-me-page__blob--1" />
      <Blob shape="b" className="about-me-page__blob about-me-page__blob--2" />
    </div>
  )
}