// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@tournesol-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          consequuntur.
        </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
