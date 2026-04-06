"use client"
import React, { useState } from "react"

interface Todo {
  name: string
  check: boolean
}

// WORKS WITH INDEX
// WORKS WITH SPREAD
export default function Todo() {
  const [inputValue, setInputValue] = useState<string>("")
  const [toDoList, setToDoList] = useState<Todo[]>([])
  const [doneList, setDoneList] = useState<Todo[]>([])

  function addToList() {
    const checkOut = toDoList.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    if (checkOut.length > 0) return
    const newItem = { name: inputValue, check: false }

    setToDoList([...toDoList, newItem])
  }

  function removeFromList(namey: string) {
    const checkOut = toDoList.filter((item) => item.name.toLowerCase() !== namey)
    setDoneList([...doneList, { name: namey, check: true }])
    setToDoList([...checkOut])
  }

  return (
    <div className="p-5 bg-blue-300 rounded-lg m-10">
      <h1 className="text-2xl font-bold">3- TodoList</h1>{" "}
      <div>
        <ul>
          {toDoList &&
            toDoList.map((item, index) => (
              <div key={index}>
                <li>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.check}
                      onChange={() => removeFromList(item.name)}
                      className="size-4  mr-1 bg-300-blue bg-blue-100 border-blue-300 rounded focus:ring-blue-500"
                    />
                    <span>{item.name}</span>
                  </div>
                </li>
              </div>
            ))}
        </ul>
        <div className="bg-blue-400 mt-5 rounded-3xl p-5">
          <ul>
            {doneList.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <input
            className="p-2 m-2 rounded-3xl bg-blue-400"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="p-2 m-2 rounded-3xl bg-blue-400 border border-cyan-600"
            onClick={() => addToList()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
