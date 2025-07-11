import { Blob_3 } from '../../../assets/svg/blobs/Blobs'
import './ProjectPage.scss'

export default function ProjectPage({ project }) {
  const { title } = project
  return (
    <>
      <div className='ProjectPage'>
        <h3 className='ProjectPage__title'>
          {`Proyecto: ${title}`}
        </h3>
        
        <Blob_3 className='ProjectPage__blob' />
      </div>
    </>
  )
}