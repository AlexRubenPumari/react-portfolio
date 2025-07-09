import { cloneElement } from 'react'
import './IButton.scss'

export default function IButton ({
  mod = '',
  title = '',
  img,
  value,
  symbol,
  icon,
  onClick,
}) {
  return (
    <button
      className={`IButton ${mod ? `IButton--${mod}` : ''}`}
      onClick={onClick}
      title={title}
    >
      {symbol && <span className='IButton__symbol'>{symbol}</span>}
      {icon && cloneElement(icon, { className: 'IButton__icon' })}
      {img && <img src={img} className='IButton__img' />}
      {value && <span className={mod ? `IButton__span--${mod}` : ''}>{value}</span>}
    </button>
  )
}
