import { URL_GITHUB_REPOSITORIES } from '../config/constants'

export function getProjects() {
  return fetch(URL_GITHUB_REPOSITORIES)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      return res.json()
    })
    // Filtrar el repositorio que corresponde al Portafolio mismo
    .then(repos => repos.filter(r => r.id !== 976695014))
}
