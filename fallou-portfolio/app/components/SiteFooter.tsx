export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 text-xs text-zinc-500">
        <span>Fallou Sow © {new Date().getFullYear()}</span>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-700"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

