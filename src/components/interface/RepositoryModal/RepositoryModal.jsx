import { IconEye } from '../Icons/Icons'
import Modal from '../Modal/Modal'
import PrimaryButton from '../../pages/PrimaryButton/PrimaryButton'
import Badge from '../../pages/Badge/Badge'
import Image from '../../pages/Image/Image'
import './RepositoryModal.scss'

export default function RepositoryModal({ project, onClose }) {
  const { title, description, pageUrl, videoUrl, learnings, githubUrl, fullName, badges } = project
  const ytVideoId = videoUrl.split('/').pop()

  return (
    <Modal className='RepositoryModal Scrollbar' onClose={onClose}>
      <h3 className='RepositoryModal__title'>{title}</h3>
      <div className='RepositoryModal__badges'>
        {badges.map(({ url, technology }) => <Badge key={technology} src={url} />)}
      </div>
      <Image
        className='RepositoryModal__img'
        src={`https://raw.githubusercontent.com/${fullName}/master/readme/img1.jpg`}
        alt={`Imagen de ${title}`}
        title={`Imagen de ${title}`}
      />
      <p className='RepositoryModal__description'>{description}</p>
      <div className="RepositoryModal__iframeContainer">
        <iframe width="560" height="315"
          className='RepositoryModal__iframe'
          src={`https://www.youtube.com/embed/${ytVideoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className='RepositoryModal__subtitle'>📚 Cosas que aprendí</p>
      <ul className='RepositoryModal__items'>
        {learnings.map((learning, i) => (
          <li key={i} className='RepositoryModal__item'>{learning}</li>
        )
        )}
      </ul>
      <div className='RepositoryModal__buttons'>
        {pageUrl && (
          <a href={pageUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton className='RepositoryModal__btn' Icon={IconEye}>Probar
            </PrimaryButton>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <PrimaryButton className='RepositoryModal__btn' symbol='</>'>Ver código</PrimaryButton>
          </a>
        )}
      </div>
    </Modal>
  )
}