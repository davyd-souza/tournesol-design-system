// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@tournesol-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    id: 'username',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'grid', gap: '$2' }}>
        <Text as="label" htmlFor="username" size="sm">
          Username
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'me.com/',
  },
}
