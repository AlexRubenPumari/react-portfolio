import ICloseButton from '../ICloseButton/ICloseButton'
import Navigator from '../Navigator/Navigator'
import PageController from '../PageController/PageController'
import './Viewport.scss'

export default function Viewport({
  onNormalScreen,
  isFullScreen,
}) {

  return (
    <main className={`Viewport${isFullScreen ? ' Viewport--fullScreen' : ''}`}>
      <PageController />
      {/* {isFullScreen && (
        <>
          <Navigator
            current={currentPage}
            updateTo={changePage}
            mod='fullScreen'
          />
          <ICloseButton onClick={onNormalScreen} />
        </>
      )} */}
    </main>
  )
}
