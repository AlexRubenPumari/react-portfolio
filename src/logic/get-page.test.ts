import { describe, test, expect } from "vitest"
import { getPage } from "./get-page.js"

describe("get-page", () => {
  test("should return 1 for 'Inicio'", () => {
    expect(getPage("Inicio")).toBe(1)
  })

  test("should return 2 for 'Proyectos'", () => {
    expect(getPage("Proyectos")).toBe(2)
  })

  test("should return 3 for 'Sobre mi'", () => {
    expect(getPage("Sobre mi")).toBe(3)
  })

  test("should return 4 for 'Contacto'", () => {
    expect(getPage("Contacto")).toBe(4)
  })
})
