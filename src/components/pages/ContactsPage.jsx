import IconGitHub from '../../assets/svg/icons/IconGitHub'
import IconLinkedIn from '../../assets/svg/icons/IconLinkedIn'

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
    </div>
  )
}
