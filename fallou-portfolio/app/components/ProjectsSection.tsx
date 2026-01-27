type Project = {
  id: string;
  title: string;
  oneLiner: string;
  overview: string;
  tech: {
    backend: string;
    frontend: string;
    database: string;
    cloud: string;
  };
  features: [string, string, string];
  challenge: string;
};

const projects: Project[] = [
  {
    id: "fullstack-app",
    title: "E‑Commerce Management Platform",
    oneLiner: "Inventory, orders and reporting for growing retail teams.",
    overview:
      "Full‑stack business application that centralises products, stock and orders so non‑technical teams can manage operations without spreadsheets.",
    tech: {
      backend: ".NET 7 (REST APIs)",
      frontend: "React + TypeScript",
      database: "SQL Server",
      cloud: "AWS (EC2, RDS)",
    },
    features: [
      "Real‑time inventory tracking with low‑stock alerts for store managers.",
      "Role‑based authentication with JWT and granular permissions.",
      "Optimised queries and caching to reduce page load times by ~60%.",
    ],
    challenge:
      "Designed pagination and caching strategies for large catalogues while keeping the API simple. Used React Query to avoid over‑fetching and keep the UI feeling instant.",
  },
  {
    id: "cloud-pipeline",
    title: "Serverless Data Processing Pipeline",
    oneLiner: "Automated ingest, transform and store for data files.",
    overview:
      "Serverless workflow that processes uploaded files, transforms them and stores results with alerts when something fails.",
    tech: {
      backend: "AWS Lambda (Python)",
      frontend: "Lightweight React admin view",
      database: "DynamoDB",
      cloud: "AWS (S3, Step Functions)",
    },
    features: [
      "Event‑driven processing with retries and dead‑letter handling.",
      "GitHub Actions pipelines for zero‑downtime deployments.",
      "Cost‑aware design that scales down to near‑zero when idle.",
    ],
    challenge:
      "Balanced observability and cost by combining CloudWatch metrics with structured logging while keeping the architecture simple enough for small teams to own.",
  },
  {
    id: "ui-dashboard",
    title: "Interactive Analytics Dashboard",
    oneLiner: "Clean, responsive UI for product and operations insights.",
    overview:
      "Frontend‑only dashboard that visualises KPIs, trends and cohorts with a focus on readability and accessibility.",
    tech: {
      backend: "REST APIs (existing services)",
      frontend: "Next.js + React",
      database: "Existing analytics warehouse",
      cloud: "Deployed on Vercel / AWS",
    },
    features: [
      "Responsive layout that works equally well on laptop and mobile.",
      "Accessible interactions (keyboard support, focus states, ARIA labelling).",
      "Lazy‑loaded charts and sections to keep the initial load fast.",
    ],
    challenge:
      "Implemented virtualised lists and memoised chart components to keep interactions smooth when rendering large data sets.",
  },
];

function ProjectRow({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="border-t border-zinc-200 pt-6 first:border-t-0"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
          <p className="text-sm text-zinc-500">{project.oneLiner}</p>
        </div>

        <div className="space-y-3 text-sm text-zinc-600 sm:max-w-sm">
          <p>{project.overview}</p>

          <div className="space-y-1 text-xs text-zinc-500">
            <p>
              <span className="font-medium text-zinc-700">Backend</span> · {project.tech.backend}
            </p>
            <p>
              <span className="font-medium text-zinc-700">Frontend</span> · {project.tech.frontend}
            </p>
            <p>
              <span className="font-medium text-zinc-700">Database</span> · {project.tech.database}
            </p>
            <p>
              <span className="font-medium text-zinc-700">Cloud</span> · {project.tech.cloud}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 text-sm text-zinc-600 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]">
        <ul className="space-y-1">
          {project.features.map((feat) => (
            <li key={feat} className="flex gap-2">
              <span className="mt-1 h-[3px] w-6 bg-zinc-900" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-xs text-zinc-500">
          <p className="font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Challenges &amp; decisions
          </p>
          <p>{project.challenge}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-zinc-700">
        <a href="#" className="underline underline-offset-4 hover:text-zinc-500">
          Live demo →
        </a>
        <a href="#" className="underline underline-offset-4 hover:text-zinc-500">
          GitHub repository →
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 pb-20 sm:pb-24">
      <header className="mb-10 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Selected projects
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">2023 — 2025</p>
      </header>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

