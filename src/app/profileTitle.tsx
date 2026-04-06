import Image from "next/image"
import tima from "/public/tima003.png"

export default function ProfileTitle() {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mt-12 px-4 sm:px-8">
      <div className="w-full sm:w-auto flex justify-center md:justify-start">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-60 blur-md animated-blob" />
          <Image
            src={tima}
            alt="Tima Mehro"
            className="relative brightness-50 animated-blob w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover ring-2 ring-indigo-500/50"
            width={224}
            height={224}
            priority
          />
        </div>
      </div>

      <header className="w-full text-center md:text-left animate-fade-in" id="home">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">
          Senior Front End Developer
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Tima Mehro
        </h1>
        <p className="text-gray-400 text-sm mt-3 flex items-center justify-center md:justify-start gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Brisbane, Australia
          <span className="text-white/20">|</span>
          <a
            href="https://linkedin.com/in/TimaMehro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </p>
      </header>
    </div>
  )
}
