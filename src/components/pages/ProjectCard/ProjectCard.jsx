import './ProjectCard.scss'

export default function ProjectCard({ title, imgUrl, id, callback }) {
  return (
    <article className='ProjectCard' onClick={() => callback(id)}>
      <div className='ProjectCard__imgContainer'>
        <img
          className='ProjectCard__img'
          src={imgUrl}
          alt={`Representación de ${title}`}
        />
      </div>
      <h4 className='ProjectCard__title'>{title}</h4>
      <p className='ProjectCard__label'>Ver más</p>
    </article>
  )
}
