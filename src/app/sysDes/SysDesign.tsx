"use client"
import React from "react"
import FacebookNewsFeedTable from "./useacse"

export default function SysDesign() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 text-white-900">
      {/* Title */}

      <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400  tracking-wide animate-fade-in">
        Front-End System Design
      </h1>

      <h3 className="md:text-2xl font-bold text-blue-100 md:mb-4">
        Designing scalable, efficient, and user-friendly front-end systems
      </h3>

      <p className="text-white/80 mb-6">
        System design in front-end is the process of planning how UI components, data flow, APIs,
        caching, and performance optimizations work together to build a reliable, scalable, and
        user-friendly application. We can structure this process using the{" "}
        <span className="font-bold italic">R.A.D.I.O</span>
        <h1 className="text-4xl font-extrabold mb-10 tracking-wide text-blue-600"></h1>
      </p>

      {/* Diagram */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex items-center justify-center h-full w-full">
          <span className="font-bold text-4xl">R.A.D.I.O</span>
        </div>

        {/* Requirements */}
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold text-lg mb-2 text-blue-500 flex items-center">
            <span className="text-5xl mr-2 leading-none">R</span>
            <span className="border-l-2 pl-2">equirements</span>
          </h2>
          <div className="flex flex-col items-center space-y-1 text-sm sm:text-base">
            <span>Functional</span>
            <span>Non-Functional</span>
          </div>
        </div>

        {/* Architecture */}
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold text-lg mb-2 text-blue-500 flex items-center">
            <span className="text-5xl mr-2 leading-none">A</span>
            <span className="border-l-2 pl-2">rchitecture</span>
          </h2>
          <p className="text-center text-sm sm:text-base">
            Component structure, SSR/CSR/ISR, deployment
          </p>
        </div>

        {/* Data Flow Model */}
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold text-lg mb-2 text-blue-500 flex items-center">
            <span className="text-5xl mr-2 leading-none">D</span>
            <span className="border-l-2 pl-2">ata Flow Model</span>
          </h2>
          <p className="text-center text-sm sm:text-base">
            State management, caching, client-server communication
          </p>
        </div>

        {/* API Model */}
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold text-lg mb-2 text-blue-500 flex items-center">
            <span className="text-5xl mr-2 leading-none">A</span>
            <span className="border-l-2 pl-2">PI Model</span>
          </h2>
          <p className="text-center text-sm sm:text-base">
            REST, GraphQL, WebSockets, real-time APIs
          </p>
        </div>

        {/* Optimization & Performance */}
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="font-semibold text-lg mb-2 text-blue-500 flex items-center">
            <span className="text-5xl mr-2 leading-none">O</span>
            <span className="border-l-2 pl-2">ptimization & Performance</span>
          </h2>
          <p className="text-center text-sm sm:text-base">
            Caching, lazy loading, prefetching, accessibility, scalability
          </p>
        </div>
      </div>
      <FacebookNewsFeedTable />
    </div>
  )
}
