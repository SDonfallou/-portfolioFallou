import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl">
            Fallou Sow
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Full‑stack developer specializing in .NET, React & cloud‑native solutions
          </p>
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-500 sm:text-base">
            .NET • React • AWS • SQL • CI/CD
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Projects
        </h2>
        <div className="space-y-16">
          {/* Project 1: Full-stack business application */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-800/50">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              E-Commerce Management Platform
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Streamlined inventory and order management for small to medium businesses
            </p>
            
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                A comprehensive business application that helps retailers manage inventory, process orders, 
                and track sales analytics. Built for business owners who need an all-in-one solution 
                without the complexity of enterprise software.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Backend: .NET 7 • Frontend: React + TypeScript • Database: SQL Server • Cloud: AWS (EC2, RDS)
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Key Features</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Real-time inventory tracking with low-stock alerts</li>
                <li>• JWT-based authentication with role-based access control</li>
                <li>• Optimized database queries with Entity Framework Core, reducing load times by 60%</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Challenges & Decisions</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Implemented pagination and caching strategies to handle large product catalogs efficiently. 
                Used React Query for client-side state management to minimize unnecessary API calls and improve UX.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                Live Demo →
              </a>
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                GitHub Repository →
              </a>
            </div>
          </div>

          {/* Project 2: Cloud / AWS architecture project */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-800/50">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Serverless Data Processing Pipeline
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Automated data transformation and storage using AWS serverless architecture
            </p>
            
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                A cost-effective serverless solution that processes and transforms data files, 
                storing results in S3 and triggering notifications. Designed for teams that need 
                reliable data workflows without managing infrastructure.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Backend: AWS Lambda (Python) • Storage: S3 • Database: DynamoDB • Orchestration: Step Functions
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Key Features</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Automated file processing with error handling and retry logic</li>
                <li>• Cost-optimized architecture reducing monthly AWS spend by 40% vs. traditional EC2 setup</li>
                <li>• CI/CD pipeline with GitHub Actions for automated deployments</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Challenges & Decisions</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Designed the pipeline to handle variable workloads efficiently. Used Step Functions 
                for orchestration to manage complex workflows and ensure reliable execution, with 
                built-in error handling and state management.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                Live Demo →
              </a>
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                GitHub Repository →
              </a>
            </div>
          </div>

          {/* Project 3: Frontend / UI-focused project */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-800/50">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Interactive Dashboard UI
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Modern, responsive dashboard with real-time data visualization
            </p>
            
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                A beautiful, accessible dashboard interface built with React and Tailwind CSS. 
                Features interactive charts, responsive design, and dark mode support. Perfect 
                for teams needing a clean, modern interface for data presentation.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Frontend: React + Next.js • Styling: Tailwind CSS • Charts: Recharts • State: React Query
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Key Features</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Fully responsive design with mobile-first approach</li>
                <li>• WCAG 2.1 AA compliant with keyboard navigation and screen reader support</li>
                <li>• Optimized performance with code splitting and lazy loading</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Challenges & Decisions</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Implemented virtual scrolling for large datasets to maintain smooth performance. 
                Used React.memo and useMemo strategically to prevent unnecessary re-renders, 
                achieving 60fps even with complex data visualizations.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                Live Demo →
              </a>
              <a
                href="#"
                className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills Section */}
      <section id="skills" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Tech Stack & Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Backend</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• C# (.NET 6/7)</li>
              <li>• REST APIs</li>
              <li>• Authentication & Authorization</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frontend</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• React / Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive & accessible UI</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Cloud & DevOps</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• AWS (EC2, Lambda, S3, RDS)</li>
              <li>• CI/CD (GitHub Actions)</li>
              <li>• Cost‑aware architecture (FinOps basics)</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Database</h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• SQL Server</li>
              <li>• PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          I'm a full‑stack developer with experience building scalable web applications using .NET, React, 
          and cloud technologies. I enjoy turning business problems into clean, efficient solutions and 
          care deeply about code quality, performance, and cost awareness. I'm currently focused on 
          growing my cloud and FinOps skills while contributing to real‑world products.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Contact</h2>
        <p className="mb-8 text-base text-zinc-700 dark:text-zinc-300">
          Let's connect! Feel free to reach out if you'd like to discuss opportunities or collaborate.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:your.email@example.com"
            className="text-base font-medium text-zinc-900 underline dark:text-zinc-100"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-zinc-900 underline dark:text-zinc-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-zinc-900 underline dark:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fallou Sow © {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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
