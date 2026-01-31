import { useState } from "react"
import { Header, Footer, Viewport } from "./components/interface/index.js"
import { PageContext } from "./contexts/page.js"
import type { Page } from "./types/page.js"
import "./styles/index.scss"

export default function App() {
  const [page, setPage] = useState<Page>(1)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Header />
      <Viewport page={page} />
      <Footer />
    </PageContext.Provider>
  )
}