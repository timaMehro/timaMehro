"use client"
import Articles from "./articles"
import Nav from "./Nav"
import ProfileTitle from "./profileTitle"
import Skills from "./skill"
import Summary from "./summary"
import WorkExperience from "./workExperience"
import WorkExperienceMobile from "./workExperienceMobile"

export default function Home() {
  return (
    <>
      {" "}
      <main
        className="min-h-screen bg-black  md:w-full
     text-white font-[family-name:var(--font-geist-sans)] md:px-30 px-8 py-1"
      >
        <Nav />
        <ProfileTitle />
        <Summary />
        <Skills />
        <div className="hidden md:block">
          <WorkExperience />
        </div>
        <div className="md:hidden">
          <WorkExperienceMobile />
        </div>

        <Articles />
        <footer className="text-center text-[10px] text-gray-500 mt-10 ">
          Built with{" "}
          <span className="inline-block text-red-500 text-[10px] leading-none">&#10084;</span> by
          Tima Mehro • Last updated 2025
        </footer>
      </main>
    </>
  )
}
