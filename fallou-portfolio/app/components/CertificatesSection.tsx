export function CertificatesSection() {
  const certificates = [
    {
      id: "aws-practitioner",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: "☁️",
      description: "Certified in AWS cloud fundamentals, services, and best practices.",
    },
    {
      id: "java-backend",
      title: "Back-End Developer (Java Spring & Relational Database Systems)",
      issuer: "Hays Formazione",
      year: "2022",
      icon: "☕",
      description: "Certified in Java Spring Framework and enterprise database design.",
    },
  ];

  const languages = [
    { lang: "English", level: "Fluent" },
    { lang: "French", level: "Fluent" },
    { lang: "Italian", level: "Fluent" },
    { lang: "Norwegian", level: "Intermediate" },
    { lang: "Spanish", level: "Intermediate" },
  ];

  return (
    <section className="bg-zinc-950 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-50 mb-3">
            Certifications &amp; Languages
          </h2>
          <p className="text-zinc-400 text-lg">
            Professional certifications and language proficiencies.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-50 mb-6">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-zinc-50 mb-1 group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-zinc-400 mb-2">
                        {cert.issuer} • {cert.year}
                      </p>
                      <p className="text-sm text-zinc-300">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-50 mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.lang}
                  className="group rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-zinc-50 group-hover:text-white transition-colors">
                      {lang.lang}
                    </span>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
