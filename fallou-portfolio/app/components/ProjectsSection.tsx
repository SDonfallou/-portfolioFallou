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
    id: "wesync",
    title: "WeSync — Full-Stack Development (2015–Present)",
    oneLiner: "Long-term full-stack development and cloud infrastructure projects.",
    overview:
      "Over 11 years of continuous full-stack development at WeSync in Bologna, building and maintaining scalable web applications and backend services using .NET, React, and cloud technologies.",
    tech: {
      backend: "C# .NET, REST APIs",
      frontend: "React / TypeScript",
      database: "SQL Server, PostgreSQL",
      cloud: "AWS Cloud Services",
    },
    features: [
      "Engineered multiple SaaS platforms and enterprise applications from conception to production.",
      "Designed and implemented CI/CD workflows for continuous integration and automated deployments.",
      "Optimized system performance and cloud infrastructure for scalability and cost efficiency.",
    ],
    challenge:
      "Maintained code quality and system reliability across diverse projects while mentoring junior developers and adapting to evolving technology stacks and business requirements.",
  },
  {
    id: "bequalise",
    title: "Bequalise App — SaaS Platform",
    oneLiner: "Innovation management platform for startups.",
    overview:
      "Full‑stack SaaS platform developed at AriesTech that enables startups to manage innovation initiatives, track progress, and collaborate on strategic goals.",
    tech: {
      backend: ".NET 6 (REST APIs)",
      frontend: "React / TypeScript",
      database: "SQL Server",
      cloud: "AWS (EC2, RDS)",
    },
    features: [
      "Seamless integration between .NET backend APIs and React/TypeScript frontend.",
      "CI/CD workflows enabling automated testing and zero‑downtime deployments.",
      "Cloud-optimized architecture for scalability and cost efficiency.",
    ],
    challenge:
      "Collaborated with UX designers and product managers to convert complex business requirements into robust, maintainable solutions while ensuring platform scalability and performance.",
  },
  {
    id: "innovation-match",
    title: "Innovation Match — SaaS Platform",
    oneLiner: "Matchmaking platform connecting innovation stakeholders.",
    overview:
      "SaaS platform that facilitates innovation management by matching startups with resources, mentors, and investors to accelerate growth.",
    tech: {
      backend: ".NET 6 (REST APIs)",
      frontend: "React / TypeScript",
      database: "SQL Server",
      cloud: "AWS Cloud Infrastructure",
    },
    features: [
      "Intelligent matching algorithm connecting startups with relevant opportunities.",
      "Responsive design ensuring accessibility across devices.",
      "Optimized system performance through strategic caching and query optimization.",
    ],
    challenge:
      "Prioritized cloud scalability and cost optimization by leveraging AWS best practices while maintaining code quality and system maintainability across the full stack.",
  },
  {
    id: "enterprise-backend",
    title: "Enterprise Backend Services — Java Spring",
    oneLiner: "Scalable backend infrastructure for enterprise applications.",
    overview:
      "Backend services built with Java Spring Framework supporting enterprise-scale applications, featuring robust API design, authentication, and data persistence.",
    tech: {
      backend: "Java Spring Framework",
      frontend: "REST API Consumers",
      database: "Relational Databases",
      cloud: "Enterprise Infrastructure",
    },
    features: [
      "RESTful API design following enterprise standards and best practices.",
      "Role-based authentication and authorization mechanisms.",
      "Optimized database queries and connection pooling for high throughput.",
    ],
    challenge:
      "Designed and implemented backend services tailored to support enterprise-scale applications with emphasis on reliability, security, and performance at scale.",
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

