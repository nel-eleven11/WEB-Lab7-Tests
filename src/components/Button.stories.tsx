import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  onClick: () => console.log('Button clicked'),
}

export const WithNumber = Template.bind({})
WithNumber.args = {
  label: '1',
  onClick: () => console.log('Button 1 clicked'),
}
