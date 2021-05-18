import React, { HTMLAttributes, ReactNode } from 'react'
import { styled } from '../stitches.config'

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

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <>
      <button {...props}>
        <span>{variant}</span>
      </button>
    </>
  )
}

export default Button
