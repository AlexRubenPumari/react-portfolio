import { useRef } from "react"
import type { Page, ZoomValue } from "../../../types/index.js"
import { AboutMePage, IndexPage, ContactPage } from "../../pages/index.js"
import { useZoomable } from "../../../hooks/index.js"
import { useZoomContext } from "../../../contexts/index.js"
import { calculateZoom } from "../../../logic/calculate-zoom.js"
import "./viewport.scss"

interface ViewportProps {
  page: Page
}

export function Viewport({ page }: ViewportProps) {
  const { setZoom } = useZoomContext()
  const viewportRef = useRef<HTMLDivElement>(null)

  useZoomable({
    ref: viewportRef,
    onZoomIn: () => {
      setZoom((prevZoom: ZoomValue) => calculateZoom(prevZoom, "in"))
    },
    onZoomOut: () => {
      setZoom((prevZoom: ZoomValue) => calculateZoom(prevZoom, "out"))
    },
    isTouchDevice: false
  })

  return (
    <div className="viewport" id="viewport" ref={viewportRef}>
      {page === 1 && <IndexPage />}
      {page === 2 && <AboutMePage />}
      {page === 4 && <ContactPage />}
    </div>
  )
}