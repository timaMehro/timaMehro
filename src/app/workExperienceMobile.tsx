export default function WorkExperienceMobile() {
  const jobs = [
    {
      company: "Betsecure",
      role: "Front End Web Developer",
      location: "QLD, Australia",
      period: "2022 – Present",
      current: true,
      isStart: true,
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
    <section className="mt-8">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-10">Professional Experience</h3>

      <div className="relative flex flex-col md:flex-row md:justify-between md:items-center pb-12 md:overflow-x-auto no-scrollbar">
        {/* Timeline line */}
        <div
          className="absolute md:top-11 md:left-0 md:right-0 md:h-0.5 md:bg-indigo-600 md:z-0
                        left-6 top-0 bottom-0 w-0.5 bg-indigo-600 z-0 md:hidden"
        ></div>

        {/* Start circle */}
        <span className="absolute md:top-[39px] md:left-0 md:w-3 md:h-3 left-[19px] top-0 w-3 h-3 rounded-full bg-indigo-600 z-10"></span>

        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative flex md:flex-col items-center md:items-center mb-10 md:mb-0 md:ml-0 ml-12"
          >
            {/* Period */}

            {/* Dot */}
            <div
              className={`z-10 rounded-full border-2 border-white w-6 h-6
                absolute md:static left-[-35px] md:left-auto
                ${job.isStart ? "bg-green-500 animate-pulse border-none" : "bg-indigo-500"}
              `}
            ></div>

            {/* Card */}
            <div className="mt-2 md:mt-4 w-64">
              <span className="mb-2 md:mb-4 text-xs font-mono text-indigo-300">{job.period}</span>

              <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-full">
                <h4 className="text-lg font-semibold text-indigo-300">{job.company}</h4>
                <p className="text-sm text-gray-400">{job.role}</p>
                <p className="text-xs text-gray-500">{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
