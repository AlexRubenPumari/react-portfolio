export default function ProjectCard({ title, imgUrl }) {
  return (
    <article className='ProjectCard'>
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
