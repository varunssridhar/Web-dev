import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="flex flex-row flex-nowrap items-center justify-between gap-4">
          {/* Left: name + icons */}
          <div className="flex items-center gap-3 shrink-0">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © {year} Varun Sridhar
            </p>
            <div className="flex items-center gap-3" aria-label="Social links">
              <Link
                href="https://www.linkedin.com/in/varunsridhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/varunssridhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Right: tagline + tech stack */}
          <div className="text-right min-w-0 shrink">
            <p className="text-[11px] sm:text-sm text-neutral-500 dark:text-neutral-400">
              Always in beta. 🧱 with AI assistance and a human touch.
            </p>
            <p className="mt-1 text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
              Next.js • Tailwind • Cursor • Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
