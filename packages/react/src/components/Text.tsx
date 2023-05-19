// DEPENDENCY
import { ComponentProps, ElementType } from 'react'

// STYLE
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$sans',
  lineHeight: '$normal',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xs: { fontSizes: '$xs' },
      sm: { fontSizes: '$sm' },
      base: { fontSizes: '$base' },
      lg: { fontSizes: '$lg' },
      xl: { fontSizes: '$xl' },
      '2xl': { fontSizes: '$2xl' },
      '3xl': { fontSizes: '$3xl' },
      '4xl': { fontSizes: '$4xl' },
      '5xl': { fontSizes: '$5xl' },
      '6xl': { fontSizes: '$6xl' },
      '7xl': { fontSizes: '$7xl' },
      '8xl': { fontSizes: '$8xl' },
      '9xl': { fontSizes: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
