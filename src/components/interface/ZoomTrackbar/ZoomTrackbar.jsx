import { useElementContext } from '../../../contexts/element'
import Trackbar from '../Trackbar/Trackbar'
import DropMenu from '../DropMenu/DropMenu'
import './ZoomTrackbar.scss'

const zoomValues = [140, 130, 120, 110, 100, 90, 80, 70, 60]

export default function ZoomTrackbar () {
  const { value, setValue } = useElementContext()

  return (
    <div className='ZoomTrackbar'>
      <DropMenu
        items={zoomValues.map(v => `${v}%`)}
        values={zoomValues}
        currentValue={value}
        text={`${value}%`}
        direction='top'
        callbacks={setValue}
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