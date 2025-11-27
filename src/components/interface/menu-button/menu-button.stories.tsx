import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenuButton } from "./menu-button.js"

const meta = {
  title: "Components/Interface/MenuButton",
  component: MenuButton,
    parameters: {
    layout: "centered"
  },
} satisfies Meta<typeof MenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const open: Story = {
  args: {
    initialIsOpen: true,
    direction: "bottom",
  },
  render: (args) => (
    <div
      style={{ width: "40em", display: "flex", flexWrap: "wrap", gap: "14em 9em" }}
    >
      <MenuButton {...{...args, direction: "bottom-left"}}/>
      <MenuButton {...{...args, direction: "bottom"}}/>
      <MenuButton {...{...args, direction: "bottom-right"}}/>
      <MenuButton {...{...args, direction: "top-left"}}/>
      <MenuButton {...{...args, direction: "top"}}/>
      <MenuButton {...{...args, direction: "top-right" }}/>
    </div>
  )
}

export const closed: Story = {
  args: {
    direction: "bottom",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "10em" }}>
      <MenuButton {...args}/>
      <MenuButton {...{...args, direction: "top"}}/>
    </div>
  )
}