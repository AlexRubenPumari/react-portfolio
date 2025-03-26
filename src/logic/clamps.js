export function clampLoop(value, min, max) {
    if (value >= min && value <= max) {
      return value
    } else {
      if (value < min) return max
      if (value > max) return min
    }
} 
export function clamp(value, min, max) {
    if (value >= min && value <= max) {
      return value
    } else {
      if (value < min) return min
      if (value > max) return max
    }
} 