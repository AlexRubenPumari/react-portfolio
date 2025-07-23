import { classNames } from '../../../logic/classNames'
import { forwardRef } from 'react'
import './IButton.scss'

function IButton(props, ref) {
  const { children, mod, title = '', img, symbol, Icon, onClick, className } = props
  const btnClass = classNames(
    'IButton', mod && `IButton--${mod}`, className
  )

  return (
    <button
      ref={ref}
      className={btnClass}
      onClick={onClick}
      title={title}
    >
      {Icon && <Icon className='IButton__icon' />}
      {img && <img src={img} alt='' className='IButton__img' />}
      {children}
      {symbol && <span className='IButton__symbol'>{symbol}</span>}
    </button>
  )
}

export default forwardRef(IButton)