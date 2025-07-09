import { useState, useEffect } from 'react'
import { changeFontSizeBody } from '../../../logic/styles'
import Trackbar from '../Trackbar/Trackbar'
import DropMenu from '../DropMenu/DropMenu'
import './ZoomTrackbar.scss'

export default function ZoomTrackbar({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue)
  const values = [20, 40, 60, 80, 100, 120, 140, 160, 180].reverse()
  useEffect(() => {
    changeFontSizeBody(value)
  }, [value])
  return (
    <div className='ZoomTrackbar'>
      <DropMenu
        items={values.map(value => value + '%')}
        values={values}
        currentValue={value}
        text={`${value}%`}
        direction='top'
        callback={setValue}
        mod='zoom'
      />
      <Trackbar
        className='dResponsive'
        value={value}
        changeValue={setValue}
        min={min}
        max={max}
        step={20}
      />
    </div>
  )
}
