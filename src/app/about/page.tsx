import {
  Target,
  Layers,
  Users,
  BarChart3,
  Lightbulb,
  Zap,
} from "lucide-react";

const competencies = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Roadmaps, OKRs, and prioritization that align teams and stakeholders.",
  },
  {
    icon: Layers,
    title: "Execution",
    description: "Shipping on time with clear specs, cross-functional coordination, and quality bars.",
  },
  {
    icon: Users,
    title: "Stakeholder Leadership",
    description: "Communicating up and across to secure buy-in and unblock teams.",
  },
  {
    icon: BarChart3,
    title: "Data & Metrics",
    description: "Defining success, instrumenting products, and using data to decide.",
  },
  {
    icon: Lightbulb,
    title: "Discovery & Research",
    description: "User research, experimentation, and validation before build.",
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Process and tooling that keep delivery predictable and fast.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="space-y-20">
        <section>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            About
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            I&apos;m a Director of Product with a track record of leading zero-to-one and scale-up products. I care about clarity, craft, and outcomes—shipping things that matter and improving how teams work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            Product Philosophy
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-neutral-600 dark:text-neutral-400">
            <p className="leading-relaxed">
              <strong className="text-neutral-900 dark:text-white">Outcomes over output.</strong> Success is measured by impact on users and the business, not by the number of features shipped.
            </p>
            <p className="leading-relaxed">
              <strong className="text-neutral-900 dark:text-white">Ruthless prioritization.</strong> Saying no is part of the job. Focus creates clarity and enables teams to deliver their best work.
            </p>
            <p className="leading-relaxed">
              <strong className="text-neutral-900 dark:text-white">Users at the center.</strong> Deep understanding of problems and contexts leads to better products and fewer wrong bets.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8">
            Core Competencies
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-6"
              >
                <Icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                <h3 className="font-medium text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
