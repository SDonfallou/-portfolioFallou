export function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-950 py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-50 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk about opportunities, collaborations, or just compare notes.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-10 sm:p-12">
          {/* Contact Methods */}
          <div className="grid gap-8 sm:grid-cols-2 mb-10">
            {/* Email */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">✉️</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Email
                </h3>
              </div>
              <a
                href="mailto:littlefallou@gmail.com"
                className="text-lg font-medium text-zinc-50 hover:text-pink-400 transition-colors block"
              >
                littlefallou@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📱</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Phone
                </h3>
              </div>
              <a
                href="tel:+4745558697"
                className="text-lg font-medium text-zinc-50 hover:text-pink-400 transition-colors block"
              >
                +47 45558697
              </a>
            </div>

            {/* Location */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📍</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Location
                </h3>
              </div>
              <p className="text-lg font-medium text-zinc-50">Oslo, Norway</p>
            </div>

            {/* Timezone */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌍</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Timezone
                </h3>
              </div>
              <p className="text-lg font-medium text-zinc-50">CET (UTC+1)</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 my-10" />

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">
              Connect On Social
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/falousow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 transition-all"
              >
                <span>💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/falousow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 transition-all"
              >
                <span>🐙</span>
                GitHub
              </a>
              <a
                href="mailto:littlefallou@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 transition-all"
              >
                <span>📧</span>
                Send Email
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 pt-10 border-t border-zinc-800">
            <a
              href="mailto:littlefallou@gmail.com?subject=Let's%20work%20together"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

