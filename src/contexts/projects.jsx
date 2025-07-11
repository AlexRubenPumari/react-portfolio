import { createContext } from 'react'
import { useProjects } from '../hooks/useProjects'

export const ProjectsContext = createContext()

export default function ProjectsProvider ({ children }) {
  const contextValues = useProjects()
  return (
    <ProjectsContext.Provider
      value={contextValues}
    >
      {children}
    </ProjectsContext.Provider>
  )
}