import { useState } from 'react'
import { useProjects } from '../../hooks/useProjects'
import CirclePattern from '../../assets/patterns/CirclePattern'
import Blob_3 from '../../assets/svg/blobs/Blob_3'
import ProjectCard from './ProjectCard'

export default function ProjectsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { projects } = useProjects()

  return (
    <div className='BasePage ProjectsPage'>
      <h3 className='ProjectsPage__title'>
        Proyectos
        <CirclePattern
          rows={1}
          cols={4}
          strokeWidth={3}
          width={1.3}
          gap={5}
          className='ProjectsPage__pattern'
        />
      </h3>
      <div className='GridContainer GridContainer--projects'>
        {projects.map(({ id, title, imgUrl }) => (
          <ProjectCard key={id} title={title} imgUrl={imgUrl} />
        ))}
        {projects.map(({ id, title, imgUrl }) => (
          <ProjectCard key={id} title={title} imgUrl={imgUrl} />
        ))}
      </div>
      <Blob_3 className='ProjectsPage__blob' />
    </div>
  )
}
