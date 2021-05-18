import React, { FunctionComponent, HTMLAttributes } from 'react'
import { styled } from 'stitches.config'

const StyledButton = styled('button', {
  border: 'none',
  borderRadius: 4,
  color: 'white',
  padding: '10px 20px',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$red500',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      secondary: {
        backgroundColor: 'blueviolet',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
})

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'primary',
}) => {
  return (
    <>
      <StyledButton variant={variant}>{children}</StyledButton>
    </>
  )
}
