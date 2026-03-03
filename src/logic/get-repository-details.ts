import { parseRepositoryReadmeContent } from "./repository-readme-content/parse-repository-readme-content.js"
import type { GithubService, RepositoryDetails, RepositoryReadme } from "../types/index.js"

export async function getRepositoriesDetails(
  { githubService } : {  githubService: GithubService }
): Promise<RepositoryDetails[]> {
  const repositories = await githubService.getRepositories()

  return Promise.all(
    repositories.map(async repository => {
      const readmeContent = await githubService.getRepositoryReadmeContent(repository.fullName)
      const repositoryReadme: RepositoryReadme = parseRepositoryReadmeContent(readmeContent)

      return { ...repository, ...repositoryReadme } satisfies RepositoryDetails
    })
  )
}