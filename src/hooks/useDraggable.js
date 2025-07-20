import { useEffect, useRef } from 'react'

export function useDraggable({ ref, isTouchDevice }) {
  const internalRef = useRef()
  const elementRef = ref ?? internalRef

  const isDraggingRef = useRef(false)
  const initElementPositionRef = useRef()
  const clickPositionRef = useRef()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handlePointerstart = e => {
      if (isTouchDevice && e.touches && e.touches.length > 1) return turnOff()
      // e.preventDefault()

      isDraggingRef.current = true
      const { x, y } = getEventClientCoordinates(e)
      clickPositionRef.current = { x, y }

      const transform = window.getComputedStyle(e.currentTarget).transform
      const matrix = new DOMMatrix(transform)

      // Get <traslateX> and <traslateY> values
      initElementPositionRef.current = { x: matrix.m41, y: matrix.m42 }
    }

    const handlePointermove = e => {
      if (!isDraggingRef.current) return
      e.preventDefault()

      const { x, y } = getEventClientCoordinates(e)
      const deltaX = x - clickPositionRef.current.x
      const deltaY = y - clickPositionRef.current.y

      const newX = initElementPositionRef.current.x + deltaX
      const newY = initElementPositionRef.current.y + deltaY



      element.style.transform =
        `translate(${newX}px, ${newY}px) scale(${getScaleFromElement(element)})`
      element.style.opacity = 0.5
    }

    const handlePointerend = e => {
      if (isTouchDevice && e.touches && e.touches.length === 1) {
        const { x, y } = getEventClientCoordinates(e)
        clickPositionRef.current = { x, y }

        const transform = window.getComputedStyle(element).transform
        const matrix = new DOMMatrix(transform)

        initElementPositionRef.current = { x: matrix.m41, y: matrix.m42 }

        isDraggingRef.current = true
        return
      }

      turnOff()
    }


    const turnOff = () => {
      isDraggingRef.current = false
      turnOffStyles()
    }
    const turnOffStyles = () => element.style.opacity = 1

    if (isTouchDevice) {
      element.addEventListener('touchstart', handlePointerstart)
      document.addEventListener('touchmove', handlePointermove, { passive: false })
      document.addEventListener('touchend', handlePointerend)
    } else {
      element.addEventListener('mousedown', handlePointerstart)
      document.addEventListener('mousemove', handlePointermove)
      document.addEventListener('mouseup', handlePointerend)
      document.addEventListener('mouseleave', handlePointerend)
    }

    return () => {
      if (isTouchDevice) {
        element.removeEventListener('touchstart', handlePointerstart);
        document.removeEventListener('touchmove', handlePointermove);
        document.removeEventListener('touchend', handlePointerend);
      } else {
        element.removeEventListener('mousedown', handlePointerstart);
        document.removeEventListener('mousemove', handlePointermove);
        document.removeEventListener('mouseup', handlePointerend);
        document.removeEventListener('mouseleave', handlePointerend);
      }
    }
  }, [])

  return elementRef
}

function getEventClientCoordinates(e) {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
  } else {
    return { x: e.clientX, y: e.clientY }
  }
}

const getScaleFromElement = (element) => {
  const style = window.getComputedStyle(element)
  const transform = style.transform

  if (!transform || transform === 'none') return 1

  const match = transform.match(/^matrix\((.+)\)$/)
  if (!match) return 1

  const values = match[1].split(', ').map(parseFloat)
  const scaleX = values[0]
  const scaleY = values[3]

  // Normalmente scaleX === scaleY si no hay deformación
  return (scaleX + scaleY) / 2
}