// DEPENDENCY
import { ComponentProps, ElementType } from 'react'

// STYLE
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',

  backgroundColor: '$gray800',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray600',
  borderRadius: '$2xl',
})

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
