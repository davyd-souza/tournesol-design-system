// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@tournesol-ui/react'

// ASSET
import { Plus } from '@phosphor-icons/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Neutral: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'neutral',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    variant: 'primary',
    outlined: true,
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    variant: 'primary',
    size: 'sm',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    variant: 'primary',
    size: 'lg',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Add new
        <Plus />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
