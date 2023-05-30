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
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      base: { fontSize: '$base' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

// TYPE
export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
