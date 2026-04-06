export default function Summary() {
  return (
    <section className="mt-14 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Summary
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
      </div>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mt-4">
        Frontend Developer with 8+ years of experience building responsive, accessible apps using
        React 19, Next.js 15, TypeScript, and Vue. Skilled in Tailwind CSS, testing tools like
        Vitest and Storybook, API integration, performance tuning, and UI/UX design. Familiar with
        backend tech including C# and ASP.NET Core.
      </p>
    </section>
  )
}
