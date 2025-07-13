import { useEffect, useRef } from 'react'
import { getEventClientCoordinates } from '../logic/draggable'

const isTouchDevice = ('ontouchstart' in window) ||
                      (navigator.maxTouchPoints > 0) ||
                      (navigator.msMaxTouchPoints > 0)

export function useDraggable() {
  const elementRef = useRef()
  const isDraggingRef = useRef(false)
  const initElementPositionRef = useRef()
  const clickPositionRef = useRef()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseDown = e => {
      e.preventDefault()
      
      isDraggingRef.current = true
      const { x, y } = getEventClientCoordinates(e)
      clickPositionRef.current = { x, y }

      const transform = window.getComputedStyle(e.currentTarget).transform
      const matrix = new DOMMatrix(transform)

      // Get <traslateX> and <traslateY> values
      initElementPositionRef.current = { x: matrix.m41, y: matrix.m42 }
    }

    const handleMouseMove = e => {
      if (!isDraggingRef.current) return
      e.preventDefault()

      const { x, y } = getEventClientCoordinates(e)
      const deltaX = x - clickPositionRef.current.x
      const deltaY = y - clickPositionRef.current.y

      const newX = initElementPositionRef.current.x + deltaX
      const newY = initElementPositionRef.current.y + deltaY

      element.style.transform = `translate(${newX}px, ${newY}px)`
      element.style.opacity = 0.5
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
      element.style.opacity = 1
    }

    if (isTouchDevice) {
      element.addEventListener('touchstart', handleMouseDown)
      document.addEventListener('touchmove', handleMouseMove, { passive: false })
      document.addEventListener('touchend', handleMouseUp)
    } else {
      element.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mouseleave', handleMouseUp)
    }

    return () => {
    if (isTouchDevice) {
      element.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    } else {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    }
    }
  }, [])

  return { elementRef }
}