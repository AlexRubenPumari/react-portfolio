import { forwardRef } from 'react'
import './IButton.scss'

function IButton(props, ref) {
  const { children, mod, title = '', img, symbol, Icon, onClick } = props
  const className = `IButton${mod ? ` IButton--${mod}` : ''}`

  return (
    <button
      ref={ref}
      className={className}
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