// DEPENDENCY
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@tournesol-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/davyd-souza.png',
    alt: 'Davyd Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
