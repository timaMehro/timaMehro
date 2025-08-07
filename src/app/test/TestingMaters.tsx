import React from "react";

function WhyTestingIsImportant() {
  const reasons = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 3v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: "Detect regressions early with automated test suites.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "Enforce code quality and reduce technical debt over time.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-yellow-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M4 14h16v6H4v-6z" />
        </svg>
      ),
      text: "Ensure UI stability across browsers, screen sizes, and accessibility tools.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-pink-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      text: "Enable safe refactoring by validating existing logic and interactions.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-purple-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 10h18M7 21h10m-5-4v-4" />
        </svg>
      ),
      text: "Act as living documentation for component behavior and edge cases.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-rose-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Boost developer confidence and deployment velocity with continuous testing.",
    },
  ];

  return (
    <div className="px-6 py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map(({ icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-4">
            {icon}
            <p className="text-gray-300 text-base">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhyTestingIsImportant;
