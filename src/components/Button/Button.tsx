import React, { FunctionComponent } from 'react'
import { styled } from 'stitches.config'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'primary',
}) => {
  const StyledButton = styled('button', {
    backgroundColor: '$red500',
    border: 'none',
    padding: '10px 20px',
  })

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}
