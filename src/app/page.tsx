import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-32 lg:px-8">
      <div className="space-y-12">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
          Product leader — turning vision into shipped outcomes.
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I lead product strategy and execution for high growth teams with a passion for, and expertise in, building products in Fintech.  
        </p>
        <nav className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            About
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
          <Link
            href="/resume"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Resume
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Projects
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
