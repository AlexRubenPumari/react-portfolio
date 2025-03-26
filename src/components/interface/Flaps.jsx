import { PAGES } from '../../config/constants'

export default function Flaps({ page, changePage }) {
  return (
    <ul className='Header__flaps'>
      <li
        onClick={() => changePage(PAGES.INDEX)}
        className={`Header__flap ${
          page === PAGES.INDEX ? 'selected' : ''
        }`}>
        Inicio
      </li>
      <li
        onClick={() => changePage(PAGES.PROJECTS)}
        className={`Header__flap ${
          page === PAGES.PROJECTS ? 'selected' : ''
        }`}>
        Proyectos
      </li>
      <li
        onClick={() => changePage(PAGES.ABOUT_ME)}
        className={`Header__flap ${
          page === PAGES.ABOUT_ME ? 'selected' : ''
        }`}>
        Sobre mí
      </li>
      <li
        onClick={() => changePage(PAGES.CONTACTS)}
        className={`Header__flap ${
          page === PAGES.CONTACTS ? 'selected' : ''
        }`}>
        Contactos
      </li>
    </ul>
  )
}
