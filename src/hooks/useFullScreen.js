import { useState } from 'react'

export default function useFullScreen (initialFullScreen) {
  const [fullScreen, setFullMode] = useState(initialFullScreen)
  const enableFullScreen = () => setFullMode(true)
  const disableFullScreen = () => setFullMode(false)

  return { fullScreen, enableFullScreen, disableFullScreen }
}
