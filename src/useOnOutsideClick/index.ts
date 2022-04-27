import { RefObject, useEffect } from 'react'
import { AnyEvent } from './types'
export * from './types'
/**
 * Hook to observe the click function of user. This function will returns when user click outside of component
 * 
 * ```
 * const ref = useRef(null)
 * useOnClickOutside(ref, () => console.log('Clicked outside'));
 *
 * return (
 *   <button ref={ref}>useOnClickOutside</button>
 * );
 * ```
 * MIT: This hook is getted by https://usehooks.com/
 */
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler()
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }

    // Reload only if ref or handler changes
  }, [ref, handler])
}

export { useOnClickOutside }
