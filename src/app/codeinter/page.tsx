"use client"
import React from "react"
import Counter from "./Counter"
import SearchDynamic from "./SearchDynamic"
import Todo from "./Todo"
import Recursive from "./recursive"
import DebounceAndThrottle from "./DebounceAndThrottle"

export default function Codeinter() {
  return (
    <div>
      <DebounceAndThrottle />
      {/* <GameTest /> */}

      {/* <LabelFilter /> */}
      <Counter />
      <SearchDynamic />
      <Todo />
      <Recursive />
    </div>
  )
}
