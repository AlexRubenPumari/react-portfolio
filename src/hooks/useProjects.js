import { useState, useEffect } from 'react'
import { getTitleFrom } from '../logic/data'
import { getProjects } from '../services/projects'

export function useProjects () {
  const [projects, setProjects] = useState([])
  const mappedProjects = projects.map(({id, description, topics, name, html_url, homepage}) => ({
    id: id,
    title: getTitleFrom(topics.find(topic => topic[0] === '1')),
    description: description,
    imgUrl: `https://raw.githubusercontent.com/AlexRubenPumari/${name}/master/cover.jpg`,
    tags: topics.filter(topic => topic[0] !== '1'),
    repoUrl: html_url,
    pageUrl: homepage,
  }))
  useEffect(() => {
    getProjects()
      .then(projects => setProjects(projects))
      .catch(error => console.log(error))
  }, [])
  
  return { projects: mappedProjects }
}