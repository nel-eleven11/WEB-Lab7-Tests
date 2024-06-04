import React from 'react'

export interface ButtonProps {
  label: string
  onClick: (value: string) => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="text-4xl bg-gray-300 hover:bg-gray-400 rounded p-2 rounded-lg"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}

export default Button
