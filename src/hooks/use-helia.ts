import { useContext } from 'react'
import { HeliaContext, type HeliaContextType } from '../providers/helia-provider'

export const useHelia_z = (): HeliaContextType => {
  return useContext(HeliaContext)
}
