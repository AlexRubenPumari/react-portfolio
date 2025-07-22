import { Blob_1, Blob_2 } from '../Blobs/Blobs'
import './AboutMePage.scss'

export default function AboutMePage() {
  return (
    <div className='AboutMePage'>
      <div className='AboutMePage__content'>
        <h3>Sobre mí</h3>
        <p>
          Soy un desarrollador frontend en el último año de mi tecnicatura, con
          una sólida pasión por la creación de interfaces de usuario modernas y
          atractivas. Esa es la razón, por mi enfoque en JavaScript y React, una
          librería de JS que me permite construir aplicaciones web dinámicas e
          muy interactivas.
        </p>
      </div>
      <Blob_1 className='AboutMePage__blob AboutMePage__blob--1' />
      <Blob_2 className='AboutMePage__blob AboutMePage__blob--2' />
    </div>
  )
}
