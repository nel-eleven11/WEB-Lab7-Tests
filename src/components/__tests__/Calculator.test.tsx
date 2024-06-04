import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../calculator'

test('renders Calculator component', () => {
  render(<Calculator />)
  const displayElement = screen.getByRole('textbox', { name: '' })
  expect(displayElement).toBeInTheDocument()
})

test('performs addition correctly', () => {
  render(<Calculator />)
  
  fireEvent.click(screen.getByText(/1/i))
  fireEvent.click(screen.getByText(/\+/i))
  fireEvent.click(screen.getByText(/2/i))
  fireEvent.click(screen.getByText(/=/i))

  const resultElement = screen.getByRole('textbox', { name: '' })
  expect(resultElement).toHaveValue('3')
})

test('displays error for large numbers', () => {
  render(<Calculator />)
  
  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByText(/9/i))
  }
  fireEvent.click(screen.getByText(/=/i))

  const resultElement = screen.getByRole('textbox', { name: '' })
  expect(resultElement).toHaveValue('ERROR')
})
