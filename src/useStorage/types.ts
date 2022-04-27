export type StorageType = {
  /**
   * Get data already JSON parsed from key name
   */
  getItem: (key: string) => any
  /**
   * Set data already JSON stringfied using key name to local storage
   */
  setItem: (key: string, value: any) => void
  /**
   * Clear all local storage
   */
  clear: () => void
  /**
   * Remove an item from local storage
   */
  removeItem: (key: string) => void
  /**
   * Get name of key in certain index
   */
  key: (index: number) => string | null
  /** Get all data from all items in local storage  */
  getAllItemsData: () => any[]
  /** Get all key names from local storage */
  getAllKeyNames: () => string[]
}