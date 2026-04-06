"use client"
import React from "react"

const input = [
  ["User_001", 0, 1000],
  ["User_002", 500, 2000],
  ["User_003", 2500, 3000],
  ["User_004", 400, 1400],
]

export default function ConcurrentLearners() {
  return <div>{input}</div>
}
