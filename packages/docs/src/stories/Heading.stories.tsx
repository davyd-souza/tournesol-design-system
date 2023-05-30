// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@tournesol-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'How do you wanna do this?',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'This is a h1 tag!',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default tag on heading component is `h2` but you can change which tag will be used by passing the property `as`.',
      },
    },
  },
}
