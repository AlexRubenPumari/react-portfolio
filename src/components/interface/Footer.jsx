import ZoomTrackbar from '../../components/interface/ZoomTrackbar'
import Pagination from '../../components/interface/Pagination'
import IButton from '../../components/interface/IButton'
import IconSlide from '../../assets/svg/icons/IconSlide'

export default function Footer ({ currentPage, changePage, onFullScreen }) {
  return (
    <footer className='Footer'>
      <Pagination
        label='Diapositiva'
        min={0}
        max={3}
        current={currentPage}
        updateTo={changePage}
      />
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
