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
    id: "wesync-public",
    title: "Wesync - Full-Stack Developer (Collaboration)",
    oneLiner: "Bologna (Remote) | 2025 - Present",
    overview:
      "Contributing to digital systems for the Abruzzo region public sector, with a focus on backend services, API integrations, and distributed delivery workflows.",
    tech: {
      backend: "C#/.NET, API integrations",
      frontend: "React/TypeScript (service integration)",
      database: "SQL Server, PostgreSQL",
      cloud: "Docker, Docker Compose, CI/CD",
    },
    features: [
      "Contribute to public sector digital systems used by regional stakeholders.",
      "Develop backend services and API integrations for interconnected platforms.",
      "Collaborate in distributed teams on scalable architecture and deployments.",
    ],
    challenge:
      "Balancing reliability, interoperability, and release speed in public sector systems that involve multiple integrations and operational constraints.",
  },
  {
    id: "ariestech-saas",
    title: "AriesTech - Full-Stack and Cloud Developer",
    oneLiner: "Milan | 01/2024 - 01/2025",
    overview:
      "Built SaaS platforms (Bequalise App and Innovation Match), implementing full-stack features and cloud infrastructure for production deployments.",
    tech: {
      backend: ".NET 6 REST APIs",
      frontend: "React / TypeScript",
      database: "SQL Server, Amazon RDS",
      cloud: "AWS (EC2, RDS, S3, IAM, CloudWatch)",
    },
    features: [
      "Built and integrated REST APIs with React/TypeScript frontend applications.",
      "Implemented CI/CD pipelines for automated testing and deployment workflows.",
      "Improved scalability and maintainability through clean architecture patterns.",
    ],
    challenge:
      "Delivered cloud-ready SaaS functionality while keeping deployment pipelines stable and maintainable across backend and frontend layers.",
  },
  {
    id: "hays-backend",
    title: "Hays - Back-End Developer",
    oneLiner: "Milan | 11/2022 - 06/2023",
    overview:
      "Developed backend services in Java Spring, implementing business logic and database integrations for enterprise applications.",
    tech: {
      backend: "Java Spring",
      frontend: "REST API consumers",
      database: "Relational databases",
      cloud: "Enterprise infrastructure",
    },
    features: [
      "Implemented core business logic for enterprise back-end workflows.",
      "Built and maintained database integrations for operational systems.",
      "Contributed within Agile teams to deliver production features reliably.",
    ],
    challenge:
      "Maintained performance and consistency while integrating business-critical rules into existing enterprise systems.",
  },
  {
    id: "independent-dev",
    title: "Independent Software Developer",
    oneLiner: "01/2021 - Present",
    overview:
      "Deliver custom web applications for SMEs using C#, .NET, React, and SQL Server, while collaborating directly with clients on technical delivery.",
    tech: {
      backend: "C#, .NET, REST APIs",
      frontend: "React",
      database: "SQL Server",
      cloud: "AWS",
    },
    features: [
      "Built tailored applications aligned with SME operational requirements.",
      "Designed scalable APIs and optimized database performance.",
      "Led small initiatives from planning to deployment with client collaboration.",
    ],
    challenge:
      "Managing end-to-end delivery across product decisions, architecture, and infrastructure while maintaining long-term code quality.",
  },
  {
    id: "finops-ai",
    title: "FinOps AI Platform (Personal Project)",
    oneLiner: "Selected Project | 2025 - Present",
    overview:
      "Designing a cloud cost optimization platform powered by AI, focused on usage intelligence, cost analysis, and actionable recommendations.",
    tech: {
      backend: ".NET services, cloud-native design",
      frontend: "Analytics dashboard",
      database: "Usage and cost data pipelines",
      cloud: "AWS (with planned GCP/Azure expansion)",
    },
    features: [
      "Build backend services for ingestion, analysis, and optimization insights.",
      "Deploy scalable cloud infrastructure with automation-first workflows.",
      "Implement cost analysis and recommendation engines for FinOps decisions.",
    ],
    challenge:
      "Evolving from a single-cloud architecture toward a multi-cloud model while preserving consistent data, insights, and operational controls.",
  },
];

function ProjectRow({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50"
    >
      <div className="mb-6 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-zinc-50 transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{project.oneLiner}</p>
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-zinc-300">{project.overview}</p>

      <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg border border-zinc-700/50 bg-zinc-800/30 p-4 md:grid-cols-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Backend</p>
          <p className="mt-1 text-sm text-zinc-200">{project.tech.backend}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Frontend</p>
          <p className="mt-1 text-sm text-zinc-200">{project.tech.frontend}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Database</p>
          <p className="mt-1 text-sm text-zinc-200">{project.tech.database}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Cloud</p>
          <p className="mt-1 text-sm text-zinc-200">{project.tech.cloud}</p>
        </div>
      </div>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Highlights
          </h4>
          <ul className="space-y-3">
            {project.features.map((feat) => (
              <li key={feat} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-pink-500" />
                <span className="text-sm text-zinc-300">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Challenges and Approach
          </h4>
          <p className="text-sm leading-relaxed text-zinc-300">{project.challenge}</p>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <h2 className="mb-2 text-4xl font-bold text-zinc-50 sm:text-5xl">
            Projects and Experience
          </h2>
          <p className="text-lg text-zinc-400">
            Professional roles and selected work across full-stack engineering, cloud platforms, and system architecture.
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
