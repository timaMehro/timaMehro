"use client"
import Image from "next/image"
import { useState } from "react"
import tima from "/public/tima003.png"

export default function Home02() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "#home", color: "text-indigo-300" },
    { label: "Articles", href: "#articles", color: "text-pink-300" },
    { label: "Books", href: "#books", color: "text-yellow-300" },
    { label: "Lifestyle", href: "#lifestyle", color: "text-green-300" },
    { label: "Photography", href: "#Photography", color: "text-purple-300" },
  ]

  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-60 py-12 font-[family-name:var(--font-geist-sans)]">
      {/* Burger Menu */}
      <div className="relative z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-[#B57EDC] text-xl font-bold">
            <Image
              src="/finalLogo02.png"
              alt="Tima Mehro Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
            Tima Mehro
          </h1>
          <button
            className="flex flex-col gap-1.5 group p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-pink-400 rounded group-hover:bg-pink-300 transition" />
            <span className="w-6 h-0.5 bg-yellow-400 rounded group-hover:bg-yellow-300 transition" />
            <span className="w-6 h-0.5 bg-indigo-400 rounded group-hover:bg-indigo-300 transition" />
            <span className="w-6 h-0.5 bg-green-400 rounded group-hover:bg-green-300 transition" />
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute top-12 right-0 bg-gray-900 border border-gray-700 rounded-md shadow-xl w-56 p-4 space-y-4 animate-fade-in-up">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block text-lg font-medium ${item.color} hover:underline transition`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Header Section */}
      <div className="flex gap-8 mt-10 flex-wrap md:flex-nowrap">
        <div>
          <Image
            src={tima}
            alt="Tima Mehro"
            // className=" relative overflow-hidden border-4 border-pink-400 animated-blob object-cover "
            // className="brightness-75 rounded-tl-[3rem] rounded-tr-[1rem] rounded-br-[2.5rem] rounded-bl-[4rem]
            //  md:w-64 md:h-64 object-cover shadow-xl border-[6px] border-purple-600"
            className="brightness-50 rounded-br-2xl  rounded-bl-4xl  rounded-tl-2xl rounded-tr-4xl md:w-64 md:h-64 object-cover shadow-lg border-4 border-indigo-500 animated-blob"
            width={56}
            height={56}
            priority
          />
        </div>

        <header className="mb-16 text-left animate-fade-in" id="home">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-400 mb-2 hover:text-indigo-200 transition-all duration-700">
            Tima Mehro
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Chermside, Brisbane, Australia |{" "}
            <a href="mailto:Timamehro@gmail.com" className="text-blue-400 hover:underline">
              Timamehro@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/TimaMehro"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/TimaMehro
            </a>
          </p>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mt-4">Frontend Developer</h2>
        </header>
      </div>

      {/* Summary */}
      <section className="mb-16 animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Summary</h3>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          Detail-oriented, performance-driven Frontend Developer with 8+ years’ experience building
          responsive, accessible web applications for high-traffic platforms...
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-16 animate-fade-in-up [animation-delay:0.2s]">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
          <div>
            <p>
              <strong>Languages & Frameworks:</strong> JavaScript, TypeScript, React 19...
            </p>
            <p>
              <strong>Styling:</strong> Tailwind CSS, Ant Design...
            </p>
            <p>
              <strong>Design:</strong> Figma, Photoshop
            </p>
          </div>
          <div>
            <p>
              <strong>Tools & Testing:</strong> Webpack, Vitest...
            </p>
            <p>
              <strong>API & Performance:</strong> Mapbox, REST APIs...
            </p>
            <p>
              <strong>Backend:</strong> C#, ASP.NET Core...
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16 animate-fade-in-up [animation-delay:0.3s]">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Professional Experience</h3>
        <div className="space-y-6">
          <div className="p-4 border-l-4 border-indigo-500 bg-gray-800 shadow-md rounded-md">
            <h4 className="font-bold text-lg text-white">Betsecure | Front End Web Developer</h4>
            <p className="italic text-sm text-gray-400">QLD, Australia • 2022 – Present</p>
          </div>
          <div className="p-4 border-l-4 border-indigo-500 bg-gray-800 shadow-md rounded-md">
            <h4 className="font-bold text-lg text-white">Kidsoft | Front End Web Developer</h4>
            <p className="italic text-sm text-gray-400">QLD, Australia • 2020 – 2022</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20 animate-fade-in-up [animation-delay:0.5s]">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Education & Certifications</h3>
        <div className="grid gap-4 text-gray-300">
          <p>
            <strong>B.Sc. Computer Science:</strong> Shomal University, Iran
          </p>
          <p>
            <strong>Associate Degree:</strong> Qom University, Iran
          </p>
          <p>
            <strong>Diploma in Graphic Design:</strong> Graphic Uni of Applied Science
          </p>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="mb-20 animate-fade-in-up [animation-delay:0.6s]">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* React */}
          <div
            id="react"
            className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-pink-500"
          >
            <h4 className="text-xl font-bold mb-2 text-pink-300">React</h4>
            <ul className="text-gray-300 space-y-2">
              <li>⚛️ Understanding React Server Components</li>
              <li>⚛️ Performance Tips with useMemo</li>
              <li>⚛️ Custom Hooks You Should Know</li>
            </ul>
          </div>

          {/* CSS */}
          <div
            id="css"
            className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-yellow-500"
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">CSS</h4>
            <ul className="text-gray-300 space-y-2">
              <li>🎨 Modern Layouts with CSS Grid</li>
              <li>🎨 Mastering Tailwind Responsiveness</li>
              <li>🎨 Animations with Keyframes & Transitions</li>
            </ul>
          </div>

          {/* JavaScript */}
          <div
            id="javascript"
            className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500"
          >
            <h4 className="text-xl font-bold mb-2 text-green-300">JavaScript</h4>
            <ul className="text-gray-300 space-y-2">
              <li>📜 Event Loop Deep Dive</li>
              <li>📜 Closures & Scope Demystified</li>
              <li>📜 Writing Clean ES6 Code</li>
            </ul>
          </div>

          {/* Next.js */}
          <div
            id="nextjs"
            className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500"
          >
            <h4 className="text-xl font-bold mb-2 text-purple-300">Next.js</h4>
            <ul className="text-gray-300 space-y-2">
              <li>🚀 App Router vs Pages Router</li>
              <li>🚀 Dynamic Routing in Next 13+</li>
              <li>🚀 SEO Optimization Tips</li>
            </ul>
          </div>

          {/* TypeScript */}
          <div
            id="typescript"
            className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500"
          >
            <h4 className="text-xl font-bold mb-2 text-orange-300">TypeScript</h4>
            <ul className="text-gray-300 space-y-2">
              <li>🔒 Type Safety in React</li>
              <li>🔒 Advanced Types: Utility Types</li>
              <li>🔒 Handling API Types</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        Built with ❤️ by Tima Mehro • Last updated 2025
      </footer>
    </main>
  )
}
