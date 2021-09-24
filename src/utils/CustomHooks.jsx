import { useLayoutEffect, useState } from 'react'
import _ from 'lodash'

export const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth)
  useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth)
    const updateSizeDebounced = _.debounce(updateSize, 100)

    window.addEventListener('resize', updateSizeDebounced)
    updateSize()
    return () => window.removeEventListener('resize', updateSizeDebounced)
  }, [])
  return size
}
