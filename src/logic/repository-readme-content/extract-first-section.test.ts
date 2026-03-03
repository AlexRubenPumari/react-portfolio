import { describe, test, expect } from "vitest"
import { extractFirstSection } from "./extract-first-section.js"

describe("extract-first-section", () => {
  test("should return the content before the first section separator", () => {
    const markdownContent = `
# 📋 Repository title
Some intro content
---

## Second Section
More content here
`
    const result = extractFirstSection(markdownContent)

    expect(result.trim()).toBe(`
# 📋 Repository title
Some intro content
`.trim())
  })
})
