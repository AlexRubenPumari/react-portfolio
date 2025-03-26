import React from 'react'
import ZoomTrackbar from '../../components/interface/ZoomTrackbar'
import Pagination from '../../components/interface/Pagination'
import IconSlide from '../../assets/svg/icons/IconSlide'

export default function Footer({ currentPage, changePage }) {
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
        <button className='IButton' title='Presentación con diapositiva'>
          <IconSlide className='IButton__icon' />
        </button>
        <ZoomTrackbar initialValue={100} min={20} max={180} />
      </div>
    </footer>
  )
}
