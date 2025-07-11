import ICloseButton from '../ICloseButton/ICloseButton'
import PageController from '../PageController/PageController'
import PageNavigator from '../PagesNavigator/PagesNavigator'
import './Viewport.scss'

export default function Viewport({
  onNormalScreen,
  isFullScreen,
}) {
  return (
    <main className={`Viewport${isFullScreen ? ' Viewport--fullScreen' : ''}`}>
      <PageController />
      {isFullScreen && (
        <>
          <PageNavigator mod='fullScreen' />
          <ICloseButton onClick={onNormalScreen} />
        </>
      )}
    </main>
  )
}
