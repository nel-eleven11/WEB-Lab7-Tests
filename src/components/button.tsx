import React from 'react'

interface ButtonProps {
  label: string
  onClick: (value: string) => void
  highlighted: boolean
}

const Button: React.FC<ButtonProps> = ({ label, onClick, highlighted }) => {
  return (
    <button
      className={`text-4xl bg-gray-300 hover:bg-gray-400 rounded p-2 ${highlighted ? 'bg-gray-500' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}

export default Button
