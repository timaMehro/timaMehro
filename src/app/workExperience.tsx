export default function WorkExperience() {
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
      <h3 className="text-2xl font-semibold text-indigo-500 mb-10 ">Professional Experience</h3>

      <div className="relative flex justify-between items-center  pb-12 overflow-x-auto no-scrollbar">
        {/* Timeline horizontal line */}
        <div className="absolute top-11 left-0 right-0 h-0.5 bg-indigo-600 z-0"></div>
        <span className="absolute top-[39px] left-0 w-3 h-3 rounded-full bg-indigo-600  z-10"></span>

        {jobs.map((job, index) => (
          <div key={index} className="relative flex flex-col items-center flex-shrink-0">
            <span className="mb-4 text-xs font-mono text-indigo-300">{job.period}</span>

            {/* Timeline dot */}
            <div
              className={`z-10 rounded-full border-2 border-white w-6 h-6
                ${job.isStart ? "bg-green-500 animate-pulse border-none " : "bg-indigo-500"}
              `}
            ></div>

            {/* Card */}
            <div className="mt-4 ">
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
