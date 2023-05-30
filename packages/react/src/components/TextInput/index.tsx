// DEPENDENCY
import { ComponentProps } from 'react'

// STYLE
import { Input, Prefix, TextInputRoot } from './styles'

// TYPE
export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputRoot>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputRoot>
  )
}

TextInput.displayName = 'TextInput'
