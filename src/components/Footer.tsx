import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <span>© {year} Varun Sridhar</span>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/resume" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
