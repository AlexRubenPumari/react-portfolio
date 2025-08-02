import { createContext, useContext } from 'react'
import { usePageNavigation } from '../hooks/usePage'

export const PagesContext = createContext()

export default function PagesProvider ({ children }) {
  const contextValues = usePageNavigation()

  return (
    <PagesContext.Provider value={contextValues}>
      {children}
    </PagesContext.Provider>
  )
}

export function usePagesContext () {
  const context = useContext(PagesContext)
  if (!context) {
    throw new Error('usePageContext must be used within a PagesProvider')
  }
  return context
}