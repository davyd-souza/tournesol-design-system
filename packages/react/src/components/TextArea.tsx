// STYLE
import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  boxSizing: 'border-box',
  paddingBlock: '$2',
  paddingInline: '$4',

  backgroundColor: '$gray900',

  fontFamily: '$sans',
  fontSize: '$base',
  color: '$white',
  fontWeight: '$normal',

  resize: 'vertical',

  minHeight: 80,

  borderRadius: '$2xl',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '$gray900',

  outline: '$transparent',

  transition: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  '&:focus-visible': {
    borderColor: '$yellow400',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

// TYPE
export type TextAreaProps = ComponentProps<typeof TextArea> & {}
