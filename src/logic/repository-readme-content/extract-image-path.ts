const README_IMAGE_REGEX = /!\[.*?\]\((readme\/[^\)]+)\)/

export function extractImagePath(markdownContent: string): string | null {
  const regexMatch = markdownContent.match(README_IMAGE_REGEX)

  const imagePath = regexMatch?.[1]

  return imagePath ?? null
}