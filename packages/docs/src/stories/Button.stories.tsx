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
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      description: 'Control button appearance',
      options: ['primary', 'neutral'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: '"primary" | "neutral"' },
        defaultValue: { summary: '"primary"' },
      },
    },
    size: {
      description: 'Control button size',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      table: {
        defaultValue: { summary: '"md"' },
      },
    },
    disabled: {
      description: 'Disable button',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: 'click',
    },
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
