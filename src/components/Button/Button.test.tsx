import React from 'react'
import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  it('renders correctly', () => {
    render(<Button size="medium">Hello world</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
