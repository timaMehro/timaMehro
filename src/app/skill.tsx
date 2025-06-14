export default function Skills() {
  return (
    <>
      <section className="animate-fade-in-up [animation-delay:0.2s] mt-12">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Technical Skills</h3>
        <div className="gap-6 text-gray-400 leading-relaxed text-[15px]">
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-white">Languages &amp; Frameworks:</span>{" "}
              JavaScript (ES6+), TypeScript, React 19, Next.js 15, Vue.js, Aurelia
            </p>
            <p>
              <span className="font-semibold text-white">Styling:</span> Tailwind CSS 4, Ant Design,
              Less, Bootstrap, CSS3, HTML5
            </p>
            <p>
              <span className="font-semibold text-white">Design:</span> Figma, Photoshop
            </p>
            <p>
              <span className="font-semibold text-white">Tools &amp; Testing:</span> Webpack,
              Vitest, Storybook 8, React Testing Library, Git
            </p>
            <p>
              <span className="font-semibold text-white">API &amp; Performance:</span> Mapbox, REST
              APIs, SWR, lazy loading
            </p>
            <p>
              <span className="font-semibold text-white">Backend:</span> C#, ASP.NET Core, SQL
              Server, MySQL
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
