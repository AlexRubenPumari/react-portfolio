import { usePagesContext } from '../../../hooks/usePagesContext'
import { getCorrectPageN } from '../../../logic/pages'
import Navigator from '../Navigator/Navigator'


export default function PagesNavigator() {
  const { page, cantPages, goToNextPage, goToPreviousPage } = usePagesContext()

  return (
    <Navigator
      current={getCorrectPageN(page, cantPages)}
      cant={cantPages}
      label='Diapositiva'
      onPrevious={() => goToPreviousPage()}
      onNext={() => goToNextPage()}
    />
  )
}