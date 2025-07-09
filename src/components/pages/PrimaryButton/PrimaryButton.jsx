import './PrimaryButton.scss'

export default function PrimaryButton ({
  name, className = '', onClick, children, Icon, symbol
}) {
  return (
    <button
      onClick={onClick}
      name={name}
      className={`PrimaryButton ${className}`}
    >
      {Icon && <Icon className='PrimaryButton__icon' />}
      {symbol && <span className='PrimaryButton__symbol PrimaryButton__symbol--m'>{symbol}</span>}
      {children && <span>{children}</span>}
    </button>
  )
}