import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="grid grid-cols-2 bg-gray-100 rounded-full mt-3 mb-16">
          <div className="m-3 ml-7">
            <h2 className="font-bold tracking-tight text-indigo-900 text-2xl">
              TIMA MEHRO
            </h2>
            <h3 className="text-indigo-900">فاطمه محمدی مهرو</h3>
          </div>
          <div className="justify-self-end self-center mr-7">
            <Image
              src="/finalLogo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Web Fundamentals
          </h1>
          <p className="m-2 mb-9 text-lg text-slate-700 dark:text-slate-400">
            Explore and deepen your understanding of fundamental web concepts
            here.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">
              Frontend System Design
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-blue-500">
              <li>Box Model and Browser Positioning</li>
              <li>Layering and Browser Rendering</li>
              <li>
                Understanding Formatting Context (Flex, Grid, Inline, Block)
              </li>
            </ul>
          </div>
          {/*
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">
              JavaScript Testing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-blue-500">
              <li>Unit Tests</li>
              <li>Mocks</li>
              <li>Testing Practices</li>
              <li>Integration Tests</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
