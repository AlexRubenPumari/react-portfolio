import { useModalContext } from '../../../contexts/modal'
import { IconEye } from '../../interface/Icons/Icons'
import { Blob_3 } from '../Blobs/Blobs'
import ListOfTags from '../ListOfTags/ListOfTags'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import './ProjectPage.scss'

export default function ProjectPage({ project }) {
  const { openModal } = useModalContext()
  const { title, imgUrl, tags } = project
  return (
    <>
      <div className='ProjectPage'>
        <h3 className='ProjectPage__title'>{title}</h3>
        <img className='ProjectPage__img' src={imgUrl} alt='Project image' />
        <ListOfTags className='ProjectPage__tags' tags={tags} />
        <PrimaryButton Icon={IconEye} onClick={() => openModal(project)}>
          Ver más info
        </PrimaryButton> 
        <Blob_3 className='ProjectPage__blob' />
      </div>
    </>
  )
}