import { getFormatedTag } from '../../../logic/data'
import './Tag.scss'

export default function Tag({ children }) {
  const tagName = getFormatedTag(children)
  const className = `Tag Tag--${tagName.toLowerCase().replace(/[. ]/g, '-')}`
  return <li className={className}>{tagName}</li>
}