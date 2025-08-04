import { usePagesContext } from '../../../contexts/pages'
import { PAGES_NAMES, PAGES_VALUES, PAGES } from '../../../config/pages'
import { getValueOfPage } from '../../../logic/pages'
import Flaps from '../Flaps/Flaps'

export default function PageFlaps () {
  const { 
    page,
    cantPages,
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
      currentValue={getValueOfPage(page, cantPages)}
      values={PAGES_VALUES}
      defaultValue={PAGES.FIRST_PROJECT}
      flaps={PAGES_NAMES}
      callbacks={flapCallbacks}
    />
  )
}