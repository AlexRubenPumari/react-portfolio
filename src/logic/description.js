export function getTitleFrom (description) {
  const index = description.indexOf(':')
  return description.slice(0, index)
}
export function getDescriptionFrom (description) {
  const index = description.indexOf(':')
  return description.slice(index + 1)
}