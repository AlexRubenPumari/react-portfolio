import { IconSlide } from '../Icons/Icons'
import ZoomTrackbar from '../ZoomTrackbar/ZoomTrackbar'
import IButton from '../IButton/IButton'
import PagesNavigator from '../PagesNavigator/PagesNavigator'
import './Footer.scss'

export default function Footer({ onFullScreen }) {
  return (
    <footer className='Footer'>
      <PagesNavigator />
      <div className='Footer__rigth'>
        <ZoomTrackbar />
        <IButton
          title='Presentación con diapositiva'
          Icon={IconSlide}
          onClick={onFullScreen}
        />
      </div>
    </footer>
  )
}
