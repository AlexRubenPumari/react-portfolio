import { describe, test, expect, vi } from "vitest"
import { extractLearnings } from "./extract-learnings.js"
import { decode } from "../decode-content.js"

describe("extract-learnings", () => {
  test("should return an empty array if the section does not exist", () => {
    const markdown = `
      # Project Title
      Some random content
      - Item 1
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([])
  })

  test("should extract bullet points from the section", () => {
    const markdown = `
      📚 Cosas que aprendí
      - Learned React basics
      - Used Sass for styling
      - Improved project structure
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "Learned React basics",
      "Used Sass for styling",
      "Improved project structure"
    ])
  })

  test("should ignore lines that are not bullet points", () => {
    const markdown = `
      📚 Cosas que aprendí
      Some introduction text
      - First learning
      Another random line
      - Second learning
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "First learning",
      "Second learning"
    ])
  })

  test("should trim leading symbols and whitespace correctly", () => {
    const markdown = `
      📚 Cosas que aprendí
        -   Spaced learning
      * Another format (should be ignored)
      -Final learning
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "Spaced learning",
      "Final learning"
    ])
  })
})
