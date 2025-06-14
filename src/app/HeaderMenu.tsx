import { useState } from "react"
import Image from "next/image"

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "#home", color: "text-indigo-300" },
    { label: "Articles", href: "#articles", color: "text-pink-300" },
    { label: "Books", href: "#books", color: "text-yellow-300" },
    { label: "Lifestyle", href: "#lifestyle", color: "text-green-300" },
    { label: "Photography", href: "#Photography", color: "text-purple-300" },
  ]
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#B57EDC] text-xl font-bold">
            <Image
              src="/finalLogo02.png"
              alt="Tima Mehro Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
            MEHROWEB
          </h1>
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

        {menuOpen && (
          <nav className="absolute top-12 right-0 bg-gray-900 border border-gray-700 rounded-md shadow-xl w-56 p-4 space-y-4 animate-fade-in-up">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block text-lg font-medium ${item.color} hover:underline transition`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  )
}
