// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@tournesol-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Big ball of wibbly wobbly, timey wimey stuff',
    size: 'base',
  },
  argTypes: {
    size: {
      name: 'size',
      description: 'Control text size',
      control: 'select',
      table: {
        type: {
          summary:
            '"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"',
        },
        defaultValue: { summary: '"base"' },
      },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
