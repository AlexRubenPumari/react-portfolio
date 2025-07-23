import { useEffect, useRef } from 'react'

export function useZoomable(
  { ref, isTouchDevice, onZoomIn, onZoomOut, threshold = 15 }
) {
  const internalRef = useRef(null)
  const elementRef = ref ?? internalRef
  const initialDistance = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleTouchstart = e => {
      if (e.touches.length === 2) {
        initialDistance.current = getDistance(e.touches)
      }
    }

    const handleTouchmove = e => {
      if (e.touches.length === 2 && initialDistance.current != null) {
        e.preventDefault()
        const currentDistance = getDistance(e.touches)
        const distanceDelta = currentDistance - initialDistance.current

        const zoomAmount = Math.abs(distanceDelta)
        if (zoomAmount > threshold) {
          if (distanceDelta > 0) {
            onZoomIn?.(zoomAmount)
          } else {
            onZoomOut?.(zoomAmount)
          }
          // Evitar múltiples activaciones continuas
          initialDistance.current = currentDistance
        }
      }
    }

    const handleTouchend = () => {
      if (initialDistance.current != null) {
        initialDistance.current = null
      }
    }

    const handleWheel = e => {
      const zoomAmount = Math.abs(e.deltaY)

      if (zoomAmount > threshold) {
        if (e.deltaY > 0) {
          onZoomOut?.(zoomAmount)
        } else {
          onZoomIn?.(zoomAmount)
        }
      }
    }

    if (isTouchDevice) {
      element.addEventListener('touchstart', handleTouchstart)
      element.addEventListener('touchmove', handleTouchmove, { passive: false })
      element.addEventListener('touchend', handleTouchend)
    } else {
      document.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (isTouchDevice) {
        element.removeEventListener('touchstart', handleTouchstart)
        element.removeEventListener('touchmove', handleTouchmove)
        element.removeEventListener('touchend', handleTouchend)
      } else {
        document.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return elementRef
}

function getDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX
  const dy = touches[0].clientY - touches[1].clientY
  return Math.sqrt(dx * dx + dy * dy)
}
