// DEPENDENCY
import { ComponentProps, ElementType } from 'react'

// STYLE
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$2xl',

  fontSize: '$base',
  fontWeight: '$bold',
  fontFamily: '$sans',
  gap: '$2',

  cursor: 'pointer',

  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:disabled': {
    userSelect: 'none',
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$yellow400',
        color: '$gray950',

        '&:not(:disabled):is(:hover, :focus-visible)': {
          backgroundColor: '$yellow200',
        },
      },

      neutral: {
        color: '$gray100',

        '&:not(:disabled):is(:hover, :focus-visible)': {
          color: '$gray200',
        },
      },
    },

    outlined: {
      true: {
        backgroundColor: '$transparent',

        borderColor: '$currentColor',
        borderWidth: '2px',
        borderStyle: 'solid',
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        borderRadius: '$xl',

        paddingBlock: '$1',
        paddingInline: '$3',

        svg: {
          width: '$4',
          height: '$4',
        },
      },

      md: {
        paddingBlock: '$2',
        paddingInline: '$4',
      },

      lg: {
        fontSize: '$lg',
        borderRadius: '$3xl',

        paddingBlock: '$3',
        paddingInline: '$5',

        svg: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    outlined: false,
    size: 'md',
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: '$yellow400',
        backgroundColor: '$transparent',

        '&:not(:disabled):is(:hover, :focus-visible)': {
          color: '$yellow200',
          backgroundColor: '$transparent',
        },
      },
    },
  ],
})

// TYPE
export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

Button.displayName = 'Button'
