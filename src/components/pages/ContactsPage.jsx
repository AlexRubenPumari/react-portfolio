import IconGitHub from '../../assets/svg/icons/IconGitHub'
import IconLinkedIn from '../../assets/svg/icons/IconLinkedIn'
import Blob_2 from '../../assets/svg/blobs/Blob_2'
import CirclePattern from '../../assets/patterns/CirclePattern'

export default function ContactsPage() {
  return (
    <div className='BasePage ContactsPage'>
      <h3>¡Quedo a la espera de su mensaje!</h3>
      <div className='ContactsPage__buttons'>
        <button className='PrimaryButton'>
          <IconGitHub className='PrimaryButton__icon' />
          <span>Mi GitHub</span>
        </button>
        <button className='PrimaryButton'>
          <IconLinkedIn className='PrimaryButton__icon' />
          <span>Mi LinkedIn</span>
        </button>
      </div>
      <Blob_2 className='ContactsPage__blob' />
      <CirclePattern
        className='ContactsPage__pattern'
        rows={1}
        cols={4}
        strokeWidth={4}
        width={3.5}
        gap={5}
      />
    </div>
  )
}
