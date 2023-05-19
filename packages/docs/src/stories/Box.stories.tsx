// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@tournesol-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
        consequuntur.
      </Text>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: <Text>This is a section now!</Text>,
    as: 'section',
  },
}
