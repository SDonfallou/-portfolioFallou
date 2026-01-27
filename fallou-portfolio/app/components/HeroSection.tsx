export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
      <div className="text-center">
        <div className="mb-6 inline-block">
          <span className="relative inline-block">
            <h1 className="relative text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl">
              Fallou Sow
            </h1>
            <span className="absolute -inset-1 block rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-xl" />
          </span>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600 dark:text-zinc-300 sm:text-2xl">
          Full‑stack developer specializing in{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">.NET</span>,{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">React</span> &{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">cloud‑native</span> solutions
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:text-base">
          {[".NET", "React", "AWS", "SQL", "CI/CD"].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white px-4 py-1.5 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

