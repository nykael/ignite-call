import { Box, styled, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$4',
  marginTop: '$4',
  padding: '$4',

  '@media (max-width:600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ForAnnotation = styled('div', {
  marginTop: '$2',

  [` ${Text}`]: {
    color: '$gray400',
  },
})
