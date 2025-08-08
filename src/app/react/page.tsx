"use client"
import Nav from "../Nav"
import ReactPage from "./rect"

export default function ReactArticle() {
  return (
    <main
      className="min-h-screen  bg-gradient-to-tr from-gray-900 via-indigo-900 to-black  md:w-full
       text-white font-[family-name:var(--font-geist-sans)] md:px-30  p-3 py-1"
    >
      <Nav />
      <ReactPage />
    </main>
  )
}
