// DEPENDENCY
import { ComponentProps } from 'react'

// STYLE
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

// ASSET
import { User } from '@phosphor-icons/react'

// TYPE
export type AvatarProps = ComponentProps<typeof AvatarImage> & {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
