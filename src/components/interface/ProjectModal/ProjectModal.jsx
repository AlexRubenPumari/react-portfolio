import { IconEye } from '../Icons/Icons'
import Modal from '../Modal/Modal'
import PrimaryButton from '../../pages/PrimaryButton/PrimaryButton'
import ListOfTags from '../../pages/ListOfTags/ListOfTags'
import './ProjectModal.scss'

export default function ProjectModal ({ project, onClose }) {
  const { title, description, imgUrl, tags = [], repoUrl, pageUrl } = project

  return (
    <Modal className='ProjectModal__body Scrollbar' onClose={onClose}>
      <h3 className='ProjectModal__title'>{title}</h3>

      <img
        src={imgUrl}
        alt={`Imagen de ${title.toLowerCase()}`}
        title={`Imagen de ${title.toLowerCase()}`}
        className='ProjectModal__img'
      />

      {!!tags.length && <ListOfTags className='ProjectModal__tags' tags={tags} />}

      <p className='ProjectModal__p'>{description}</p>

      <div className='ProjectModal__buttons'>
        {pageUrl && (
          <a href={pageUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton Icon={IconEye}>Ver proyecto</PrimaryButton>
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton symbol='</>'>Ir al código</PrimaryButton>
          </a>
        )}
      </div>
    </Modal>
  )
}