import { useState } from "react"
import type { Page } from "../../../types/page.js"
import { Button, Stepper, Trackbar, MenuButton } from "../index.js"
import { usePageContext } from "../../../contexts/page.js"
import { SlideIcon } from "../../icons/index.js"
import "./footer.scss"

const zoomValues = [60, 80, 100, 120, 140] as const
type ZoomValue = typeof zoomValues[number]

function renderItem<ItemType> (item: ItemType): string {
  return `${item} %`
}

export function Footer() {
  const { page, setPage } = usePageContext()
  const [pageZoom, setPageZoom] = useState<ZoomValue>(100)

  return (
    <footer className="footer">
      <Stepper
        label={`Página ${page} de 4`}
        value={page}
        min={1}
        max={4}
        onChange={newPage => setPage(newPage as Page)}
      />
      <div className="footer__controls-group">
        <MenuButton
          items={zoomValues}
          label={renderItem(pageZoom)}
          onChange={value => setPageZoom(value)}
          renderItem={renderItem}
          direction="top"
        />
        <Trackbar
          value={pageZoom}
          min={60}
          max={140}
          step={20}
          onChange={(newValue: number) => setPageZoom(newValue as ZoomValue)}
        />
        <Button size="sm">
          <SlideIcon />
        </Button>
      </div>
    </footer>
  )
}
