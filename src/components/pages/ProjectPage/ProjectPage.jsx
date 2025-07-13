import { useContext } from 'react'
import { ModalContext } from '../../../contexts/modal'
import { IconEye } from '../../../assets/svg/icons/Icons'
import { Blob_3 } from '../../../assets/svg/blobs/Blobs'
import ListOfTags from '../ListOfTags/ListOfTags'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import './ProjectPage.scss'

export default function ProjectPage({ project }) {
  const { title, imgUrl, tags } = project
  const { openModal } = useContext(ModalContext)
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
