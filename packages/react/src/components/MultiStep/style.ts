// COMPONENT
import { Text } from '../Text'

// STYLE
// import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const MultiStepRoot = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$sm',
  backgroundColor: '$gray600',

  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
