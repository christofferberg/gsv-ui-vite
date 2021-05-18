import React, { forwardRef } from 'react'
import { styled, CSS, StitchesVariants } from '../../stitches.config'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

const DEFAULT_TAG = 'button'

const StyledButton = styled(DEFAULT_TAG, {
  alignItems: 'center',
  border: 'none',
  borderRadius: '$2',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontSize: '$2',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,
  height: '$5',
  justifyContent: 'center',
  lineHeight: '1',
  px: '$2',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&:disabled': {
    pointerEvents: 'none',
    opacity: '0.4',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: 'white',
        backgroundColor: '$green800',
        '&:hover': {
          backgroundColor: '$green900',
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: '$purple800',
        '&:hover': {
          backgroundColor: '$purple900',
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
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

type ButtonCSSProp = { css?: CSS }
type ButtonVariants = StitchesVariants<typeof StyledButton>
export type ButtonOwnProps = ButtonCSSProp & ButtonVariants

type ButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ButtonOwnProps
>

export const Button = forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledButton {...props} ref={forwardedRef}>
    {children}
  </StyledButton>
)) as ButtonComponent

Button.toString = () => `.${StyledButton.className}`
