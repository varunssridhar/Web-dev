import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "varunsridhar.com",
    subtitle: "My internet home — the site you're on right now.",
    href: "https://varunsridhar.com",
    github: "https://github.com/varunssridhar/Web-dev",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Cloudflare"],
    intro:
      "I got tired of sending people a LinkedIn link and a stale PDF. Wanted a small corner of the internet that's actually mine: quick to read, easy to update, and not another generic template.",
    built: [
      "Home — hi, here's who I am.",
      "About — how I think about product, plus what I do when I'm not working.",
      "Resume — lives on the web, prints cleanly, and downloads as a PDF.",
      "Projects — you're here. More stuff coming as I ship it.",
    ],
    caredAbout: [
      "One resume, two outputs — the page is the source of truth; a script snapshots it to a PDF so I'm not maintaining Word and HTML separately.",
      "Print that doesn't suck — nav and chrome hidden when you print, spacing tuned for Letter size.",
      "Light/dark mode — follows your system, no weird flash on load.",
      "Ship and tweak — push to GitHub, Vercel deploys; custom domain on Cloudflare.",
    ],
    learned:
      "Building your own site is the same game as product work: scope, copy, and knowing when \"good enough\" beats one more polish pass. Keeping the stack small means I can change a resume bullet and redeploy in minutes.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Things I&apos;ve built for fun, learning, or because I needed them. Starting with the website itself.
        </p>
      </header>

      <ul className="space-y-10">
        {projects.map((project) => (
          <li
            key={project.title}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <Globe
                  className="h-5 w-5 mt-1 text-slate-500 dark:text-slate-400 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 dark:border-neutral-600 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Visit site
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 dark:border-neutral-600 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Code
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-neutral-100 dark:bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.intro}
            </p>

            <section className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                What I built
              </h3>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                Stuff I cared about
              </h3>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.caredAbout.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <span className="font-semibold text-neutral-900 dark:text-white">
                What I learned:{" "}
              </span>
              {project.learned}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-500 text-center">
        More projects on the way. 🤓
      </p>
    </div>
  );
}
