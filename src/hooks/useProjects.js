import { useState, useEffect } from 'react'
import { getProjects } from '../services/projects'
import { mapProjectsToUI } from '../adapters/projects'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const mappedProjects = mapProjectsToUI(projects) 
  useEffect(() => {
    getProjects()
      // .then(projects => setProjects(projects))
      .then(r => console.log(r.map(r => r.name)))
      .catch(error => {
        console.log(error)
        setProjects([])
      })
  }, [])
  return { projects: mappedProjects }
}