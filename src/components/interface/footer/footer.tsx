import { useState } from "react"
import { SlideIcon } from "../icons/index.js"
import { Button, Stepper, Trackbar, MenuButton } from "../index.js"
import "./footer.scss"

const zoomValues = [60, 80, 100, 120, 140] as const
type ZoomValue = typeof zoomValues[number]

function renderItem<ItemType> (item: ItemType): string {
  return `${item} %`
}

export function Footer() {
  const [page, setPage] = useState<number>(1)
  const [pageZoom, setPageZoom] = useState<ZoomValue>(100)

  return (
    <footer className="footer">
      <Stepper
        label={`Página ${page} de 5`}
        value={page}
        max={5}
        onChange={newValue => setPage(newValue)}
      />
      <div className="footer__controls-group">
        <MenuButton
          items={zoomValues}
          label={renderItem(pageZoom)}
          onChange={value => setPageZoom(value)}
          renderItem={renderItem}
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
