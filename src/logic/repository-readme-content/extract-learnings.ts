import { decode } from "../decode-content.js"

const LEARNINGS_SECTION_KEYWORD = "Cosas que aprend"

export function extractLearnings(markdownContent: string): string[] {
  if (!markdownContent) return []

  const section = getLearningsSection(markdownContent)
  if (!section) return []

  return extractBulletPoints(section)
}

function getLearningsSection(markdownContent: string): string | null {
  const parts = markdownContent.split(LEARNINGS_SECTION_KEYWORD)
  const hasParts = parts.length > 1
  const learningsSectionPart = parts[1]!

  return hasParts ? learningsSectionPart : null
}

function extractBulletPoints(section: string): string[] {
  return section
    .split("\n")
    .map(line => line.trim())
    .filter(isBulletPoint)
    .map(cleanBulletPoint)
    .map(decode.utf8)
}

function isBulletPoint(line: string): boolean {
  return line.startsWith("-")
}

function cleanBulletPoint(line: string): string {
  return line.replace(/^-+\s*/, "").trim()
}