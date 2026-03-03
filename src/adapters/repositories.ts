import type { GitHubRepository, Repository } from "../types/index.js"

export function formatRepositories (repositories: GitHubRepository[]): Repository[] {
  return repositories
    .filter(isRelevantRepository)
    .map(toRepository)
}

function toRepository ({ id, full_name, html_url, homepage, description }: GitHubRepository): Repository {
  return {
    id,
    fullName: full_name,
    githubUrl: html_url,
    pageUrl: homepage,
    description,
  }
}

function isRelevantRepository ({ id }: GitHubRepository): boolean {
  const PORTFOLIO_REPOSITORY_ID = 976695014
  const PERSONAL_REPOSITORY_ID = 1019148150

  return id !== PERSONAL_REPOSITORY_ID && id !== PORTFOLIO_REPOSITORY_ID
}