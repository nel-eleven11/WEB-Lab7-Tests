'use client'
import {useState} from "react"

export default function Home() {
  const [result, setResult] = useState<string>('')
  const [operation, setOperation] = useState<string>('')

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalOperation = eval(operation).toString()
        setResult(evalOperation)
        setOperation(evalOperation)
      } catch (error) {
        setResult('error')
      }
    } else if (value === 'C') {
      setResult('')
      setOperation('')
    } else {
      setOperation((prevOperation) => prevOperation + value)
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-10">Calculadora</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={operation}
          readOnly
        />
        <input type="text"
          className="w-full text-4xl font-bold mb-4 focus-outline"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="text-4xl bg-gray-300 hover:bg-gray-400 rounded p-2 rounded-lg"
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
