import IconSlide from '../../assets/svg/icons/IconSlide'
import ZoomTrackbar from '../../components/interface/ZoomTrackbar'
import React from 'react'

export default function Footer({ currentPage, changePage }) {
  const movePage = movement => {
    if (currentPage + movement >= 0 && currentPage + movement <= 3) {
      changePage(currentPage + movement)
    } else {
      if (currentPage + movement > 3) {
        changePage(0)
      }
      if (currentPage + movement < 0) {
        changePage(3)
      }
    }
  }
  return (
    <footer className='Footer'>
      <div className='Footer__left'>
        <button
          className='IButton IButton--rounded'
          onClick={() => movePage(-1)}
        >
          ◀
        </button>
        <span>Diapositiva {currentPage + 1} de 4</span>
        <button
          className='IButton IButton--rounded'
          onClick={() => movePage(1)}
        >
          ▶
        </button>
      </div>
      <div className='Footer__rigth'>
        <button
          className='IButton'
          title='Presentación con diapositiva'>
          <IconSlide className='IButton__icon' />
        </button>
        <ZoomTrackbar initialValue='100' min='10' max='200' />
      </div>
    </footer>
  )
}
