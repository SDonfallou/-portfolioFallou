export function AboutSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 sm:pb-20">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
        About
      </h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
          I&apos;m a full‑stack developer with over 3 years of hands-on experience building scalable web applications using .NET, React, and cloud technologies. At AriesTech, I engineered SaaS platforms like Bequalise and Innovation Match, working across the entire stack from REST APIs to responsive frontends deployed on AWS. I care deeply about code quality, performance optimization, and cost awareness.
        </p>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-3">Education</h3>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><span className="font-medium text-zinc-500">IFTS Cloud Architect AWS ReStart</span> — Milan (01/2023 – 02/2024)</li>
            <li><span className="font-medium text-zinc-500">Diploma in Computer Science</span> — ITIS Paleocapa, Bergamo (2021 – 2024)</li>
            <li><span className="font-medium text-zinc-500">AWS Cloud Practitioner</span> — Certificate (2024)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-3">Languages</h3>
          <p className="text-sm text-zinc-600">English (Fluent) • French (Fluent) • Italian (Fluent) • Norwegian (Intermediate) • Spanish (Intermediate)</p>
        </div>
      </div>
    </section>
  );
}

