import { pageNames } from "../config/constants.js"
import type { Page, PageName } from "../types/index.js"

export function getPageName(page: Page): PageName {
  const pageName = pageNames[page - 1]
  if (!pageName) throw new Error("Page is out of range")

  return pageName
}