// COMPONENT
import * as Checkbox from '@radix-ui/react-checkbox'

// STYLE
import { styled, keyframes } from '../../styles'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',

  boxSizing: 'border-box',
  width: '$6',
  height: '$6',

  display: 'grid',
  placeItems: 'center',

  backgroundColor: '$gray900',

  borderRadius: '$lg',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '$gray900',

  lineHeight: 0,
  overflow: 'hidden',

  cursor: 'pointer',

  transition: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  '&[data-state="checked"]': {
    backgroundColor: '$yellow400',
    borderColor: '$yellow400',
  },

  '&:focus-visible': {
    borderColor: '$yellow400',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$gray950',

  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },
})
