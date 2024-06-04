import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // Importa jest-dom para extender los matchers
import Calculator from '../calculator'

test('renders Calculator component', () => {
  render(<Calculator />)
  const displayElement = screen.getAllByRole('textbox')[0]
  expect(displayElement).toBeInTheDocument()
})

test('performs addition correctly', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByText(/1/i))
  fireEvent.click(screen.getByText(/^\+$/i))
  fireEvent.click(screen.getByText(/2/i))
  fireEvent.click(screen.getByText(/=/i))

  const resultElement = screen.getAllByRole('textbox')[1]
  expect(resultElement).toHaveValue('3')
})

test('displays error for large numbers', () => {
  render(<Calculator />)

  for (let i = 0; i < 9; i++) {
    fireEvent.click(screen.getByText(/9/i))
  }
  fireEvent.click(screen.getByText(/=/i))

  const resultElement = screen.getAllByRole('textbox')[1]
  expect(resultElement).toHaveValue('ERROR')
})

test('clears display when C is pressed', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByText(/1/i))
  fireEvent.click(screen.getByText(/C/i))

  const displayElement = screen.getAllByRole('textbox')[0]
  expect(displayElement).toHaveValue('')
})

test('toggles sign when +/- is pressed', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByText(/1/i))
  fireEvent.click(screen.getByText(/\+\/-/i))

  const displayElement = screen.getAllByRole('textbox')[0]
  expect(displayElement).toHaveValue('-1')
  
  fireEvent.click(screen.getByText(/\+\/-/i))
  expect(displayElement).toHaveValue('1')
})
