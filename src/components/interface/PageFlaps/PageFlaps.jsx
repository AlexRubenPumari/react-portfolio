import { usePagesContext } from '../../../hooks/usePagesContext'
import { PAGES_NAMES, PAGES_VALUES, PAGES } from '../../../config/pages'
import { getPageOfValue } from '../../../logic/pages'
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
      currentValue={getPageOfValue(page)}
      values={PAGES_VALUES}
      defaultValue={PAGES.FIRST_PROJECT}
      flaps={PAGES_NAMES}
      callbacks={flapCallbacks}
    />
  )
}