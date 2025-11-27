import type { Meta, StoryObj } from "@storybook/react-vite"
import githubIcon from "../../../assets/img/icon-github.png"
import { Button } from "./button.js"

const meta = {
  title: "Components/Interface/Button",
  component: Button,
    parameters: {
    layout: "centered"
  },
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const rectangle: Story = {}

export const square: Story = {
  args: {
    children: "@",
    shape: "square"
  }
}

export const disabled: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1em" }}>
      <Button {...args}/>
      <Button {...{ ...args, shape: "square", children: "@" }}/>
    </div>
  ),
  args: {
    disabled: true,
  }
}

export const withIcon: Story = {
  args: {
    icon: <img src={githubIcon} />,
  }
}