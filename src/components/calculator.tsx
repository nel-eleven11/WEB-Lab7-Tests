import React, { useState } from 'react';
import Button from './button';

const calculator: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [operation, setOperation] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalOperation = eval(operation).toString();
        setResult(evalOperation);
        setOperation(evalOperation);
      } catch (error) {
        setResult('error');
      }
    } else if (value === 'C') {
      setResult('');
      setOperation('');
    } else {
      setOperation((prevOperation) => prevOperation + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <input
        type="text"
        className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
        value={operation}
        readOnly
      />
      <input
        type="text"
        className="w-full text-4xl font-bold mb-4 focus-outline"
        value={result}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default calculator;
