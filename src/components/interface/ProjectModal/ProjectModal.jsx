import { IconEye } from '../Icons/Icons'
import Modal from '../Modal/Modal'
import PrimaryButton from '../../pages/PrimaryButton/PrimaryButton'
import Tag from '../../pages/Tag/Tag'
import './ProjectModal.scss'

export default function ProjectModal({ project, onClose }) {
  const { title, description, imgUrl, tags, repoUrl, pageUrl } = project
  return (
    <Modal className='ProjectModal__body Scrollbar' onClose={onClose}>
      <h3 className='ProjectModal__title'>{title}</h3>
      <img
        src={imgUrl}
        alt={`Imagen de ${title.toLowerCase()}`}
        title={`Imagen de ${title.toLowerCase()}`}
        className='ProjectModal__img'
      />
      <div className='ProjectModal__tags'>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <p className='ProjectModal__p'>{description}</p>
      <div className='ProjectModal__buttons'>
        <a href={pageUrl} target='_blank'>
          <PrimaryButton Icon={IconEye} >Ver proyecto</PrimaryButton>
        </a>
        <a href={repoUrl} target='_blank'>
          <PrimaryButton symbol={'</>'} >Ir al código</PrimaryButton>
        </a>
      </div>
    </Modal>
  )
}
