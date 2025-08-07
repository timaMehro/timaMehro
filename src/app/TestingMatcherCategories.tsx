import React from "react"

function MatcherCategorie() {
  const matcherCategories = [
    {
      id: "equality",
      title: "Equality",
      description: "Assert exact or deep equality.",
      color: "text-blue-500",
      matchers: ["toBe()", "toEqual()", "toStrictEqual()", "toBeCloseTo()"],
    },
    {
      id: "truthiness",
      title: "Truthiness",
      description: "Check if a value is truthy, falsy, or defined.",
      color: "text-green-500",
      matchers: [
        "toBeTruthy()",
        "toBeFalsy()",
        "toBeNull()",
        "toBeUndefined()",
        "toBeDefined()",
        "toBe()",
      ],
    },
    {
      id: "numbers",
      title: "Numbers",
      description: "Compare numeric values and ranges.",
      color: "text-yellow-500",
      matchers: [
        "toBeGreaterThan()",
        "toBeLessThan()",
        "toBeGreaterThanOrEqual()",
        "toBeLessThanOrEqual()",
        "toBeNaN()",
      ],
    },
    {
      id: "strings",
      title: "Strings",
      description: "Match strings or substrings using regex.",
      color: "text-pink-500",
      matchers: ["toMatch()", "toContain()"],
    },
    {
      id: "arrays",
      title: "Arrays",
      description: "Test array contents and structure.",
      color: "text-purple-500",
      matchers: ["toContain()", "toHaveLength()", "toEqual()"],
    },
    {
      id: "objects",
      title: "Objects",
      description: "Match object shape and properties.",
      color: "text-rose-500",
      matchers: ["toMatchObject()", "toHaveProperty()", "toEqual()", "toStrictEqual()"],
    },
    {
      id: "mocks",
      title: "Mocks",
      description: "Test function calls, arguments, and return values.",
      color: "text-teal-500",
      matchers: ["toHaveBeenCalled()", "toHaveBeenCalledWith()", "mockResolvedValue()"],
    },
  ]

  return (
    <div className="max-w-full px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {matcherCategories.map(({ id, title, description, matchers, color }) => (
          <div
            key={id}
            className="relative flex flex-col p-6 rounded-lg border border-gray-600 hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            {/* Connectors */}
            {/* Optional: You can remove connectors or style differently since grid layout may make them tricky */}

            <h3 className={`text-xl font-semibold flex items-center gap-2 ${color}`}>{title}</h3>

            <p className="text-gray-400 text-sm mt-1 mb-4">{description}</p>

            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-1 font-mono">
              {matchers.map((matcher, i) => (
                <li key={i} className="hover:text-white transition-colors duration-200">
                  <code>{matcher}</code>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatcherCategorie
