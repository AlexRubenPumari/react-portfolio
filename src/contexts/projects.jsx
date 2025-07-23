import { createContext, useContext } from 'react'
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

export function useProjectsContext () {
  const context = useContext(ProjectsContext)
  if (!context) {
    throw new Error('useProjectsContext must be used within a ProjectsProvider')
  }
  return context
}