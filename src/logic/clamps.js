export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max)
}

export function clampLoop(val, min, max) {
  if (val > max) return min
  if (val < min) return max
  return val
}

