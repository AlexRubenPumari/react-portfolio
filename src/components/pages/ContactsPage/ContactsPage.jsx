import PrimaryButton from '../PrimaryButton/PrimaryButton'
import IconGitHub from '../../../assets/svg/icons/IconGitHub'
import IconLinkedIn from '../../../assets/svg/icons/IconLinkedIn'
import Blob_2 from '../../../assets/svg/blobs/Blob_2'
import CirclePattern from '../../../assets/patterns/CirclePattern'
import './ContactsPage.scss'

export default function ContactsPage() {
  return (
    <div className='ContactsPage'>
      <h3>¡Quedo a la espera de su mensaje!</h3>
      <div className='ContactsPage__buttons'>
        <a href='https://github.com/AlexRubenPumari' target='_blank'>
          <PrimaryButton Icon={IconGitHub}>Mi Github</PrimaryButton>
        </a>
        <a href='https://www.linkedin.com/in/alex-pumari-diaz/' target='_blank'>
          <PrimaryButton Icon={IconLinkedIn}>Mi LinkedIn</PrimaryButton>
        </a>
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
