import React, { FunctionComponent } from 'react'
import { styled } from 'stitches.config'

const StyledButton = styled('button', {
  backgroundColor: '$red500',
  border: 'none',
  padding: '10px 20px',
})

interface Props {}

export const Button: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default Button
