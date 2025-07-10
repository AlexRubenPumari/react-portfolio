import { useContext } from 'react'
import { PagesContext } from '../contexts/projects'

export function usePagesContext () {
  return useContext(PagesContext)
}