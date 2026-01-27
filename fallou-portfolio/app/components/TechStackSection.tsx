export function TechStackSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Tech Stack &amp; Skills
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Technologies I work with to build scalable solutions
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
          <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Backend</h3>
          <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              C# (.NET 6/7)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              REST APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Authentication &amp; Authorization
            </li>
          </ul>
        </div>

        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
          <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Frontend</h3>
          <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              React / Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Responsive &amp; accessible UI
            </li>
          </ul>
        </div>

        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
          <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 p-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Cloud &amp; DevOps</h3>
          <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              AWS (EC2, Lambda, S3, RDS)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              CI/CD (GitHub Actions)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              Cost‑aware architecture (FinOps basics)
            </li>
          </ul>
        </div>

        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
          <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 p-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Database</h3>
          <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              SQL Server
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              PostgreSQL
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

