"use client"
import Articles from "./articles"
import Nav from "./Nav"
import ProfileTitle from "./profileTitle"
import Counter from "./codeinter/Counter"
import Skills from "./skill"
import Summary from "./summary"
import WorkExperience from "./workExperience"
import WorkExperienceMobile from "./workExperienceMobile"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
      {/* Top section with max-width container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-1">
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

        <div className="mt-14">
          <Articles />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Tima Mehro
          </p>
          <p className="text-xs text-gray-600">
            Built with{" "}
            <span className="text-red-500">&#10084;</span> using Next.js &amp;
            Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
