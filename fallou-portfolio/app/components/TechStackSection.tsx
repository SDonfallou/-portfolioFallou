export function TechStackSection() {
  const categories = [
    {
      icon: "⚙️",
      title: "Backend",
      description: "C# (.NET 6/7), REST APIs, authentication & authorization.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎨",
      title: "Frontend",
      description: "React / Next.js, Tailwind CSS, responsive & accessible UI.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "AWS (EC2, Lambda, S3, RDS), CI/CD with GitHub Actions, FinOps basics.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🗄️",
      title: "Database",
      description: "SQL Server, PostgreSQL.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-zinc-950 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-50 mb-3">
            Tech Stack &amp; Skills
          </h2>
          <p className="text-zinc-400 text-lg">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/50 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${category.color}`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-4xl">{category.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-50 mb-3 group-hover:text-white transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {category.description}
                </p>

                {/* Accent line */}
                <div
                  className={`mt-4 h-1 w-8 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

