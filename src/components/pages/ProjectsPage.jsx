import { useState } from 'react'
import { useProjects } from '../../hooks/useProjects'
import CirclePattern from '../../assets/patterns/CirclePattern'
import ProjectCard from './ProjectCard'
import Blob_3 from '../../assets/svg/blobs/Blob_3'
import ProjectModal from '../interface/ProjectModal'

export default function ProjectsPage() {
  const [modal, setModal] = useState(false)
  const closeModal = () => setModal(false)
  const { projects } = useProjects()

  return (
    <>
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
        <div className='Container Container--projects'>
          <div className='GridContainer GridContainer--projects Scrollbar Scrollbar--projects'>
            <Projects elements={projects} callback={setModal} />
          </div>
        </div>
        <Blob_3 className='ProjectsPage__blob' />
      </div>
      {modal && (
        <ProjectModal
          project={projects.find(({ id }) => id === modal)}
          toClose={closeModal}
        />
      )}
    </>
  )
}
function Projects({ elements, callback }) {
  if (elements?.length === 0) {
    return <p className='ProjectsPage__loadingLabel'>Cargando...</p>
  }

  return elements.map(({ id, title, imgUrl }) => (
    <ProjectCard
      key={id}
      id={id}
      title={title}
      imgUrl={imgUrl}
      callback={callback}
    />
  ))
}