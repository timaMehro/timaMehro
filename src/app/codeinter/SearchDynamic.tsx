"use client"

import React, { useEffect, useState } from "react"

export default function SearchDynamic() {
  const [text, setText] = useState("search")
  const [filteredList, setFilteredList] = useState<string[]>([])

  useEffect(() => {
    const listOfStack = ["React", "Next.js", "JavaScript", "TypeScript", "CSS", "HTML"]

    const handler = setTimeout(() => {
      const filteredList = listOfStack.filter((items) => {
        return items.toLowerCase().includes(text.toLowerCase())
      })
      setFilteredList(filteredList)
    }, 500)

    return () => clearTimeout(handler)

  }, [text])

  return (
    <div className="p-5 bg-blue-300 rounded-lg m-10">
      <h1 className="text-2xl font-bold">2- DynamicSearch</h1>
      <input
        value={text}
        className="p-2 m-2 rounded-3xl bg-blue-400"
        onChange={(e) => setText(e.target.value)}
        onClick={() => setText("")}
      />
      <ul>
        {filteredList.length > 0 && filteredList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
