// STYLE
import { styled } from '../../styles'

export const TextInputRoot = styled('div', {
  boxSizing: 'border-box',
  paddingBlock: '$2',
  paddingInline: '$4',

  backgroundColor: '$gray900',

  borderRadius: '$2xl',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '$gray900',

  display: 'flex',
  alignItems: 'baseline',

  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  '&:has(input:focus-visible)': {
    borderColor: '$yellow400',
  },

  '&:has(input:disabled)': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$sans',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$normal',
})

export const Input = styled('input', {
  width: '100%',
  backgroundColor: '$transparent',
  border: 0,

  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$normal',
  color: '$white',

  outline: '$transparent',

  '&:placeholder': {
    color: '$gray400',
  },
})
