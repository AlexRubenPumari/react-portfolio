import Blob_1 from '../../assets/svg/blobs/Blob_1'
import Blob_2 from '../../assets/svg/blobs/Blob_2'
import IconDownload from '../../assets/svg/icons/IconDownload'
import profile from '../../assets/img/profile600x600.jpg'
import cv from '../../assets/pdf/alex_pumari_cv.pdf'

export default function IndexPage () {
  return (
    <div className='BasePage IndexPage'>
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
          <a className='PrimaryButton' href={cv} target='_blank'>
            <IconDownload className='PrimaryButton__icon' />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </div>
  )
}
