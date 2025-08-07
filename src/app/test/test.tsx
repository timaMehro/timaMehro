import React, {  useState } from "react"
import TestingTypesBox from "../TestingTypesBox"
import TestMatter from "./TestingMaters"
import TestingMatcherCategories from "../TestingMatcherCategories"

const subjects = [
  {
    id: 1,
    title: "Type of Tests",
    description: "Different Testing Types for Frontend Applications",
    color: "blue",
    children: <TestingTypesBox />,
  },
  {
    id: 2,
    title: "Why testing is matters",
    description: "Understanding the Importance of Testing in frontend development",
    color: "green",
    children: <TestMatter />,
  },
  {
    id: 3,
    title: "Vitest matcher categories",
    description: "visualization of Vitest matchers grouped by category for easy reference",
    color: "green",
    children: <TestingMatcherCategories />,
  },
]

export default function Test() {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(() => {
    if (subjects.length === 0) return {}
    const firstId = `${subjects[0].id}-0`
    return { [firstId]: true }
  })

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-tr  px-4 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400  tracking-wide animate-fade-in">
          Test Mastery Hub
        </h1>

        {/* Articles Section */}
        <section id="articles">
          <h2 className="md:text-3xl  text-sm font-bold text-purple-300 md:mb-12  mb-6 text-center animate-fade-in delay-200">
            Get Into Testing and Pick What You Like
          </h2>

          <div className="">
            <h3 className="md:text-2xl font-bold text-blue-100 md:mb-4">Why Frontend Testing Matters</h3>

            <p className="text-white/80 mb-6">
              Testing helps keep your frontend code solid by catching bugs, edge cases, and weird
              scenarios early. It makes your code cleaner, your changes safer, and even doubles as
              handy documentation.
            </p>
            {subjects.map((subject, idx) => (
              <div key={subject.id} id={subject.id.toString()}>
                <div>
                  {/* Accordion */}
                  <div className="space-y-2 text-white/80 mb-6">
                    <div key={idx} className="border border-white/20 rounded-xl overflow-hidden">
                      <button
                        className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition flex justify-between items-center"
                        onClick={() => toggleAccordion(`${subject.id}-${idx}`)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold">{subject.title}</span>
                          <span className="hidden  md:inline text-sm text-gray-400">{subject.description}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openAccordions[`${subject.id}-${idx}`] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openAccordions[`${subject.id}-${idx}`] && (
                        <div className="px-4 py-2 bg-white/5 text-white/70">{subject.children}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
          }
        `}
      </style>
    </main>
  )
}
