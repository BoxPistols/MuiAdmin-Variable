import { styled } from '@mui/material/styles'
import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

export const Display1 = styled((props: TypographyProps) => {
  return <Typography {...props} />
})(() => ({
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: 'lineHeight.large',
  color: 'teal',
}))

export const Display2 = styled((props: TypographyProps) => {
  return <Typography {...props} />
})(() => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  lineHeight: 1.5,
  color: 'teal',
}))
