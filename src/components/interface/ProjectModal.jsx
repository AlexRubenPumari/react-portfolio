import { getFormatedTag } from '../../logic/data'
import IconEye from '../../assets/svg/icons/IconEye'
import Modal from './Modal'
import PrimaryButton from '../pages/PrimaryButton/PrimaryButton'

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
        <a href={pageUrl} target='_blank'>
          <PrimaryButton Icon={IconEye} >VerProyecto</PrimaryButton>
        </a>
        <a href={repoUrl} target='_blank'>
          <PrimaryButton symbol={'</>'} >Ir al código</PrimaryButton>
        </a>
      </div>
    </Modal>
  )
}
