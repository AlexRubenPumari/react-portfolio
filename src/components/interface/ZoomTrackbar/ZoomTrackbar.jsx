import { useState, useEffect } from 'react'
import { changeFontSizeBody } from '../../../logic/styles'
import Trackbar from '../Trackbar/Trackbar'
import DropMenu from '../DropMenu/DropMenu'
import './ZoomTrackbar.scss'

export default function ZoomTrackbar({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue)
  const values = [60, 70, 80, 90, 100, 110, 120, 130, 140].reverse()
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
        callbacks={x => setValue(x)}
        mod='zoom'
      />
      <Trackbar
        className='dResponsive'
        value={value}
        changeValue={setValue}
        min={min}
        max={max}
        step={10}
      />
    </div>
  )
}
