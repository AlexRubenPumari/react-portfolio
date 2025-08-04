import { useState } from 'react'
import { classNames } from '../../../logic/classNames'
import './Image.scss'

export default function Image({ src, alt, title, className }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={classNames('Image__container', className)}>
      {!isLoaded && <span className='Image__label'>Loading...</span>}
      <img
        className={classNames('Image', isLoaded && 'loaded')}
        src={src}
        alt={alt}
        title={title}
        loading='lazy'
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}