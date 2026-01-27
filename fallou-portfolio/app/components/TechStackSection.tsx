export function TechStackSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 sm:pb-20">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Tech stack &amp; skills
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2 text-sm text-zinc-600">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Backend
          </h3>
          <p>C# (.NET 6/7), REST APIs, authentication &amp; authorization.</p>
        </div>

        <div className="space-y-2 text-sm text-zinc-600">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Frontend
          </h3>
          <p>React / Next.js, Tailwind CSS, responsive &amp; accessible UI.</p>
        </div>

        <div className="space-y-2 text-sm text-zinc-600">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Cloud &amp; DevOps
          </h3>
          <p>AWS (EC2, Lambda, S3, RDS), CI/CD with GitHub Actions, FinOps basics.</p>
        </div>

        <div className="space-y-2 text-sm text-zinc-600">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Database
          </h3>
          <p>SQL Server, PostgreSQL.</p>
        </div>
      </div>
    </section>
  );
}

