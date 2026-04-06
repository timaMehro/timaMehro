"use client"
import React, { useState } from "react"
import { treeData, TreeNode } from "../data"

interface Pops {
  item: TreeNode
}

export default function Recursive() {
  const [isExpand, setIsexpand] = useState(false)

  function TreeExtendede({ subTree }) {
    return (
      <li key={subTree.name} className="pl-4">
        <p onClick={() => setIsexpand((isExpand) => !isExpand)}>{subTree.name}</p>

        {isExpand && subTree.subTree.length > 0 && (
          <ul className="list-disc">
            {subTree.subTree.map((item2, index2) => {
              return <TreeExtendede subTree={item2} key={item2.name} />
            })}
          </ul>
        )}
      </li>
    )
  }

  return (
    <div className="p-5 bg-blue-300 rounded-lg m-10">
      <h1 className="text-2xl font-bold">5- recursive</h1>

      <ul className="list-decimal">
        {treeData.map((item) => {
          return <TreeExtendede subTree={item} key={item.name} />
        })}
      </ul>
    </div>
  )
}
