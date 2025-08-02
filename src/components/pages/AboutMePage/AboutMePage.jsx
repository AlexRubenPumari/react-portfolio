import { Blob_1, Blob_2 } from '../Blobs/Blobs'
import './AboutMePage.scss'

export default function AboutMePage() {
  return (
    <div className='AboutMePage'>
      <div className='AboutMePage__content'>
        <h3>Sobre mí</h3>
        <p>
          Desarrollador Frontend en formación 🎓, actualmente cursando el último año de mi tecnicatura. Me entusiasma crear experiencias web modernas e intuitivas 🚀, utilizando JavaScript y React para desarrollar interfaces dinámicas. También trabajo con Tailwind CSS y Bootstrap para lograr diseños responsivos y bien cuidados 🎨📱.
        </p>
      </div>
      <Blob_1 className='AboutMePage__blob AboutMePage__blob--1' />
      <Blob_2 className='AboutMePage__blob AboutMePage__blob--2' />
    </div>
  )
}