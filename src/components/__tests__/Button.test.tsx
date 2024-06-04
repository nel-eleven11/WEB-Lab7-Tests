import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../button'

test('renders Button component', () => {
  render(<Button label="1" onClick={() => {}} highlighted={false} />)
  const buttonElement = screen.getByText(/1/i)
  expect(buttonElement).toBeInTheDocument()
})

test('Button click calls onClick handler', () => {
  const handleClick = jest.fn()
  render(<Button label="1" onClick={handleClick} highlighted={false} />)
  const buttonElement = screen.getByText(/1/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
