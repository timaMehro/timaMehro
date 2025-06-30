import React from "react"
import { subjects } from "./data"
import ArticleList from "./articleList"

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-12">
          Frontend Learning Center
        </h1>

        {/* Articles Section */}
        <section id="articles" className="animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-8">Articles by Subject</h2>
          <div className="flex flex-wrap gap-8">
            {subjects.map(({ id, title, color, articles }) => (
              <div
                key={id}
                id={id.toString()}
                className={`
                  relative bg-gray-800 p-8 rounded-2xl shadow-lg border-l-8 border-${color}-500
                  hover:bg-gradient-to-r hover:from-${color}-700 hover:to-${color}-900
                  hover:scale-105 hover:shadow-2xl  transition-colors duration-300
                  cursor-pointer
                `}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* ArticleList with text colors adjusted */}
                  <ArticleList color={color} title={title} articles={articles} />
                  <div className="mt-6 flex justify-end">
                    <button
                      className={`
                        text-xs font-semibold px-4 py-2 rounded-full border border-${color}-300
                        text-${color}-300 hover:bg-${color}-300 hover:text-black transition-colors duration-200
                      `}
                    >
                      More
                    </button>
                  </div>
                </div>

                {/* Decorative glow - absolute */}
                <div
                  className={`
                    pointer-events-none absolute inset-0 rounded-2xl opacity-0
                    bg-gradient-to-tr from-pink-400/40 via-yellow-300/40 to-cyan-300/40
                    filter blur-3xl
                    transition-opacity duration-300
                    hover:opacity-100
                  `}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
