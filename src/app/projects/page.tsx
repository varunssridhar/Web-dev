import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Things I&apos;ve built for fun, at work, or because I needed them.
        </p>
      </header>

      <ul className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-500 text-center">
        More projects on the way. 🤓
      </p>
    </div>
  );
}
