import { useEffect } from 'react'
import { useElementContext } from '../../../contexts/element'
import { scaleElement } from '../../../logic/styles'
import Trackbar from '../Trackbar/Trackbar'
import DropMenu from '../DropMenu/DropMenu'
import './ZoomTrackbar.scss'

export default function ZoomTrackbar () {
  const values = [60, 70, 80, 90, 100, 110, 120, 130, 140].reverse()
  const { elementRef, value, setValue } = useElementContext()
  useEffect(() => {
    scaleElement(elementRef.current, value, 100)
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
        onChange={e => setValue(Number(e.target.value))}
        min={60}
        max={140}
        step={10}
      />
    </div>
  )
}
