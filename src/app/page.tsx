import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-32 lg:px-8 animate-fade-in-slide-up">
      <div className="space-y-12">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
          Hey, I&apos;m Varun. 👋
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          I do product, I live in NYC. Currently, I&apos;m the Head of Product at <strong className="font-semibold text-neutral-800 dark:text-neutral-200">Gynger</strong>, building at the intersection of embedded financing, credit risk, and AI.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/resume"
            className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-600 bg-transparent px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            View resume
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-600 bg-transparent px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
