import Image from "next/image"
import tima from "/public/tima003.png"

export default function ProfileTitle() {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 mt-10 px-4 sm:px-8">
      <div className="w-full sm:w-auto flex justify-center md:justify-start">
        <Image
          src={tima}
          alt="Tima Mehro"
          className="brightness-50 rounded-br-2xl rounded-bl-4xl rounded-tl-2xl rounded-tr-4xl w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover shadow-lg border-4 border-indigo-500 animated-blob"
          width={256}
          height={256}
          priority
        />
      </div>

      <header className="w-full text-center md:text-left animate-fade-in" id="home">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-400  hover:text-indigo-200 transition-all duration-700">
          Tima Mehro
        </h1>
        <div className="whitespace-nowrap overflow-auto">
          <h2 className=" md:text-xl font-medium text-gray-300 md:mb-2 ">
            Senior Front End Developer
          </h2>
          <p className="text-gray-400 text-sm sm:text-base  md:mt-3 mb-4">
            Brisbane, Australia | {""}
            <a
              href="https://linkedin.com/in/TimaMehro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin
            </a>
          </p>
        </div>
      </header>
    </div>
  )
}
