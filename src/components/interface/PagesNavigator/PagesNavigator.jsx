import { usePagesContext } from '../../../hooks/usePagesContext'
import Navigator from '../Navigator/Navigator'


export default function PagesNavigator({ mod }) {
  const { page, cantPages, goToNextPage, goToPreviousPage } = usePagesContext()

  return (
    <Navigator
      current={page}
      cant={cantPages}
      label='Diapositiva'
      onPrevious={() => goToPreviousPage()}
      onNext={() => goToNextPage()}
      mod={mod}
    />
  )
}