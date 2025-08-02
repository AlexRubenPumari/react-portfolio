import { useModalContext } from '../../../contexts/modal'
import { IconEye } from '../../interface/Icons/Icons'
import { Blob_3 } from '../Blobs/Blobs'
import ListOfTags from '../ListOfTags/ListOfTags'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import './RepositoryPage.scss'

export default function RepositoryPage({ repository }) {
  const { openModal } = useModalContext()
  const { title } = repository
  return (
    <>
      <div className='RepositoryPage'>
        <h3 className='RepositoryPage__title'>{title}</h3>
        {/* <img className='RepositoryPage__img' src={imgUrl} alt='Repository image' /> */}
        {/* <ListOfTags className='RepositoryPage__tags' tags={tags} /> */}
        <PrimaryButton Icon={IconEye} onClick={() => openModal(repository)}>
          Ver más info
        </PrimaryButton> 
        <Blob_3 className='RepositoryPage__blob' />
      </div>
    </>
  )
}