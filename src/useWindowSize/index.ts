import { useState, useEffect } from 'react'
import { WindowSize } from './types'
export * from './types'

/**
 * Hook to work with the changes of user's screen
 * ```
 * const { width, height } = useWindowSize()
 * ```
 * MIT: This hook is getted by https://usehooks.com/
 */
function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export { useWindowSize }
