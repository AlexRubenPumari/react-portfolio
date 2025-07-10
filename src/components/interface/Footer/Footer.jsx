import { IconSlide } from '../../../assets/svg/icons/Icons'
import ZoomTrackbar from '../ZoomTrackbar/ZoomTrackbar'
import IButton from '../IButton/IButton'
import PagesNavigator from '../PagesNavigator/PagesNavigator'
import './Footer.scss'

export default function Footer({ onFullScreen }) {
  return (
    <footer className='Footer'>
      <PagesNavigator />
      <div className='Footer__rigth'>
        <IButton
          title='Presentación con diapositiva'
          icon={<IconSlide />}
          onClick={onFullScreen}
        />
        <ZoomTrackbar initialValue={100} min={20} max={180} />
      </div>
    </footer>
  )
}
