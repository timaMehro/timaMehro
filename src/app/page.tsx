"use client"
import Nav from "./Nav"
import ProfileTitle from "./profileTitle"
import Skills from "./skill"
import Summary from "./summary"

export default function Home() {
  return (
    <>
      {" "}
      <main
        className="min-h-screen bg-black  md:w-full
     text-white font-[family-name:var(--font-geist-sans)] md:px-60 md:py-8 px-8 py-5"
      >
        <Nav />
        <ProfileTitle />
        <Summary />
        <Skills />

        {/* <Article /> */}
        <footer className="text-center text-[10px] text-gray-500 mt-10 ">
          Built with <span className="inline-block text-red-500 text-[10px] leading-none">&#10084;</span> by Tima Mehro • Last updated 2025
        </footer>
      </main>
    </>
  )
}
