import { cloneElement } from 'react'

export default function IButton({
  className = '',
  title = '',
  symbol,
  icon,
  onClick,
}) {
  return (
    <button className={`IButton ${className}`} onClick={onClick} title={title}>
      {symbol && <span className='IButton__symbol'>{symbol}</span>}
      {icon && cloneElement(icon, { className: 'IButton__icon' })}
    </button>
  )
}
