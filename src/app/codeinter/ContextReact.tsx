"use client"
import React, { createContext, ReactNode, useState } from "react"

// type Theme = "light" | "dark"

// // Create
// const ThemeContext = createContext<Theme>("light")

interface Them2 {
  theme: string
  toggleTheme: () => void
}

const mySecondThem = createContext<Them2>({
  theme: "light",
  toggleTheme: () => {},
})

// provide

interface Props {
  children: ReactNode
}

export default function ContextTest({ children }: Props) {
  const [theme, setTheme] = useState<Them2["theme"]>("light")

  function toggleTheme() {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"))
  }

  return (
    <mySecondThem.Provider value={{ theme, toggleTheme }}>
      <> {children}</>
    </mySecondThem.Provider>
  )
}
