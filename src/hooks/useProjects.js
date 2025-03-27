import { useState, useEffect } from 'react'
import { getTitleFrom, getDescriptionFrom } from '../logic/getData'
import { getProjects } from '../services/projects'

export function useProjects () {
  const [projects, setProjects] = useState([])
  const mappedProjects = projects.map(({id, description, topics, name}) => ({
    id: id,
    title: getTitleFrom(description),
    description: getDescriptionFrom(description),
    imgUrl: `https://raw.githubusercontent.com/AlexRubenPumari/${name}/master/cover.jpg`,
    tags: topics,
  }))
  useEffect(() => {
    getProjects()
      .then(projects => setProjects(projects))
      .catch(alert)
  }, [])
  
  return { projects: mappedProjects }
}