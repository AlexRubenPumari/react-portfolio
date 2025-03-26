import { useEffect, useState } from 'react'
import { useProjects } from '../../hooks/useProjects'
import Blob_3 from '../../assets/svg/blobs/Blob_3'

export default function ProjectsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { projects } = useProjects()

  return (
    <div className='BasePage ProjectsPage'>
      <h3>Proyectos</h3>
      <div className='GridContainer'>
        {projects.map(({ id, title, description, urlImg }) => {
          return (
            <article key={id} className='ProjectCard'>
              <h4 className='ProjectCard__title'>{title}</h4>
              <img
                className='ProjectCard__img'
                src={urlImg}
                alt={`Representación de ${title}`}
              />
              <p className='ProjectCard__label'>Ver más</p>
            </article>
          )
        })}
      </div>
      <Blob_3 className='ProjectsPage__blob' />
    </div>
  )
}
