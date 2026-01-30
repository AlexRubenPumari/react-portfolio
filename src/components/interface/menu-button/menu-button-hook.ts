import { useEffect, useRef, useState, type RefObject } from "react"

export interface MenuButtonState {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  containerRef: RefObject<HTMLDivElement | null>
}

export function useMenuButtonState(initialOpen: boolean = false): MenuButtonState {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(v => !v),
    containerRef,
  }
}