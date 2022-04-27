import { useState, useCallback } from 'react'
import { DebouceType, EventType } from './types'
export * from './types'

let timeout: ReturnType<typeof setTimeout>

/**
 * Hook to work with debounce functions
 * ```
 * const { isLoading, keyUp, keyUpString, debounce, sleep } = useDebounce()
 * ```
 */
function useDebounce(): DebouceType {
  const [isLoading, setIsLoading] = useState(false)

  const keyUp = useCallback(
    async (
      event: EventType,
      callback: (event: EventType) => void,
      delay = 1500
    ) => {
      callback(
        await new Promise<EventType>((resolve) => {
          clearTimeout(timeout)
          setIsLoading(true)

          timeout = setTimeout(() => {
            setIsLoading(false)
            resolve(event)
          }, delay)
        })
      )
    },
    []
  )

  const keyUpString = useCallback(
    async (event: EventType, callback: (value: string) => void, delay = 1500) => {
      const target = event.target as HTMLTextAreaElement
      const { value } = target

      callback(
        await new Promise<string>((resolve) => {
          clearTimeout(timeout)
          setIsLoading(true)

          timeout = setTimeout(() => {
            setIsLoading(false)
            resolve(value)
          }, delay)
        })
      )
    },
    []
  )

  const debounce = useCallback(
    async (data: any, callback: (data: any) => void, delay = 1500) => {
      callback(
        await new Promise<any>((resolve) => {
          clearTimeout(timeout)
          setIsLoading(true)

          timeout = setTimeout(() => {
            setIsLoading(false)
            resolve(data)
          }, delay)
        })
      )
    },
    []
  )

  const sleep = useCallback(async (delay = 1500): Promise<unknown> => {
    return await new Promise(r => setTimeout(r, delay));
  }, [])

  return {
    keyUp,
    keyUpString,
    debounce,
    isLoading,
    sleep
  }
}

export { useDebounce }