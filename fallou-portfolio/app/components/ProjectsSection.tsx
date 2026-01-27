function ProjectCard({
  id,
  title,
  subtitle,
  description,
  techStack,
  features,
  challenges,
  accent,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: { color: string; text: string }[];
  challenges: string;
  accent: "blue" | "purple" | "pink";
}) {
  const gradientMap = {
    blue: "from-blue-500/20 to-purple-500/20",
    purple: "from-purple-500/20 to-pink-500/20",
    pink: "from-pink-500/20 to-blue-500/20",
  } as const;

  const borderMap = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    pink: "border-pink-500",
  } as const;

  return (
    <article
      id={id}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-800/50 dark:shadow-zinc-900/50"
    >
      <div
        className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${gradientMap[accent]} blur-3xl transition-transform duration-500 group-hover:scale-150`}
      />
      <div className="relative">
        <header className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          </div>
        </header>

        <p className="mt-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{description}</p>

        <section className="mt-8 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 dark:from-zinc-900/50 dark:to-zinc-800/50">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">Key Features</h4>
          <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                <span className={`mt-1.5 flex h-2 w-2 shrink-0 rounded-full ${feature.color}`} />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={`mt-8 rounded-lg border-l-4 ${borderMap[accent]} bg-zinc-50 p-5 dark:bg-zinc-900/50`}
        >
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            Challenges & Decisions
          </h4>
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{challenges}</p>
        </section>

        <footer className="mt-8 flex flex-wrap gap-4">
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
        </footer>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
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
        <ProjectCard
          id="project-ecommerce"
          title="E-Commerce Management Platform"
          subtitle="Streamlined inventory and order management for small to medium businesses"
          description="A comprehensive business application that helps retailers manage inventory, process orders, and track sales analytics. Built for business owners who need an all-in-one solution without the complexity of enterprise software."
          techStack={[
            "Backend: .NET 7",
            "Frontend: React + TypeScript",
            "Database: SQL Server",
            "Cloud: AWS (EC2, RDS)",
          ]}
          features={[
            { color: "bg-blue-500", text: "Real-time inventory tracking with low-stock alerts" },
            { color: "bg-purple-500", text: "JWT-based authentication with role-based access control" },
            {
              color: "bg-pink-500",
              text: "Optimized database queries with Entity Framework Core, reducing load times by 60%",
            },
          ]}
          challenges="Implemented pagination and caching strategies to handle large product catalogs efficiently. Used React Query for client-side state management to minimize unnecessary API calls and improve UX."
          accent="blue"
        />

        <ProjectCard
          id="project-serverless"
          title="Serverless Data Processing Pipeline"
          subtitle="Automated data transformation and storage using AWS serverless architecture"
          description="A cost-effective serverless solution that processes and transforms data files, storing results in S3 and triggering notifications. Designed for teams that need reliable data workflows without managing infrastructure."
          techStack={[
            "Backend: AWS Lambda (Python)",
            "Storage: S3",
            "Database: DynamoDB",
            "Orchestration: Step Functions",
          ]}
          features={[
            { color: "bg-purple-500", text: "Automated file processing with error handling and retry logic" },
            {
              color: "bg-pink-500",
              text: "Cost-optimized architecture reducing monthly AWS spend by 40% vs. traditional EC2 setup",
            },
            { color: "bg-blue-500", text: "CI/CD pipeline with GitHub Actions for automated deployments" },
          ]}
          challenges="Designed the pipeline to handle variable workloads efficiently. Used Step Functions for orchestration to manage complex workflows and ensure reliable execution, with built-in error handling and state management."
          accent="purple"
        />

        <ProjectCard
          id="project-dashboard"
          title="Interactive Dashboard UI"
          subtitle="Modern, responsive dashboard with real-time data visualization"
          description="A beautiful, accessible dashboard interface built with React and Tailwind CSS. Features interactive charts, responsive design, and dark mode support. Perfect for teams needing a clean, modern interface for data presentation."
          techStack={[
            "Frontend: React + Next.js",
            "Styling: Tailwind CSS",
            "Charts: Recharts",
            "State: React Query",
          ]}
          features={[
            { color: "bg-pink-500", text: "Fully responsive design with mobile-first approach" },
            {
              color: "bg-blue-500",
              text: "WCAG 2.1 AA compliant with keyboard navigation and screen reader support",
            },
            {
              color: "bg-purple-500",
              text: "Optimized performance with code splitting and lazy loading",
            },
          ]}
          challenges="Implemented virtual scrolling for large datasets to maintain smooth performance. Used React.memo and useMemo strategically to prevent unnecessary re-renders, achieving 60fps even with complex data visualizations."
          accent="pink"
        />
      </div>
    </section>
  );
}

