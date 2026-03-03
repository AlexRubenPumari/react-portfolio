import { decode } from "../decode-content.js"

const H1_TITLE_REGEX: RegExp = /^\s*#\s+(.+)/m
const LEADING_NON_ALPHANUMERIC_REGEX: RegExp = /^[^\p{L}\p{N}]+/u

export function extractTitle(markdownContent: string): string {
  const match = markdownContent.match(H1_TITLE_REGEX)
  if (!match) throw new Error("No H1 title found")

  const firstTitleMatch = match[1]!
  const title = firstTitleMatch.replace(LEADING_NON_ALPHANUMERIC_REGEX, "").trim()

  return decode.utf8(title)
}