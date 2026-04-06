import React from "react"
import SubjectBox from "./SubjectBox"

export default function ArticleBox() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Learning Center
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
      </div>

      <div id="articles" className="animate-fade-in-up">
        <SubjectBox />
      </div>
    </section>
  )
}
