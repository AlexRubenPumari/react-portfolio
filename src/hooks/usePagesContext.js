import { useContext } from 'react'
import { PagesContext } from '../contexts/pages'

export function usePagesContext () {
  return useContext(PagesContext)
}