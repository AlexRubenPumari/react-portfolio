import { useState, useEffect } from 'react'

export default function Trackbar({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue)
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth <= 500)
  const STEP = 10
  const changeValue = step => {
    if (
      Number(value) + step >= Number(min) &&
      Number(value) + step <= Number(max)
    ) {
      setValue(Number(value) + step)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 500) console.log('Panta')
    })
  }, [])
  return (
    <div className='Trackbar'>
      <span className='Trackbar__label'>{`${value}%`}</span>
      <div className='Trackbar__container'>
        <button
          className='IButton IButton--rounded'
          onClick={() => changeValue(STEP * -1)}>
          -
        </button>
        <input
          className='Trackbar__input'
          onChange={e => setValue(e.target.value)}
          type='range'
          min={min}
          max={max}
          step='10'
          value={value}
        />
        <button
          className='IButton IButton--rounded'
          onClick={() => changeValue(STEP)}>
          +
        </button>
      </div>
    </div>
  )
}
