import { useCallback } from "react";
import { StorageType } from './types'
export * from './types'

/**
 * Superset of local storage.
 */
function useStorage(): StorageType {
  const getItem = useCallback((key: string) => {
    const storage = localStorage.getItem(key)

    if (storage) return JSON.parse(storage)

    return null
  }, [])

  const setItem = useCallback((key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  const clear = useCallback(() => {
    localStorage.clear()
  }, [])

  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key)
  }, [])

  const key = useCallback((index: number) => {
    return localStorage.key(index)
  }, [])

  const getAllItemsData = useCallback(() => {
    const size = localStorage.length
    const allDatas = []

    for (let i = 0; i < size; i++) {
      const keyName = key(i)

      if (keyName) {
        allDatas.push({
          key: keyName,
          value: getItem(keyName)
        })
      }
    }

    return allDatas
  }, [getItem, key])

  const getAllKeyNames = useCallback(() => {
    const size = localStorage.length
    const allNames = []

    for (let i = 0; i < size; i++) {
      const keyName = key(i)

      if (keyName) {
        allNames.push(keyName)
      }
    }

    return allNames
  }, [key])

  return {
    getItem,
    setItem,
    clear,
    removeItem,
    key,
    getAllItemsData,
    getAllKeyNames,
  }
}

export { useStorage }