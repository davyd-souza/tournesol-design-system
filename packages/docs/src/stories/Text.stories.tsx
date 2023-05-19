// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@tournesol-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Big ball of wibbly wobbly, timey wimey stuff',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
