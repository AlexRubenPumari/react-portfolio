import { useContext } from 'react'
import { ModalContext } from '../../../contexts/modal'
import './ProjectCard.scss'

export default function ProjectCard({ project }) {
  const { title, imgUrl } = project
  const { openModal } = useContext(ModalContext)

  return (
    <article className='ProjectCard' onClick={() => openModal(project)}>
      <div className='ProjectCard__imgContainer'>
        <img
          className='ProjectCard__img'
          src={imgUrl}
          alt={`Representación de ${title}`}
        />
      </div>
      <h4 className='ProjectCard__title'>{title}</h4>
      <p className='ProjectCard__label'>Ver más</p>
    </article>
  )
}
