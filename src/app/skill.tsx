const skillCategories = [
  {
    label: "Languages & Frameworks",
    icon: "{ }",
    skills: ["JavaScript (ES6+)", "TypeScript", "React 19", "Next.js 15", "Vue.js", "Aurelia"],
  },
  {
    label: "Styling",
    icon: "\u2728",
    skills: ["Tailwind CSS 4", "Ant Design", "Less", "Bootstrap", "CSS3", "HTML5"],
  },
  {
    label: "Design",
    icon: "\u25B3",
    skills: ["Figma", "Photoshop"],
  },
  {
    label: "Tools & Testing",
    icon: "\u2713",
    skills: ["Webpack", "Vitest", "Storybook 8", "React Testing Library", "Git"],
  },
  {
    label: "API & Performance",
    icon: "\u21C6",
    skills: ["Mapbox", "REST APIs", "SWR", "Lazy Loading"],
  },
  {
    label: "Backend",
    icon: "\u25A0",
    skills: ["C#", "ASP.NET Core", "SQL Server", "MySQL"],
  },
]

export default function Skills() {
  return (
    <section className="animate-fade-in-up [animation-delay:0.2s] mt-14">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Technical Skills
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="group p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-indigo-400 text-sm font-mono">{cat.icon}</span>
              <h4 className="text-sm font-semibold text-white">{cat.label}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1
                             text-xs text-gray-300 transition-colors duration-200
                             group-hover:border-indigo-500/20 group-hover:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
