import { useEffect, useRef } from 'react'

export function useDraggable() {
  const elementRef = useRef()
  const isDraggingRef = useRef(false)
  const initElementPositionRef = useRef()
  const clickPositionRef = useRef()

  useEffect(() => {
    const element  = elementRef.current
    if (!element) return

    const handleMouseDown = e => {
      e.preventDefault()

      isDraggingRef.current = true
      clickPositionRef.current = { x: e.clientX, y: e.clientY }  
      
      const transform = window.getComputedStyle(e.currentTarget).transform
      const matrix = new DOMMatrix(transform)

      initElementPositionRef.current = { x: matrix.m41, y: matrix.m42 }
    }
    const handleMouseMove = e => {
      if (!isDraggingRef.current) return

      const deltaX = e.clientX - clickPositionRef.current.x
      const deltaY = e.clientY - clickPositionRef.current.y

      const newX = initElementPositionRef.current.x + deltaX
      const newY = initElementPositionRef.current.y + deltaY

      element.style.transform = `translate(${newX}px, ${newY}px)`
    }
    const handleMouseUp = () => isDraggingRef.current = false

    element.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseUp)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    }
  }, [])

  return { elementRef }
}