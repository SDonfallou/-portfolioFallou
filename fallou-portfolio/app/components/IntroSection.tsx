export function IntroSection() {
  return (
    <section className="bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I&apos;m Fallou, a Full-Stack &amp; Cloud Developer.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex items-center">
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Dynamic Full-Stack &amp; Cloud Developer with over 3 years of impactful experience in crafting innovative web applications and backend services. Proficient in .NET, React, and cloud technologies, specializing in SaaS platforms and enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
