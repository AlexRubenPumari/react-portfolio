import Tag from '../Tag/Tag'

export default function ListOfTags({ tags, className = '' }) {
  return (
    <ul className={className}>
      {tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </ul>
  )
}