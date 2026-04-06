export default function WorkExperienceMobile() {
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
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Professional Experience
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
      </div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-px bg-indigo-500/30" />

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="relative flex items-start gap-5">
              {/* Dot */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                {job.current ? (
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-emerald-400/20 animate-pulse" />
                    <div className="w-[23px] h-[23px] rounded-full bg-emerald-400 ring-4 ring-black" />
                  </div>
                ) : (
                  <div className="w-[23px] h-[23px] rounded-full border-2 border-indigo-500/40 bg-black" />
                )}
              </div>

              {/* Content */}
              <div>
                <span className="text-[11px] font-mono text-gray-500">{job.period}</span>
                <h4 className="text-base font-semibold text-white mt-1">{job.company}</h4>
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
