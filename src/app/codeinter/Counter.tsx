"use client"
import React from "react"

export default function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="p-5 bg-blue-300 rounded-lg m-10">
      <h1 className="text-2xl font-bold">1- Counter</h1>
      <button
        className="bg-blue-400 rotate-6 p-2 m-2 rounded-3xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-blue-400 -rotate-6 p-2 m-2 rounded-3xl"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <div className="ml-4 font-semibold">Number:{count}</div>
    </div>
  )
}
