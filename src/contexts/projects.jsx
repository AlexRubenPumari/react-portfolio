import { createContext } from 'react'
import { usePageNavigation } from '../hooks/usePage'

export const PagesContext = createContext()

export default function PagesProvider ({ children }) {
  const contextValues = usePageNavigation()

  return (
    <PagesContext.Provider
      value={contextValues}
    >
      {children}
    </PagesContext.Provider>
  )
}
