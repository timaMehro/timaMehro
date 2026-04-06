import React from "react"

export default function FacebookNewsFeedTable() {
  const data = [
    {
      section: "Requirements",
      items: [
        {
          title: "Functional",
          points: [
            "Infinite scroll",
            "Personalized feed",
            "Real-time updates",
            "Rich media (images/videos)",
          ],
        },
        {
          title: "Non-Functional",
          points: [
            "Scale (billions of users)",
            "Performance (~200ms latency)",
            "Reliability",
            "Accessibility & cross-browser",
          ],
        },
      ],
    },
    {
      section: "Architecture",
      items: [
        { title: "Client Rendering", points: ["Initial shell can be SSR", "Feed items fetched via CSR"] },
        { title: "Server-Side", points: ["Load balancers", "Feed service aggregates posts"] },
        { title: "Storage", points: ["Posts in distributed DB", "Media in blob storage"] },
        { title: "Caching", points: ["Redis/Memcached for hot feeds", "CDN for static content"] },
      ],
    },
    {
      section: "API Model",
      items: [
        { title: "", points: ["GraphQL (Relay)", "Batching & pagination", "Real-time APIs", "Edge APIs"] },
      ],
    },
    {
      section: "Optimization & Performance",
      items: [
        {
          title: "",
          points: [
            "Caching layers",
            "Per-user feed cache",
            "CDN edge caching",
            "Pre-fetching: load next feed items while user scrolls",
            "DB optimization (sharding, denormalization)",
          ],
        },
      ],
    },
    {
      section: "Data Flow Model",
      items: [
        {
          title: "Post creation",
          points: ["User posts → write to DB → push event to Kafka", "Fan-out on Write vs Fan-out on Read"],
        },
        { title: "Pre-fetching", points: ["Load next feed items while user scrolls"] },
        { title: "Endomerton", points: ["Defer images/videos until in viewport"] },
      ],
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Facebook News Feed</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-3 py-2 font-semibold w-1/4">Section</th>
              <th className="px-3 py-2 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((section, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="px-3 py-2 font-medium align-top">{section.section}</td>
                <td className="px-3 py-2">
                  {section.items.map((item, j) => (
                    <div key={j} className="mb-2 last:mb-0">
                      {item.title && (
                        <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                      )}
                      <ul className="ml-5 space-y-0.5">
                        {item.points.map((point, k) => (
                          <li key={k} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✔</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {data.map((section, i) => (
          <div key={i} className="border border-gray-300 rounded-lg p-3">
            <h2 className="text-lg font-semibold mb-2">{section.section}</h2>
            <div className="space-y-2">
              {section.items.map((item, j) => (
                <div key={j}>
                  {item.title && (
                    <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  )}
                  <ul className="ml-4 space-y-0.5">
                    {item.points.map((point, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
