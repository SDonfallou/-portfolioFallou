export function IntroSection() {
  return (
    <section className="bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm Fallou, a designer and front-end developer.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex items-center">
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
