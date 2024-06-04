'use client'
import React from 'react';
import Calculator from '../components/calculator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-10">Calculadora</h1>
      <Calculator />
    </main>
  );
}
