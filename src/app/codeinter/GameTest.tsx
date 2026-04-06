"use client"
import React, { useEffect, useState } from "react"

export default function ReactionTest() {
  const [isBoxGreen, setIsBoxGreen] = useState(true)
  const [gameStatus, setGameStatus] = useState(false)
  const [counter, setCounter] = useState(0)
  const [showTime, setShowTime] = useState(15)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBoxGreen((isBoxGreen) => !isBoxGreen)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [isBoxGreen])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTime((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [showTime])

  useEffect(() => {
    if (counter === showTime) {
      setGameStatus(true)
    }
  }, [counter, showTime])

  function onclick() {
    setGameStatus(true)
  }

  function onClickBox() {
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="p-5 bg-blue-300 rounded-lg m-10">
      {gameStatus && (
        <>
          <p>Time Left:{showTime} </p>
          {counter}
        </>
      )}
      {!gameStatus && (
        <button onClick={() => onclick()} className="bg-blue-900 rounded-3xl p-2 m-2 text-white">
          {" "}
          start game
        </button>
      )}

      {gameStatus && (
        <>
          {!isBoxGreen && <div className="bg-red-400 size-32"></div>}
          {isBoxGreen && <div className="bg-green-400 size-32" onClick={() => onClickBox()}></div>}
        </>
      )}
    </div>
  )
}
