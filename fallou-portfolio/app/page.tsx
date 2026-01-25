import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="relative inline-block">
              <h1 className="relative text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl">
                Fallou Sow
              </h1>
              <span className="absolute -inset-1 block rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-xl"></span>
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
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
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

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Real-world applications built with modern technologies
          </p>
        </div>
        <div className="space-y-12">
          {/* Project 1: Full-stack business application */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-800/50 dark:shadow-zinc-900/50">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-transform duration-500 group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    E-Commerce Management Platform
                  </h3>
                  <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                    Streamlined inventory and order management for small to medium businesses
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  A comprehensive business application that helps retailers manage inventory, process orders, 
                  and track sales analytics. Built for business owners who need an all-in-one solution 
                  without the complexity of enterprise software.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:from-zinc-900/50 dark:to-zinc-800/50">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Backend: .NET 7", "Frontend: React + TypeScript", "Database: SQL Server", "Cloud: AWS (EC2, RDS)"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">Key Features</h4>
                <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
                    <span>Real-time inventory tracking with low-stock alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-purple-500"></span>
                    <span>JWT-based authentication with role-based access control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-pink-500"></span>
                    <span>Optimized database queries with Entity Framework Core, reducing load times by 60%</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg border-l-4 border-blue-500 bg-zinc-50 p-5 dark:bg-zinc-900/50">
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Challenges & Decisions
                </h4>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Implemented pagination and caching strategies to handle large product catalogs efficiently. 
                  Used React Query for client-side state management to minimize unnecessary API calls and improve UX.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Live Demo
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  GitHub Repository
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Cloud / AWS architecture project */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-800/50 dark:shadow-zinc-900/50">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl transition-transform duration-500 group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    Serverless Data Processing Pipeline
                  </h3>
                  <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                    Automated data transformation and storage using AWS serverless architecture
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  A cost-effective serverless solution that processes and transforms data files, 
                  storing results in S3 and triggering notifications. Designed for teams that need 
                  reliable data workflows without managing infrastructure.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:from-zinc-900/50 dark:to-zinc-800/50">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Backend: AWS Lambda (Python)", "Storage: S3", "Database: DynamoDB", "Orchestration: Step Functions"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">Key Features</h4>
                <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-purple-500"></span>
                    <span>Automated file processing with error handling and retry logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-pink-500"></span>
                    <span>Cost-optimized architecture reducing monthly AWS spend by 40% vs. traditional EC2 setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
                    <span>CI/CD pipeline with GitHub Actions for automated deployments</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg border-l-4 border-purple-500 bg-zinc-50 p-5 dark:bg-zinc-900/50">
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Challenges & Decisions
                </h4>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Designed the pipeline to handle variable workloads efficiently. Used Step Functions 
                  for orchestration to manage complex workflows and ensure reliable execution, with 
                  built-in error handling and state management.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Live Demo
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  GitHub Repository
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Frontend / UI-focused project */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-800/50 dark:shadow-zinc-900/50">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 blur-3xl transition-transform duration-500 group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    Interactive Dashboard UI
                  </h3>
                  <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                    Modern, responsive dashboard with real-time data visualization
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  A beautiful, accessible dashboard interface built with React and Tailwind CSS. 
                  Features interactive charts, responsive design, and dark mode support. Perfect 
                  for teams needing a clean, modern interface for data presentation.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-br from-pink-50 to-blue-50 p-6 dark:from-zinc-900/50 dark:to-zinc-800/50">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Frontend: React + Next.js", "Styling: Tailwind CSS", "Charts: Recharts", "State: React Query"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">Key Features</h4>
                <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-pink-500"></span>
                    <span>Fully responsive design with mobile-first approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
                    <span>WCAG 2.1 AA compliant with keyboard navigation and screen reader support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-purple-500"></span>
                    <span>Optimized performance with code splitting and lazy loading</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg border-l-4 border-pink-500 bg-zinc-50 p-5 dark:bg-zinc-900/50">
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                  Challenges & Decisions
                </h4>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Implemented virtual scrolling for large datasets to maintain smooth performance. 
                  Used React.memo and useMemo strategically to prevent unnecessary re-renders, 
                  achieving 60fps even with complex data visualizations.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  Live Demo
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  GitHub Repository
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills Section */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Tech Stack & Skills
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Technologies I work with to build scalable solutions
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Backend</h3>
            <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                C# (.NET 6/7)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                REST APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                Authentication & Authorization
              </li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Frontend</h3>
            <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                React / Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                Responsive & accessible UI
              </li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 p-3">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Cloud & DevOps</h3>
            <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                AWS (EC2, Lambda, S3, RDS)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                CI/CD (GitHub Actions)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                Cost‑aware architecture (FinOps basics)
              </li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/50">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 p-3">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Database</h3>
            <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                SQL Server
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                PostgreSQL
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-10 shadow-lg dark:border-zinc-800 dark:from-zinc-800/50 dark:to-zinc-900/50">
          <h2 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I'm a full‑stack developer with experience building scalable web applications using .NET, React, 
            and cloud technologies. I enjoy turning business problems into clean, efficient solutions and 
            care deeply about code quality, performance, and cost awareness. I'm currently focused on 
            growing my cloud and FinOps skills while contributing to real‑world products.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Contact
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Let's connect! Feel free to reach out if you'd like to discuss opportunities or collaborate.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-3 rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-zinc-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-zinc-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Fallou Sow © {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
