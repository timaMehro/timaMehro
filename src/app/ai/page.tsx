"use client"
import Nav from "../Nav"
import { useState } from "react"

const slides = [
  {
    num: "01",
    title: "Getting Started with Claude",
    description:
      "An introduction to Claude models, the Anthropic API, making requests, multi-turn conversations, system prompts, temperature control, and response streaming.",
    topics: [
      "Overview of Claude models",
      "Accessing the API & getting a key",
      "Multi-turn conversations",
      "System prompts",
      "Temperature & streaming",
      "Structured data",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    num: "02",
    title: "Evaluating Your Prompts",
    description:
      "Learn how to measure prompt quality with structured evaluation workflows — generating test datasets, running evals, and grading outputs with both code and models.",
    topics: [
      "Eval workflow design",
      "Generating test datasets",
      "Running evaluations",
      "Model-based grading",
      "Code-based grading",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    num: "03",
    title: "Prompt Engineering Techniques",
    description:
      "Practical techniques for writing prompts that produce accurate, reliable results — clarity, specificity, XML structuring, and few-shot examples.",
    topics: [
      "Being clear & direct",
      "Being specific",
      "Structuring with XML tags",
      "Providing examples",
      "Iterating on prompts",
    ],
    color: "from-pink-500 to-purple-500",
  },
  {
    num: "04",
    title: "Tool Use with Claude",
    description:
      "Give Claude the ability to call external functions — define tool schemas, handle message blocks, manage multi-turn tool flows, and work with built-in tools.",
    topics: [
      "Tool schemas & functions",
      "Handling message blocks",
      "Sending tool results",
      "Multi-turn with tools",
      "Fine-grained tool calling",
      "Text editor & web search tools",
    ],
    color: "from-orange-500 to-pink-500",
  },
  {
    num: "05",
    title: "RAG & Agentic Search",
    description:
      "Build retrieval-augmented generation pipelines — text chunking, embeddings, semantic search, BM25 lexical search, and multi-index retrieval strategies.",
    topics: [
      "Retrieval Augmented Generation",
      "Text chunking strategies",
      "Text embeddings",
      "The full RAG flow",
      "BM25 lexical search",
      "Multi-index RAG pipeline",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    num: "06",
    title: "Advanced Claude Features",
    description:
      "Unlock Claude's full capabilities — extended thinking, vision (images & PDFs), citations, prompt caching for performance, and code execution with the Files API.",
    topics: [
      "Extended thinking",
      "Image & PDF support",
      "Citations",
      "Prompt caching",
      "Code execution & Files API",
    ],
    color: "from-cyan-500 to-emerald-500",
  },
  {
    num: "07",
    title: "MCP, Agents & Workflows",
    description:
      "The Model Context Protocol, building MCP servers and clients, plus agentic patterns — parallelization, chaining, routing, and when to choose workflows vs agents.",
    topics: [
      "Model Context Protocol",
      "MCP tools, resources & prompts",
      "Claude Code & MCP servers",
      "Parallelization & chaining",
      "Routing workflows",
      "Workflows vs agents",
    ],
    color: "from-violet-500 to-cyan-500",
  },
]

export default function AiPage() {
  const [active, setActive] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-indigo-900 to-black text-white font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-1">
        <Nav />

        {/* Hero */}
        <section className="mt-16 mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-3">
            Claude with the Anthropic API
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Frontend
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A deep dive into building with{" "}
            <span className="text-indigo-300 font-medium">Claude</span> — from
            your first API call to production-grade agents, RAG pipelines, and
            MCP integrations.
          </p>
        </section>

        {/* Slide Navigation */}
        <div className="flex gap-1.5 mb-8 overflow-x-auto no-scrollbar pb-2">
          {slides.map((slide, i) => (
            <button
              key={slide.num}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                active === i
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-gray-500 hover:text-gray-300 border border-transparent"
              }`}
            >
              <span className="font-mono mr-1.5 opacity-50">{slide.num}</span>
              <span className="hidden sm:inline">{slide.title}</span>
              <span className="sm:hidden">{slide.title.split(" ").slice(0, 2).join(" ")}</span>
            </button>
          ))}
        </div>

        {/* Active Slide */}
        <section className="relative mb-20">
          {/* Progress bar */}
          <div className="flex gap-1 mb-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                  i <= active ? "bg-gradient-to-r " + slides[active].color : "bg-white/5"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left: slide info */}
            <div className="lg:col-span-3">
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className={`text-5xl font-extrabold bg-gradient-to-br ${slides[active].color} bg-clip-text text-transparent`}
                >
                  {slides[active].num}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {slides[active].title}
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed mt-4 max-w-xl">
                {slides[active].description}
              </p>

              {/* Nav arrows */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  &larr; Prev
                </button>
                <button
                  onClick={() => setActive(Math.min(slides.length - 1, active + 1))}
                  disabled={active === slides.length - 1}
                  className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  Next &rarr;
                </button>
                <span className="text-xs text-gray-600 ml-2">
                  {active + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Right: topic list */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-4">
                What you&apos;ll learn
              </h4>
              <ul className="space-y-2.5">
                {slides[active].topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${slides[active].color}`}
                    />
                    <span className="text-sm text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
