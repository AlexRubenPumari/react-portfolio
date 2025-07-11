import { useContext } from 'react'
import { ProjectsContext } from '../contexts/projects'

export function useProjectsContext () {
  return useContext(ProjectsContext)
}