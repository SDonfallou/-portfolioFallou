export function ContactSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 sm:pb-24">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Contact
      </h2>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
        If you&apos;d like to talk about a role, a freelance project or just compare notes, feel free
        to reach out.
      </p>

      <div className="flex flex-col gap-2 text-sm text-zinc-600">
        <a
          href="mailto:littlefallou@gmail.com"
          className="underline underline-offset-4 hover:text-zinc-500"
        >
          littlefallou@gmail.com
        </a>
        <a
          href="tel:+4745558697"
          className="underline underline-offset-4 hover:text-zinc-500"
        >
          +47 45558697
        </a>
        <p className="text-zinc-600">📍 Oslo, Norway</p>
        <a
          href="https://linkedin.com/in/falousow"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/falousow"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-500"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

