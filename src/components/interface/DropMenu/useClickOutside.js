import { useRef, useEffect } from 'react'

export function useClickOutside(callback) {
  const ref = useRef()
  useEffect(() => {
    const handleClickOutMenu = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClickOutMenu)
    return () => {
      document.removeEventListener('click', handleClickOutMenu)
    }
  }, [])
  return { ref }
}