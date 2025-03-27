import { getFormatedTag } from '../../logic/getData'
import IconEye from '../../assets/svg/icons/IconEye'
import Modal from './Modal'

export default function ProjectModal({ project, toClose }) {
  const { title, description, imgUrl, tags } = project
  return (
    <Modal className='ProjectModal__body' toClose={toClose}>
      <h3>{title}</h3>
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
      <p>{description}</p>
      <div className='ProjectModal__buttons'>
        <button className='PrimaryButton'>
          <IconEye className='PrimaryButton__icon' />
          <span>Ver Proyecto</span>
        </button>
        <button className='PrimaryButton'>
          <span className='PrimaryButton__symbol PrimaryButton__symbol--m'>{'</>'}</span>
          <span>Ir al código</span>
        </button>
      </div>
    </Modal>
  )
}
