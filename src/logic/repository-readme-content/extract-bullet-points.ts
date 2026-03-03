import { decode } from "../decode-content.js"

export function extractBulletPoints(section: string): string[] {
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