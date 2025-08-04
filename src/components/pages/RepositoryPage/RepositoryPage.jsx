import { useModalContext } from '../../../contexts/modal'
import { IconEye, IconPlay } from '../../interface/Icons/Icons'
import { Blob_3 } from '../Blobs/Blobs'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Image from '../Image/Image'
import './RepositoryPage.scss'

export default function RepositoryPage({ repository }) {
  const { openModal } = useModalContext()
  const { title, fullName, pageUrl } = repository
  
  return (
    <>
      <div className='RepositoryPage'>
        <h3 className='RepositoryPage__title'>{title}</h3>
        <Image className='RepositoryPage__img'
          src={`https://raw.githubusercontent.com/${fullName}/master/readme/img1.jpg`}
          alt='Repository image'
        />
        <div className='RepositoryPage__buttons'>
          <PrimaryButton Icon={IconEye} onClick={() => openModal(repository)}>
            Ver más info
          </PrimaryButton> 
          <a href={pageUrl} target='_blank'>
            <PrimaryButton Icon={IconPlay}>Probar</PrimaryButton>
          </a>
        </div>
        <Blob_3 className='RepositoryPage__blob' />
      </div>
    </>
  )
}