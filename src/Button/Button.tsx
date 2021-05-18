import React, { HTMLAttributes } from 'react'
import { styled } from '../stitches.config'

const StyledButton = styled('button', {
  transition: 'all 150ms ease',
  display: 'inline-flex',
  border: 'none',
  borderRadius: 4,
  color: 'white',
  padding: '10px 20px',
  alignItems: 'center',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$red500',
        '&:hover': {
          backgroundColor: '$red700',
        },
      },
      secondary: {
        backgroundColor: '$purple500',
        '&:hover': {
          backgroundColor: '$purple800',
        },
      },
    },
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      medium: {
        fontSize: '16px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
      large: {
        fontSize: '15px',
        height: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
  },
})

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      <StyledButton variant={variant} size={size} {...props}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button
