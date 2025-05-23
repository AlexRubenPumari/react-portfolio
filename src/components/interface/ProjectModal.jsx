import { getFormatedTag } from '../../logic/getData'
import IconEye from '../../assets/svg/icons/IconEye'
import Modal from './Modal'

export default function ProjectModal({ project, toClose }) {
  const { title, description, imgUrl, tags, repoUrl, pageUrl } = project
  return (
    <Modal className='ProjectModal__body Scrollbar' toClose={toClose}>
      <h3 className='ProjectModal__title'>{title}</h3>
      <img
        src={imgUrl}
        alt={`Imagen de ${title.toLowerCase()}`}
        title={`Imagen de ${title.toLowerCase()}`}
        className='ProjectModal__img'
      />
      <div className='ProjectModal__tags'>
        {tags.map(tag => (
          <span key={tag} className={`Tag Tag--${tag}`}>
            {getFormatedTag(tag)}
          </span>
        ))}
      </div>
      <p className='ProjectModal__p'>{description}</p>
      <div className='ProjectModal__buttons'>
        <a
          className='PrimaryButton'
          href={pageUrl}
          target='_blank'
        >
          <IconEye className='PrimaryButton__icon' />
          <span>Ver Proyecto</span>
        </a>
        <a
          className='PrimaryButton'
          href={repoUrl}
          target='_blank'
        >
          <span className='PrimaryButton__symbol PrimaryButton__symbol--m'>{'</>'}</span>
          <span>Ir al código</span>
        </a>
      </div>
    </Modal>
  )
}
