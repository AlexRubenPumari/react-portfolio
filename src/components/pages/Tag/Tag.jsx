import { getFormatedTag } from '../../../logic/data'
import './Tag.scss'

export default function Tag({ children }) {
  return (
    <span className={`Tag Tag--${children}`}>
      {getFormatedTag(children)}
    </span>
  )
}