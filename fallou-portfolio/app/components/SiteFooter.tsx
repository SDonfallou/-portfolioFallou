export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-zinc-50 mb-2">Fallou Sow</h3>
            <p className="text-sm text-zinc-400">
              Full-Stack &amp; Cloud Developer based in Oslo, Norway.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-zinc-300 hover:text-pink-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#tech" className="text-zinc-300 hover:text-pink-400 transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-300 hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/falousow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-2"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/falousow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-2"
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:littlefallou@gmail.com"
                className="text-zinc-300 hover:text-pink-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Fallou Sow. All rights reserved.</span>
            <p className="text-zinc-500 mt-4 sm:mt-0">
              Built with Next.js, React &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

