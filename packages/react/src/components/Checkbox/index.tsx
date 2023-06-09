// DEPENDENCY
import { ComponentProps } from 'react'

// STYLE
import { CheckboxIndicator, CheckboxRoot } from './styles'

// ASSET
import { Check } from '@phosphor-icons/react'

// TYPE
export type CheckboxProps = ComponentProps<typeof CheckboxRoot> & {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}

Checkbox.displayName = 'Checkbox'
