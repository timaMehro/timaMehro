"use client"
import Test from "./test"
import Nav from "../Nav"

export default function TestArticle() {
  return (
    <>
      <main
        className="min-h-screen  bg-gradient-to-tr from-gray-900 via-indigo-900 to-black  md:w-full
     text-white font-[family-name:var(--font-geist-sans)] md:px-30  p-3 py-1"
      >
        {/* <main className=" bg-gradient-to-tr from-gray-900 via-indigo-900 to-black px-6 py-12 text-white"> */}

        <Nav />
        <Test />
      </main>
    </>
  )
}
