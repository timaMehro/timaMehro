"use client"
import Nav from "../Nav"
import SysDesign from "./SysDesign"

export default function SystemDesign() {
  return (
    <main
      className="min-h-screen  bg-gradient-to-tr from-gray-900 via-indigo-900 to-black  md:w-full
       text-white font-[family-name:var(--font-geist-sans)] md:px-30  p-3 py-1"
    >
      <Nav />
       <SysDesign />
    </main>
  )
}
