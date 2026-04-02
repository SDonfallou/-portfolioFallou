const items = [
  "Startups",
  "Product teams",
  "Agencies",
  "B2B SaaS",
] as const;

export function ClientsSection() {
  return (
    <section className="mx-auto mt-4 max-w-5xl px-6 pb-16">
      <div className="grid gap-10 rounded-3xl bg-zinc-900 px-6 py-10 sm:grid-cols-[1.2fr_minmax(0,1fr)] sm:px-10 sm:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl md:text-4xl">
          I often work with:
        </h2>

        <div className="space-y-3">
          {items.map((label) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center justify-between rounded-2xl bg-zinc-950/40 px-4 py-3 text-left text-sm text-zinc-100 ring-1 ring-zinc-800 transition hover:bg-zinc-800/70 hover:ring-zinc-600"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-600 text-[11px]">
                ↗
              </span>
              <span className="flex-1 pl-4">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

