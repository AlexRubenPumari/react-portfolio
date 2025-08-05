import { cleanAndFormatRepositories } from '../adapters/repositories'

const URL_GITHUB_REPOSITORIES = 'https://api.github.com/users/alexrubenpumari/repos'

export function getRepositories() {
  return fetch(URL_GITHUB_REPOSITORIES)
    .then(response => {
      if (!response.ok) throw new Error(response.status)
      return response.json()
    })
    .then(repositories => {
      const formattedRepositories = cleanAndFormatRepositories(repositories)

      return Promise.all(formattedRepositories.map(enrichRepository))
    })
}
async function enrichRepository(repository) {
  const encodedReadmeContent = await getReadmeEncodedContent(repository.fullName);
  const decodedReadme = decodeBase64(encodedReadmeContent);
  const introData = parseMarkdownIntro(decodedReadme);

  return { ...repository, ...introData };
}
async function getReadmeEncodedContent(repositoryFullName) {
  const response = await fetch(`https://api.github.com/repos/${repositoryFullName}/readme`)
  if (!response.ok) {
    throw new Error(`Failed to fetch README: ${response.status}`)
  }

  const { content } = await response.json()
  if (!content) {
    throw new Error('README content not found in the response.')
  }

  return content
}
function decodeBase64(encodedContent) {
  return atob(encodedContent)
}
function parseMarkdownIntro(decodedMarkdown) {
  const getFirstMarkdownSection = decodedMarkdown => decodedMarkdown.split('---')[0]
  const getMarkdownTitle = decodedMarkdown => {
    const titleMatch = decodedMarkdown.match(/#\s+(.+)/)
    if (!titleMatch) return null

    return titleMatch[1].replace(/^[^\p{L}\p{N}]+/u, '').trim()
  }
  const getMarkdownBadges = decodedMarkdown => {
    const badges = []
    const badgeRegex = /!\[(.*?)\]\((https:\/\/img\.shields\.io\/[^\)]+)\)/g
    let badgeMatch

    while ((badgeMatch = badgeRegex.exec(decodedMarkdown)) !== null) {
      badges.push({
        technology: badgeMatch[1].trim(),
        url: badgeMatch[2],
      })
    }

    return badges
  }
  const getMarkdownImgPath = decodedMarkdown => {
    const imgMatch = decodedMarkdown.match(/!\[.*?\]\((readme\/[^\)]+)\)/);
    return imgMatch ? imgMatch[1] : null;
  }
  const getMarkdownVideoUrl = decodedMarkdown => {
    const videoMatch = decodedMarkdown.match(/href="(https:\/\/youtu\.be\/[^\"]+)"/)
    return videoMatch ? videoMatch[1] : null
  }
  const getMarkdownLearnings = decodedMarkdown => {
    const learnings = []
    const learningsSection = decodedMarkdown.split('Cosas que aprend')[1]

    if (learningsSection) {
      const lines = learningsSection.split('\n');
      for (const line of lines) {
        if (line.trim().startsWith('-')) {
          learnings.push(line.replace(/^[^\w]*\s*/, '').trim());
        }
      }
    }

    return learnings
  }
  const decodeUTF8 = str => {
    try {
      return decodeURIComponent(escape(str));
    } catch {
      return str;
    }
  }

  const section = getFirstMarkdownSection(decodedMarkdown)
  const title = getMarkdownTitle(section)
  const badges = getMarkdownBadges(section)
  const imagePath = getMarkdownImgPath(section)
  const videoUrl = getMarkdownVideoUrl(section)
  const learnings = getMarkdownLearnings(section)

  return {
    title: decodeUTF8(title),
    badges,
    imagePath,
    videoUrl,
    learnings: learnings.map(decodeUTF8)
  }
}