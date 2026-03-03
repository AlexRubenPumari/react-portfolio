import type { Badge } from "../../types/badge.js"

const BADGE_REGEX = /!\[(.*?)\]\((https:\/\/img\.shields\.io\/[^\)]+)\)/g

export function extractBadges(markdown: string): Badge[] {
  const badges: Badge[] = []

  let match: RegExpExecArray | null = BADGE_REGEX.exec(markdown)
  let hasMatches: boolean = match !== null

  while (hasMatches) {
    const [_, name, url] = match as RegExpExecArray
    const normalizedName = name!.trim()

    badges.push({ name: normalizedName, url: url! })

    match = BADGE_REGEX.exec(markdown)
    hasMatches = match !== null
  }

  return badges
}