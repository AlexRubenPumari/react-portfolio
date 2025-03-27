export default function ProjectCard({ title, imgUrl, id, callback }) {
  return (
    <article className='ProjectCard' onClick={() => callback(id)}>
      <h4 className='ProjectCard__title'>{title}</h4>
      <div className='ProjectCard__ImgContainer'>
        <img
          className='ProjectCard__img'
          src={imgUrl}
          alt={`Representación de ${title}`}
        />
      </div>
      <p className='ProjectCard__label'>Ver más</p>
    </article>
  )
}
