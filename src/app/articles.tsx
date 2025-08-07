import React from "react"
import SubjectBox from "./SubjectBox"

export default function ArticleBox() {
  return (
    <main className=" bg-gray-900 px-6 py-12 text-white rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="md:text-4xl  text-xl font-extrabold text-center text-indigo-400 mb-12">
          Frontend Learning Center
        </h1>

        <section id="articles" className="animate-fade-in-up">
          <SubjectBox />
        </section>
      </div>
    </main>
  )
}
