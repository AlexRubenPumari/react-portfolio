import { classNames } from '../../../logic/classNames'

export default function DropMenuButton({ ref, Icon, text, onClick }) {
  return (
    <button
      className={classNames('IButton', 'DropMenu__button')}
      onClick={onClick}
      ref={ref}
    >
      {Icon && <Icon className='DropMenu__icon' />}
      {text && <span className='DropMenu__label'>{text}</span>}
      <span className='DropMenu__arrow'>▼</span>
    </button>
  )
}