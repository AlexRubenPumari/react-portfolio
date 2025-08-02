import { IconEye } from '../Icons/Icons'
import Modal from '../Modal/Modal'
import PrimaryButton from '../../pages/PrimaryButton/PrimaryButton'
import ListOfTags from '../../pages/ListOfTags/ListOfTags'
import './RepositoryModal.scss'

export default function RepositoryModal ({ project, onClose }) {
  const { title, description, pageUrl, videoUrl, learnings, imagePath, githubUrl, fullName, badges } = project

  return (
    <Modal className='RepositoryModal__body Scrollbar' onClose={onClose}>
      <h3 className='RepositoryModal__title'>{title}</h3>

      {/* {!!tags.length && <ListOfTags className='RepositoryModal__tags' tags={tags} />} */}

      <img
        className='RepositoryModal__img'
        src={`https://raw.githubusercontent.com/${fullName}/master/readme/img1.jpg`}
        alt={`Imagen de ${title}`}
        title={`Imagen de ${title}`}
      />
      <p className='RepositoryModal__p'>{description}</p>
      <div className='RepositoryModal__buttons'>
        {pageUrl && (
          <a href={pageUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton Icon={IconEye}>Ver proyecto</PrimaryButton>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton symbol='</>'>Ir al código</PrimaryButton>
          </a>
        )}
      </div>
    </Modal>
  )
}