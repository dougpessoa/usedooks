export type EventType = React.KeyboardEvent<HTMLInputElement>

export type DebouceType = {
  /** 
   * Debounce for input, will returns the event of input
   *```
   * const { keyUp } = useDebounce()
   * 
   * return (
   *   <input onKeyUp={(e: EventType) => keyUp(e, (value: EventType) => console.log(value), 2000)} />
   * );
   *```
   * @param {EventType} event - event by key up on keyboard of user
   * @param {Function} callback - when delay finish will be send to you the event
   * @param {number} delay - time for wait to returns callback
   */
  keyUp: (
    event: EventType,
    callback: (event: EventType) => void,
    delay?: number
  ) => void
   /** 
    * Debounce for input, will returns the string of event of input
    *```
    *const { keyUpString } = useDebounce()
    * 
    * return (
    *   <input onKeyUp={(e: EventType) => keyUpString(e, (value: string) => console.log(value), 2000)} />
    * );
    *```
    * @param {EventType} event - event by key up on keyboard of user
    * @param {Function} callback - when delay finish will be send to you the event
    * @param {number} delay - time for wait to returns callback
    */
   keyUpString: (
    event: EventType,
    callback: (value: string) => void,
    delay?: number
  ) => void
  /** 
   * Debounce for anything
   * ```
   *  const { debounce } = useDebounce()
   *  
   *  return (
   *    <button onClick={() => debounce(null, () => console.log("debounce!"))}>useDebounce</button>
   *  )
   * ```  
   * @param {any} data - any data you put here 
   * @param {Function} callback - when delay finish will be send to you yours data
   * @param {number} delay - time for wait to returns callback
   */
  debounce: (data: any, callback: (data?: any) => void, delay?: number) => void
  /** 
   * Function that will wait an informed time 
   * 
   * ```
   * console.log("Good night!")
   * await sleep(2000)
   * console.log("Good morning!")
   * ```
   * @param {number} delay - time for wait to continues yours function
   */
  sleep: (delay?: number) => Promise<unknown>
  /** 
   * When any function is waiting this state will be true
   * 
   * PS: sleep function never change this state
   */
  isLoading: boolean
}