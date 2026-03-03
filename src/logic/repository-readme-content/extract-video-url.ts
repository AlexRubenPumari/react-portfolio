const VIDEO_URL_REGEX = /href="(https:\/\/youtu\.be\/[^\"]+)"/

export function extractVideoUrl(markdownContent: string): string | null {
  const match = markdownContent.match(VIDEO_URL_REGEX)
  const videoUrl = match?.[1]

  return videoUrl ?? null
}