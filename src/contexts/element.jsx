import { useContext, createContext, useRef, useEffect } from 'react'
import { useStepper } from '../hooks/useStepper'

const ElementContext = createContext()

function scaleElement(element, value, base = 100) {
  element.style.transform = `scale(${value / base})`
}

export default function ElementProvider({ children }) {
  const elementRef = useRef()
  const { value, setValue, goNext, goPrevious } = useStepper(
    { min: 60, max: 140, step: 20, initial: 100 }
  )
  useEffect(() => {
    if (!elementRef.current) return

    scaleElement(elementRef.current, value, 100)
  }, [value])

  return (
    <ElementContext.Provider
      value={{ elementRef, value, setValue, goNext, goPrevious }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function useElementContext() {
  const context = useContext(ElementContext)
  if (!context) {
    throw new Error('useElementContext must be used within an ElementProvider')
  }
  return context
}
