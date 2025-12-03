import type { Meta, StoryObj } from "@storybook/react-vite"
import { Stepper } from "./stepper.js"

const meta = {
  title: "Components/Interface/Stepper",
  component: Stepper,
    parameters: {
    layout: "centered"
  },
  args: {
    value: 1,
    min: 1,
    max: 5,
  },  
} satisfies Meta<typeof Stepper>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {}

export const customLabel: Story = {
  args: {
    label: (value: number, max: number) => `Page ${value} of ${max}`
  }
}

export const disabled: Story = {
  args: {
    disabled: true
  }
}