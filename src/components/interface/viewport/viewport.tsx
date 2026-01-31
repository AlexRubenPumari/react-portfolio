import { AboutMePage, IndexPage, ContactPage } from "../../pages/index.js"
import type { Page } from "../../../types/index.js"
import "./viewport.scss"

interface ViewportProps {
  page: Page
}

export function Viewport({ page }: ViewportProps) {
  return (
    <div className="viewport">
      {page === 1 && <IndexPage />}
      {page === 2 && <AboutMePage />}
      {page === 4 && <ContactPage />}
    </div>
  )
}