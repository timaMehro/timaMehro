export default function Article() {
  return (
    <>
      {/* Articles */}
      <section id="articles" className="mb-20 animate-fade-in-up [animation-delay:0.6s]">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card Template */}
          {[
            {
              id: "react",
              title: "React",
              color: "pink",
              articles: [
                "⚛️ Understanding React Server Components",
                "⚛️ Performance Tips with useMemo",
                "⚛️ Custom Hooks You Should Know",
              ],
            },
            {
              id: "css",
              title: "CSS",
              color: "yellow",
              articles: [
                "🎨 Modern Layouts with CSS Grid",
                "🎨 Mastering Tailwind Responsiveness",
                "🎨 Animations with Keyframes & Transitions",
              ],
            },
            {
              id: "javascript",
              title: "JavaScript",
              color: "green",
              articles: [
                "📜 Event Loop Deep Dive",
                "📜 Closures & Scope Demystified",
                "📜 Writing Clean ES6 Code",
              ],
            },
            {
              id: "nextjs",
              title: "Next.js",
              color: "purple",
              articles: [
                "🚀 App Router vs Pages Router",
                "🚀 Dynamic Routing in Next 13+",
                "🚀 SEO Optimization Tips",
              ],
            },
            {
              id: "typescript",
              title: "TypeScript",
              color: "orange",
              articles: [
                "🔒 Type Safety in React",
                "🔒 Advanced Types: Utility Types",
                "🔒 Handling API Types",
              ],
            },
            {
              id: "testing",
              title: "Testing",
              color: "cyan",
              articles: [
                "🧪 Writing Unit Tests with Vitest",
                "🧪 Testing React Components with RTL",
                "🧪 Mocking API Calls in Tests",
              ],
            },
          ].map(({ id, title, color, articles }) => (
            <div
              key={id}
              id={id}
              className={`relative group bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-${color}-500 overflow-hidden`}
            >
              {/* Animated pastel glow */}
              <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:rounded-xl before:blur-lg before:opacity-0 before:transition-all before:duration-500 group-hover:before:opacity-100 before:bg-gradient-to-tr before:from-pink-300/20 before:via-yellow-300/20 before:to-cyan-300/20" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h4 className={`text-xl font-bold text-${color}-300 mb-3`}>{title}</h4>
                  <ul className="text-gray-300 space-y-2">
                    {articles.map((article, idx) => (
                      <li key={idx}>{article}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    className={`text-xs font-medium px-3 py-1 rounded-full border border-${color}-300 text-${color}-300 hover:bg-${color}-300 hover:text-black transition`}
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
