import React from "react"

const subjects = [
  {
    id: 1,
    title: "Basic React",
    color: "green",
    articles: ["JSX Basics", "Components", "Props & State"],
  },
  {
    id: 2,
    title: "Intermediate React",
    color: "yellow",
    articles: ["Hooks", "Context API", "React Router"],
  },
  {
    id: 3,
    title: "Advanced React",
    color: "purple",
    articles: ["Performance Optimization", "Server-Side Rendering", "Testing"],
  },
]

export default function ReactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-indigo-900 to-black px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-16 tracking-wide animate-fade-in">
          React Mastery Hub
        </h1>
        {/* Articles Section */}
        <section id="articles">
          <h2 className="text-3xl font-bold text-purple-300 mb-12 text-center animate-fade-in delay-200">
            Dive Into React — Choose Your Path
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                id={subject.id.toString()}
                className={`
                  rounded-3xl p-8 shadow-xl transition-transform duration-300
                  hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
                  animate-fade-in-up
                   ring-1 ring-${subject.color}-500

                `}
              >
                <div>
                  <h3 className={`text-2xl font-bold text-${subject.color}-100 mb-4`}>
                    {subject.title}
                  </h3>
                  <p className="text-white/80 mb-6">
                    Explore key React topics and deepen your knowledge.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    {subject.articles.map((article, idx) => (
                      <li key={idx}>{article}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`
                    mt-8 self-start rounded-full px-5 py-2 border border-white/60
                    text-white font-semibold hover:bg-white hover:text-black
                    transition-all duration-200
                  `}
                >
                  Learn More
                </button>
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
