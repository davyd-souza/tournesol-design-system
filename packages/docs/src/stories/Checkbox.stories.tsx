// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@tournesol-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    id: 'terms',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text as="label" htmlFor="terms" size="sm">
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
