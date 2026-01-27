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
      className="group rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50"
    >
      {/* Header */}
      <div className="space-y-2 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-zinc-50 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 mt-1">{project.oneLiner}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <p className="text-zinc-300 leading-relaxed mb-6 text-sm">
        {project.overview}
      </p>

      {/* Tech Stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Backend</p>
          <p className="text-sm text-zinc-200 mt-1">{project.tech.backend}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Frontend</p>
          <p className="text-sm text-zinc-200 mt-1">{project.tech.frontend}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Database</p>
          <p className="text-sm text-zinc-200 mt-1">{project.tech.database}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Cloud</p>
          <p className="text-sm text-zinc-200 mt-1">{project.tech.cloud}</p>
        </div>
      </div>

      {/* Features and Challenges */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
            Key Features
          </h4>
          <ul className="space-y-3">
            {project.features.map((feat) => (
              <li key={feat} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-500 flex-shrink-0" />
                <span className="text-sm text-zinc-300">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div>
          <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
            Challenges &amp; Approach
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-700">
        <a
          href="#"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
        >
          Live demo →
        </a>
        <a
          href="#"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
        >
          GitHub repository →
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-950 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-50 mb-2">
            Selected Projects
          </h2>
          <p className="text-zinc-400 text-lg">
            A selection of recent work spanning full-stack development, cloud architecture, and UI design.
          </p>
        </header>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

