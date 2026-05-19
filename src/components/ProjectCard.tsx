"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Project, ProjectIcon } from "@/data/projects";

const icons: Record<ProjectIcon, LucideIcon> = {
  globe: Globe,
  sparkles: Sparkles,
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = icons[project.icon];
  const hasPrimaryLinks = project.href && project.github;
  const githubOnly = project.github && !project.href;

  const buttonLinkClass =
    "inline-flex items-center gap-1 rounded-md border border-neutral-300 dark:border-neutral-600 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors";
  const textLinkClass =
    "inline-flex items-center gap-0.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors";

  return (
    <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <Icon
            className="h-5 w-5 mt-1 text-slate-500 dark:text-slate-400 shrink-0"
            strokeWidth={1.5}
            aria-hidden
          />
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {project.subtitle}
            </p>
            {githubOnly && (
              <Link
                href={project.github!}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 ${textLinkClass}`}
              >
                View code on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            )}
            {project.badge && (
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                {project.badge}
              </p>
            )}
          </div>
        </div>
        {hasPrimaryLinks && (
          <div className="flex flex-wrap gap-2 shrink-0">
            <Link
              href={project.href!}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonLinkClass}
            >
              Visit site
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href={project.github!}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonLinkClass}
            >
              Code
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        )}
      </div>

      <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {project.intro}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-100 dark:bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <section>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              What I built
            </h3>
            {project.builtSources && (
              <div className="mt-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 px-4 py-3">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-500">
                  {project.builtSourcesLabel ?? "Three data sources"}
                </p>
                <ul className="mt-2 space-y-1.5 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.builtSources.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <ul
              className={`space-y-1.5 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed ${
                project.builtSources ? "mt-5" : "mt-2"
              }`}
            >
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              {project.iterationsTitle ?? "Iterations along the way"}
            </h3>
            <ul className="mt-2 space-y-1.5 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.iterations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-900 dark:text-white">
              What I learned:{" "}
            </span>
            {project.learned}
          </p>
        </div>
      )}
    </li>
  );
}
