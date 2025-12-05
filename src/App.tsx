// import { useToggle } from "./hooks/useToggle.js"

// import PagesProvider from "./contexts/pages.jsx"
// import RepositoriesProvider from "./contexts/repositories.jsx"
// import ElementProvider from "./contexts/element.jsx"

import { Header, Footer } from "./components/interface/index.js"
// import Viewport from "./components/interface/Viewport/Viewport.jsx"
import "./styles/index.scss"

export default function App() {
  return (
    <>
      <Header />
      <div className="viewport">

      </div>
      <Footer />
    </>
  )
}