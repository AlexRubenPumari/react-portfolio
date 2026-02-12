import { useEffect } from "react"
import type { Page, ZoomValue } from "../../../types/index.js"
import { Button, Stepper, Trackbar, MenuButton } from "../index.js"
import { setElementZoom } from "../../../logic/index.js"
import { usePageContext, useZoomContext } from "../../../contexts/index.js"
import { SlideIcon } from "../../icons/index.js"
import { zoomValues } from "../../../config/constants.js"
import "./footer.scss"

function renderItem<ItemType> (item: ItemType): string {
  return `${item} %`
}

export function Footer() {
  const { page, setPage } = usePageContext()
  const { zoom, setZoom } = useZoomContext()

  useEffect(() => {
    const viewport = document.querySelector<HTMLElement>("#viewport")

    if(viewport) setElementZoom(viewport, zoom)
  }, [zoom])

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
          label={renderItem(zoom)}
          onChange={zoomValue => setZoom(zoomValue)}
          renderItem={renderItem}
          direction="top"
        />
        <Trackbar
          value={zoom}
          min={60}
          max={140}
          step={20}
          onChange={newValue => setZoom(newValue as ZoomValue)}
        />
        <Button size="sm">
          <SlideIcon />
        </Button>
      </div>
    </footer>
  )
}
