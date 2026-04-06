export default function WorkExperience() {
  const jobs = [
    {
      company: "Autoguru",
      role: "Front End Developer",
      location: "QLD, Australia",
      period: "Oct 2025 – Present",
      current: true,
    },
    {
      company: "Betsecure",
      role: "Front End Web Developer",
      location: "QLD, Australia",
      period: "2022 – 2025",
    },
    {
      company: "Kidsoft",
      role: "Front End Web Developer",
      location: "QLD, Australia",
      period: "2020 – 2022",
    },
    {
      company: "Pay Advantage",
      role: "Front End Developer",
      location: "QLD, Australia",
      period: "Mar 2019 – Sep 2019",
    },
    {
      company: "Desygner",
      role: "Front End Developer",
      location: "QLD, Australia",
      period: "2018 – Jan 2019",
    },
  ]

  return (
    <section className="mt-14 animate-fade-in-up [animation-delay:0.4s]">
      <div className="flex items-center gap-3 mb-12">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Professional Experience
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
      </div>

      <div className="relative overflow-x-auto no-scrollbar">
        {/* Timeline horizontal line */}
        <div className="absolute top-[11px] left-0 right-0 h-px bg-indigo-500/30 z-0" />
        {/* Active segment glow for current role */}
        <div className="absolute top-[10px] left-0 w-1/5 h-[3px] bg-gradient-to-r from-emerald-400 to-indigo-500/50 z-0 rounded-full" />

        <div className="grid grid-cols-5 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="relative z-10 mb-6">
                {job.current ? (
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-emerald-400/20 animate-pulse" />
                    <div className="w-[23px] h-[23px] rounded-full bg-emerald-400 ring-4 ring-black" />
                  </div>
                ) : (
                  <div className="w-[23px] h-[23px] rounded-full border-2 border-indigo-500/40 bg-black group-hover:border-indigo-400 transition-colors duration-300" />
                )}
              </div>

              {/* Content */}
              <div>
                <span className="text-[11px] font-mono text-gray-500 group-hover:text-indigo-400/70 transition-colors duration-300">
                  {job.period}
                </span>
                <h4 className="text-base font-semibold text-white mt-1.5 group-hover:text-indigo-300 transition-colors duration-300">
                  {job.company}
                </h4>
                <p className="text-sm text-gray-400 mt-0.5">{job.role}</p>
                <p className="text-xs text-gray-600 mt-0.5">{job.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
