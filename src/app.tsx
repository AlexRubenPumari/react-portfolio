import { useState } from "react"
import { Header, Footer } from "./components/interface/index.js"
import { PageContext } from "./contexts/page.js"
import { AboutMePage, IndexPage, ContactPage } from "./components/pages/index.js"
import type { Page } from "./types/page.js"
import "./styles/index.scss"


export default function App() {
  const [page, setPage] = useState<Page>(1)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Header />
      <div className="viewport">
        {page === 1 && <IndexPage />}
        {page === 2 && <AboutMePage />}
        {page === 4 && <ContactPage />}
      </div>
      <Footer />
    </PageContext.Provider>
  )
}