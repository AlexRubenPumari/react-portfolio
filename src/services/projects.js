import { URL_GITHUB_REPOSITORIES } from '../config/constants'

const PORTFOLIO_REPOSITORY_ID = 976695014
const PERSONAL_REPOSITORY_ID = 1019148150

export function getProjects() {
  return fetch(URL_GITHUB_REPOSITORIES)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      return res.json()
    })
    .then(repositories => repositories.filter(
      ({ id }) => id !== PORTFOLIO_REPOSITORY_ID && id !== PERSONAL_REPOSITORY_ID
    ))
}
