import { useState } from "react"
import { Header, Footer, Viewport } from "./components/interface/index.js"
import { PageContext, ZoomContext } from "./contexts/index.js"
import type { Page, ZoomValue } from "./types/index.js"
import "./styles/index.scss"

export default function App() {
  const [page, setPage] = useState<Page>(1)
  const [zoom, setZoom] = useState<ZoomValue>(100)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ZoomContext.Provider value={{ zoom, setZoom }}>
        <Header />
        <Viewport page={page} />
        <Footer />
      </ZoomContext.Provider>
    </PageContext.Provider>
  )
}