const testingTypes = [
  {
    id: 1,
    title: "Unit Testing",
    description: "Tests small individual parts (units) of the application in isolation.",
    color: "blue",
    type: "unit",
    bestFor: [
      "Functions (utility, helpers)",
      "Classes (business logic, services)",
      "Small components",
    ],
  },
  {
    id: 2,
    title: "Integration Testing",
    description: "Tests how multiple units work together when combined.",
    color: "green",
    type: "integration",
    bestFor: ["Data flow between components", "Component and API interaction", "Form validation"],
  },
  {
    id: 3,
    title: "End-to-End Testing",
    description: "Simulates real user flow across the full system from start to finish.",
    color: "rose",
    type: "e2e",
    bestFor: [
      "User workflows (login, checkout)",
      "Critical features and paths",
      "Cross-browser/device testing",
    ],
  },
]

export default function TestingTypesBox() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-12 md:gap-x-10 px-6">
        {testingTypes.map(({ id, title, description, type, bestFor }) => (
          <div key={id} className="flex flex-col items-center w-72 text-center space-y-3">
            {/* Circle Graphic */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {type === "unit" && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                </div>
              )}
              {type === "integration" && (
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white -ml-4 z-10"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white -ml-4 z-20"></div>
                </div>
              )}
              {type === "e2e" && (
                <div className="w-52 h-24 rounded-xl bg-rose-900 flex items-center justify-around p-2 shadow-inner border border-rose-600">
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-rose-400"></div>
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-rose-400"></div>
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-rose-400"></div>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <span className="text-white text-lg font-semibold uppercase">{title}</span>
            <p className="text-gray-300 text-sm">{description}</p>

            {/* Best For List */}
            <ul className="mt-3 flex flex-col gap-2 text-gray-200 text-sm">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* TODO: ADD Test pyramid triangle */}
      {/*
      <div className="bg-red-500 w-40 h-20 relative">
        <div
          className="
      absolute top-0 left-1/2 -translate-x-1/2
      w-10 h-0
      border-l-[88px] border-l-transparent
      border-r-[88px] border-r-transparent
      border-b-[88px] border-b-green-500
    "
        ></div>
      </div> */}
    </>
  )
}
