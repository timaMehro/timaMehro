import Link from "next/link"
import { subjects } from "./data"

export default function subjectBox() {
  return (
    <div className="flex flex-wrap justify-center gap-y-8 md:gap-x-4">
      {subjects.map(({ id, title, color }) => (
        <div key={id} id={id.toString()} className="flex flex-col items-center w-1/2 sm:w-auto">
          <div
            className={`
              relative w-20 h-20 rounded-full shadow-lg border border-${color}-500
              bg-gray-800 flex items-center justify-center text-center
              cursor-pointer
              text-white
              hover:bg-gradient-to-r hover:from-${color}-700 hover:to-${color}-900
              hover:scale-105 hover:shadow-2xl
              transition-all duration-300
            `}
          >
            <div
              className="
                pointer-events-none absolute inset-0 rounded-2xl opacity-0
                bg-gradient-to-tr from-pink-400/40 via-yellow-300/40 to-cyan-300/40
                filter blur-3xl
                transition-opacity duration-300
                hover:opacity-100
              "
            />
            <span className="text-5xl font-thin tracking-tight leading-none select-none">
              <Link href={title.toLowerCase()}>{title.substring(0, 1).toUpperCase()}</Link>
            </span>
          </div>
          <span className="mt-2 text-white text-center text-sm font-semibold font-sans tracking-wide uppercase">
            {title}
          </span>
        </div>
      ))}
    </div>
  )
}
