import { parseRepositoryReadmeContent } from "../logic/repository-readme-content/parse-repository-readme-content.js"
import type { GithubService, RepositoryDetails, RepositoryReadme } from "../types/index.js"

export async function getRepositoriesDetails(
  { githubService } : {  githubService: GithubService }
): Promise<RepositoryDetails[]> {
  const repositories = await githubService.getRepositories()

  const results = await Promise.all(
    repositories.map(async repository => {
      const readmeContent = await githubService.getRepositoryReadmeContent(repository.fullName)
      const repositoryReadme: RepositoryReadme = parseRepositoryReadmeContent(readmeContent)

      return { ...repository, ...repositoryReadme } satisfies RepositoryDetails
    })
  )

  const validRepositories: RepositoryDetails[] = results.filter(isValidRepository)

  return validRepositories
}

function isValidRepository ({ id, title, description }: RepositoryDetails): boolean {
  const PORTFOLIO_REPOSITORY_ID = 976695014
  const PERSONAL_REPOSITORY_ID = 1019148150
  const repositoryHasValidData = title !== null && description !== null

  return id !== PERSONAL_REPOSITORY_ID && id !== PORTFOLIO_REPOSITORY_ID && repositoryHasValidData
}
