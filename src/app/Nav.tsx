import Image from "next/image"
import { useState } from "react"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/", color: "text-indigo-300" },
    { label: "Testing", href: "/test", color: "text-purple-300" },
    { label: "React", href: "/react", color: "text-pink-300" },
    { label: "AI + Frontend", href: "/ai", color: "text-emerald-300" },
  ]
  return (
    <div className="relative z-50 pt-6">
      <div className="flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/finalLogo02.png"
            alt="Tima Mehro Logo"
            width={40}
            height={40}
            className="inline-block md:w-10 w-8"
          />
          <h1 className="text-base md:text-2xl font-bold bg-[linear-gradient(to_right,_#a5b4fc,_#f9a8d4,_#fde68a,_#86efac,_#d8b4fe)] bg-clip-text text-transparent">
            MehroWeb
          </h1>
        </a>
        <div className="flex items-center gap-3">
          {/* AI Button */}
          <a
            href="/ai"
            className="group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-white overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 ai-btn-glow"
          >
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_var(--ai-angle),#818cf8,#c084fc,#f472b6,#818cf8)] p-px ai-btn-spin">
              <span className="flex h-full w-full rounded-full bg-black" />
            </span>
            <span className="relative flex items-center gap-1.5">
              <span className="inline-block animate-bounce [animation-duration:2s]">&gt;_</span>
              <span>AI</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
            </span>
          </a>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 group p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-pink-400 rounded group-hover:bg-pink-300 transition" />
            <span className="w-6 h-0.5 bg-yellow-400 rounded group-hover:bg-yellow-300 transition" />
            <span className="w-6 h-0.5 bg-indigo-400 rounded group-hover:bg-indigo-300 transition" />
            <span className="w-6 h-0.5 bg-green-400 rounded group-hover:bg-green-300 transition" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute top-14 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl w-48 p-4 space-y-3 animate-fade-in-up">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block text-sm font-medium ${item.color} hover:underline transition`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}
