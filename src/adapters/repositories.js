export function cleanAndFormatRepositories (repositories) {
  const PORTFOLIO_REPOSITORY_ID = 976695014
  const PERSONAL_REPOSITORY_ID = 1019148150
  const isNotPortfolioOrPersonalRepo = ({ id }) =>
    id !== PORTFOLIO_REPOSITORY_ID && id !== PERSONAL_REPOSITORY_ID

  const formatRepository = ({ id, full_name, html_url, homepage, description }) => ({
    id,
    fullName: full_name,
    githubUrl: html_url,
    pageUrl: homepage,
    description,
  })

  return repositories
    .filter(isNotPortfolioOrPersonalRepo)
    .map(formatRepository)
}