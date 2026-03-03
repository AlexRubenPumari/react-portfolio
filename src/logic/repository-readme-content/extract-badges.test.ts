import { describe, test, expect } from "vitest"
import { extractBadges } from "./extract-badges.js"

describe("extract-badges", () => {
  test("should extract more than one badge from different lines", () => {
    const markdown = `
      ![React](https://img.shields.io/badge/React-19.0.0-blue)
      ![Sass](https://img.shields.io/badge/Sass-1.89.2-cc6699)
    `

    const result = extractBadges(markdown)

    expect(result).toHaveLength(2)

    expect(result[0]!.name).toBe("React")
    expect(result[1]!.name).toBe("Sass")
    expect(result[0]!.url).toBe("https://img.shields.io/badge/React-19.0.0-blue")
    expect(result[1]!.url).toBe("https://img.shields.io/badge/Sass-1.89.2-cc6699")
  })

  test("should extract multiple badges written on the same line", () => {
    const markdown =
      "![React](https://img.shields.io/badge/React-19.0.0-blue) " +
      "![Sass](https://img.shields.io/badge/Sass-1.89.2-cc6699)"

    const result = extractBadges(markdown)

    expect(result).toHaveLength(2)
    expect(result.map(badge => badge.name)).toEqual(["React", "Sass"])
  })

  test("should keep extracting even if there is text between badges", () => {
    const markdown = `
      ![React](https://img.shields.io/badge/React-19.0.0-blue)
      Some random text here
      ![Sass](https://img.shields.io/badge/Sass-1.89.2-cc6699)
    `

    const result = extractBadges(markdown)

    expect(result).toHaveLength(2)
    expect(result.map(badge => badge.name)).toEqual(["React", "Sass"])
  })
})