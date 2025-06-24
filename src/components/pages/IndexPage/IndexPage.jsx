import Blob_1 from '../../../assets/svg/blobs/Blob_1'
import Blob_2 from '../../../assets/svg/blobs/Blob_2'
import IconDownload from '../../../assets/svg/icons/IconDownload'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import profile from '../../../assets/img/profile600x600.jpg'
import cv from '../../../assets/pdf/alex_pumari_cv.pdf'
import './IndexPage.scss'

export default function IndexPage () {
  return (
    <div className='IndexPage'>
      <Blob_1 className='IndexPage__blob--1' />
      <Blob_2 className='IndexPage__blob--2' />
      <div className='IndexPage__content'>
        <img src={profile} className='IndexPage__profile' alt='Profile' />
        <div className='IndexPage__column'>
          <h3 className='IndexPage__subtitle'>Alex Pumari Diaz</h3>
          <h2>
            Desarrollador
            <br />
            Frontend
          </h2>
          <a href={cv} target='_blank'>
            <PrimaryButton Icon={IconDownload}>Descargar CV</PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  )
}