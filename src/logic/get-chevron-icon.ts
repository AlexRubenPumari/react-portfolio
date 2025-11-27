export type Direction =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "top-left"
  | "top-right"

export function getChevronIcon(isOpen: boolean, direction: Direction): string {
  const isOpeningDownward = direction.startsWith("bottom")

  if (isOpen) return isOpeningDownward ? "▲" : "▼"

  return isOpeningDownward ? "▼" : "▲"
}