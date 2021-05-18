import React, { HTMLAttributes, ReactNode } from 'react'
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
  children: ReactNode
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <>
      <StyledButton variant={variant} {...props}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button
