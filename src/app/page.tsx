export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-indigo-50 px-6 sm:px-12 py-12 font-[family-name:var(--font-geist-sans)] text-gray-900">
      {/* Header */}
      <header className="mb-16 text-center animate-fade-in">
        <a></a>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-700 mb-2 transition-all duration-700 hover:text-indigo-900">
          Tima Mehro
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Chermside, Brisbane, Australia |{" "}
          <a href="mailto:Timamehro@gmail.com" className="text-blue-600 hover:underline">
            Timamehro@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/TimaMehro"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/TimaMehro
          </a>
        </p>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mt-4">Frontend Developer</h2>
      </header>

      <section className="mb-16 animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Summary</h3>
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          Detail-oriented, performance-driven Frontend Developer with 8+ years’ experience building
          responsive, accessible web applications for high-traffic platforms. Expert in modern
          JavaScript frameworks (React, Next.js, Vue), TypeScript, and solutions backed by a solid
          foundation in UI/UX, API integration, and automated testing. Proven ability to collaborate
          with cross-functional teams, optimize rendering performance, and deliver pixel-perfect
          interfaces that drive engagement and conversion.
        </p>
      </section>

      <section className="mb-16 animate-fade-in-up [animation-delay:0.2s]">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-800">
          <div>
            <p>
              <strong>Languages & Frameworks:</strong> JavaScript (ES6+), TypeScript, React 19,
              Next.js 15, Vue.js, Aurelia
            </p>
            <p>
              <strong>Styling:</strong> Tailwind CSS 4, Ant Design, Less, Bootstrap, CSS3, HTML5
            </p>
            <p>
              <strong>Design:</strong> Figma, Photoshop
            </p>
          </div>
          <div>
            <p>
              <strong>Tools & Testing:</strong> Webpack, Vitest, Storybook 8, React Testing Library,
              Git
            </p>
            <p>
              <strong>API & Performance:</strong> Mapbox, REST APIs, SWR, lazy loading
            </p>
            <p>
              <strong>Backend:</strong> C#, ASP.NET Core, SQL Server, MySQL
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 animate-fade-in-up [animation-delay:0.3s]">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Professional Experience</h3>
        <div className="space-y-6">
          <div className="p-4 border-l-4 border-indigo-500 bg-white shadow-md rounded-md">
            <h4 className="font-bold text-lg">Betsecure | Front End Web Developer</h4>
            <p className="italic text-sm text-gray-600">QLD, Australia • 2022 – Present</p>
          </div>
          <div className="p-4 border-l-4 border-indigo-500 bg-white shadow-md rounded-md">
            <h4 className="font-bold text-lg">Kidsoft | Front End Web Developer</h4>
            <p className="italic text-sm text-gray-600">QLD, Australia • 2020 – 2022</p>
          </div>
        </div>
      </section>

      <section className="mb-20 animate-fade-in-up [animation-delay:0.5s]">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Education & Certifications</h3>
        <div className="grid gap-4 text-gray-800">
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

      <footer className="text-center text-sm text-gray-500">
        Built with ❤️ by Tima Mehro • Last updated 2025
      </footer>
    </main>
  )
}
