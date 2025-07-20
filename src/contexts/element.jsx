import { useContext, createContext, useRef, useState } from 'react'

const ElementContext = createContext()

export default function ElementProvider({ children }) {
  const elementRef = useRef()
  const [value, setValue] = useState(100)

  return (
    <ElementContext.Provider
      value={{ elementRef, value, setValue }}>
      {children}
    </ElementContext.Provider>
  )
}

export function useElementContext () {
  const context = useContext(ElementContext)
  if (!context) {
    throw new Error('useElementContext must be used within an ElementProvider')
  }
  return context
}