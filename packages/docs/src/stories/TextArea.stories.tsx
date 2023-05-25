// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@tournesol-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    id: 'comment',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'grid', gap: '$2' }}>
        <Text as="label" htmlFor="comment" size="sm">
          Comment
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your comment',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your comment',
  },
}
