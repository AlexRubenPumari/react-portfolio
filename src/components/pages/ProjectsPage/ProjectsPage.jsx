import { useProjects } from '../../../hooks/useProjects'
import CirclePattern from '../../../assets/patterns/CirclePattern'
import ProjectCard from '../ProjectCard/ProjectCard'
import Blob_3 from '../../../assets/svg/blobs/Blob_3'
import './ProjectsPage.scss'

export default function ProjectsPage() {
  const { projects } = useProjects()

  return (
    <>
      <div className='ProjectsPage'>
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
            <Projects elements={projects} />
          </div>
        </div>
        <Blob_3 className='ProjectsPage__blob' />
      </div>
    </>
  )
}
function Projects({ elements }) {
  if (elements?.length === 0) {
    return <p className='ProjectsPage__loadingLabel'>Cargando...</p>
  }

  return elements?.map(element => (
    <ProjectCard key={element.id} project={element} />
  ))
}