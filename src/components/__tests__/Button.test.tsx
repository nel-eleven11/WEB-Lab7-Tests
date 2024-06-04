import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../button'

test('renders Button component, ensuring the label is correct', () => {
  render(<Button label="1" onClick={() => {}} />)
  const buttonElement = screen.getByText(/1/i)
  expect(buttonElement).toBeDefined()
});

test('Button click calls onClick handler', () => {
  const handleClick = jest.fn()
  render(<Button label="1" onClick={handleClick} />)
  const buttonElement = screen.getByText(/1/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
