import { getRepositories, getRepositoryReadmeContent } from "../services/index.js"
import { parseRepositoryReadmeContent } from "./repository-readme-content/parse-repository-readme-content.js"
import type { RepositoryDetails } from "../types/repository-details.js"

export async function getRepositoriesDetails(): Promise<RepositoryDetails[]> {
  const repositories = await getRepositories()

  return Promise.all(
    repositories.map(async repository => {
      const readmeContent = await getRepositoryReadmeContent(repository.fullName)
      const parsedReadme = parseRepositoryReadmeContent(readmeContent)

      return { ...repository, ...parsedReadme } satisfies RepositoryDetails
    })
  )
}