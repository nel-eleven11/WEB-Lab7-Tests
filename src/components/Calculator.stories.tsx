import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Calculator from './calculator'

export default {
  title: 'Components/Calculator',
  component: Calculator,
} as Meta

const Template: StoryFn = (args) => <Calculator {...args} />

export const Default = Template.bind({})
Default.args = {}
