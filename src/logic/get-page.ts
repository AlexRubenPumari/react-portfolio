import { pageNames } from "../config/constants.js"
import type { Page, PageName } from "../types/index.js"

export function getPage(pageName: PageName): Page {
  const page = pageNames.findIndex(currentPageName => currentPageName === pageName) + 1

  if (page < 0) throw new Error("Page not found");

  return page as Page
}