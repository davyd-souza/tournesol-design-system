// COMPONENT
import * as Avatar from '@radix-ui/react-avatar'

// STYLE
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  width: '$12',
  height: '$12',

  display: 'inline-block',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  backgroundColor: '$gray600',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$yellow400',

  svg: {
    width: '$6',
    height: '$6',
  },
})
