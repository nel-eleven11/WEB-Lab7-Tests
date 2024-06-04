import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

test('renders Calculator component', () => {
  render(<Calculator />);
  const inputElements = screen.getAllByRole('textbox');
  expect(inputElements.length).toBe(2); // Verifica que hay dos inputs
});

test('performs addition correctly', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText(/1/i));
  fireEvent.click(screen.getByText(/\+/i));
  fireEvent.click(screen.getByText(/2/i));
  fireEvent.click(screen.getByText(/=/i));

  const resultElement = screen.getAllByRole('textbox')[1] as HTMLInputElement;
  expect(resultElement.value).toBe('3'); // Verifica el valor del resultado
});

test('clears display when C is pressed', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText(/1/i));
  fireEvent.click(screen.getByText(/C/i));

  const displayElement = screen.getAllByRole('textbox')[0] as HTMLInputElement;
  expect(displayElement.value).toBe(''); // Verifica que el display esté vacío
});
