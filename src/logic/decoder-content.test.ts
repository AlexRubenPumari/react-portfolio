import { describe, test, expect } from "vitest"
import { decode } from "./decode-content.js"

describe("decoder-base64", () => {
  test("should decode a valid base64 string", () => {
    const base64Content: string = "SGVsbG8=" // "Hello"

    const result = decode.base64(base64Content)

    expect(result).toBe("Hello")
  })

  test("should decode an empty string", () => {
    const result = decode.base64("")

    expect(result).toBe("")
  })

  test("should throw when base64 string is invalid", () => {
    const invalidBase64Content = "not-base64!!"

    expect(() => decode.base64(invalidBase64Content)).toThrow()
  })
})

describe("decoder-utf8", () => {
  test("should decode a valid UTF-8 escaped string", () => {
    const utfContent = "Hello%20World"

    const result = decode.utf8(utfContent)

    expect(result).toBe("Hello World")
  })

  test("should return original value when decoding fails", () => {
    const invalidContentURISequence = "%E0%A4%A"

    const result = decode.utf8(invalidContentURISequence)

    expect(result).toBe(invalidContentURISequence)
  })

  test("should return empty string when input is empty", () => {
    const result = decode.utf8("")

    expect(result).toBe("")
  })
})
