import { usePagesContext } from '../../../hooks/usePagesContext'
import { PAGES_NAMES, PAGES_VALUES } from '../../../config/pages'
import Flaps from '../Flaps/Flaps'

export default function PageFlaps () {
  const { 
    page,
    goToIndexPage,
    goToAboutMePage,
    goToFirstProjectPage,
    goToContactsPage
  } = usePagesContext()
  const flapCallbacks = [
    goToIndexPage,
    goToAboutMePage,
    goToFirstProjectPage,
    goToContactsPage
  ]

  return (
    <Flaps
      currentValue={page}
      values={PAGES_VALUES}
      flaps={PAGES_NAMES}
      callbacks={flapCallbacks}
    />
  )
}