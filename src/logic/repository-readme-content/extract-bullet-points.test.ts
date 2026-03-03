import { describe, expect, test } from "vitest"
import { extractBulletPoints } from "./extract-bullet-points.js"

describe("extract-bullet-points", () => {
  test("should extract only lines starting with '-'", () => {
    const section = `
      Intro
      - First
      Random
      - Second
    `

    const result = extractBulletPoints(section)

    expect(result).toEqual(["First", "Second"])
  })

  test("should return empty array if no bullet points exist", () => {
    const section = `
      Just text
      Another line
    `

    expect(extractBulletPoints(section)).toEqual([])
  })

  test("should trim whitespace before processing", () => {
    const section = `
          -   Spaced
    `

    expect(extractBulletPoints(section)).toEqual(["Spaced"])
  })
})