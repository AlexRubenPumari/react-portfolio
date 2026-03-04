import { formatRepositories } from "../adapters/repositories.js"
import { decode } from "../logic/index.js"
import { fetchJson } from "./fetch-json.js"
import type { GitHubRepository, GithubService, Repository } from "../types/index.js"
import { GITHUB_API_BASE, GITHUB_TOKEN, REPOSITORIES_URL } from "../config/constants.js"

const fetchOptions = {
  headers: { "Authorization": `token ${GITHUB_TOKEN}` }
}

export const githubService: GithubService = {

  getRepositories(): Promise<Repository[]> {
    return fetchJson<GitHubRepository[]>(REPOSITORIES_URL, fetchOptions)
      .then(repositories => formatRepositories(repositories))
  },

  getRepositoryReadmeContent(repositoryFullName: string): Promise<string> {
    type RepositoryReadme = { content?: string }
  
    const url = `${GITHUB_API_BASE}/repos/${repositoryFullName}/readme`
  
    return fetchJson<RepositoryReadme>(url, fetchOptions)
      .then(response => {
        if (!response.content) throw new Error("README content not found.")
        const decodedReadmeContent = decode.utf8(decode.base64(response.content))

        return decodedReadmeContent
      })
  }
}