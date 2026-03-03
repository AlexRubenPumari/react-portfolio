export function extractFirstSection(markdownContent: string): string {
  const SECTION_SEPARATOR: string = "---"
  const firstSection: string = markdownContent.split(SECTION_SEPARATOR)[0]!

  return firstSection
}