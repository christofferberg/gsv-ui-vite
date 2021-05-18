import React from 'react'
import { Button, ButtonOwnProps } from './Button'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Variant',
      type: 'inline-radio',
      defaultValue: 'primary',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      description: 'Size',
      type: 'inline-radio',
      defaultValue: 'medium',
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

const Template: Story = (props) => <Button {...props}>Hello world</Button>

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' } as ButtonOwnProps

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }
