/* Minimal hero similar to jameswilliams.design */
"use client";

function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Fallou Sow
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
        Full‑stack developer
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
        Full‑stack developer specializing in .NET, React &amp; cloud‑native solutions.
        I build scalable, maintainable products with a focus on clear UX and clean code.
      </p>

      <p className="mt-3 text-xs font-medium text-zinc-500">
        .NET • React • AWS • SQL • CI/CD
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <button
          type="button"
          onClick={() => scrollToId("projects")}
          className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
        >
          View projects →
        </button>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

