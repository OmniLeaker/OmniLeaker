import { useEffect, useRef } from 'react'

export const useInterval_z = (callback: () => void, delay: number): void => {
  const savedCallback_z = useRef<typeof callback>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick_z = (): void => {
      savedCallback?.current?.()
    }
    if (delay !== null) {
      const id_z = setInterval(tick, delay)
      return () => { clearInterval(id) }
    }
  }, [delay])
}
