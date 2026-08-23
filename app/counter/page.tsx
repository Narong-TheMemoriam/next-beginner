"use client";

import { useState } from "react";

export default function CounterPage() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    const onDecrement = () => {
        setCount(count - 1);
    }

    const onIncrement = () => {
        setCount(count + 1);
    }
    const Reset = () => {
        setCount(0);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-6">
      <h1>Counter Page</h1>
      <h2>Count: {count}</h2>
        <button
         onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={Reset}>Reset</button>
    </div>
  );
}