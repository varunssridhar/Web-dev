import {
  Target,
  Layers,
  BarChart3,
  Heart,
} from "lucide-react";

const philosophy = [
  {
    icon: Target,
    title: "Impact over Velocity",
    description: "Shifting the needle on North Star metrics, not just clearing a backlog.",
  },
  {
    icon: Layers,
    title: "Architecture for Scale",
    description: "Building high-quality, predictable systems that can handle institutional-grade volume.",
  },
  {
    icon: BarChart3,
    title: "Intuition Backed by Data",
    description: "Using signals to validate hypotheses while maintaining a strong product vision for the 'why.'",
  },
  {
    icon: Heart,
    title: "Solving Real Needs",
    description: "Reducing friction by obsessively validating user pain points through rapid prototyping and direct feedback.",
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
            I&apos;m a creative and analytical product leader with a track record of leading zero-to-one and scale-up products in FinTech. I build AI-powered products and experiences at the intersection of payments, embedded financing, and credit risk.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8">
            Product Philosophy
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-0"
              >
                <Icon
                  className="h-5 w-5 text-slate-500 dark:text-slate-400"
                  strokeWidth={1}
                />
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

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            Outside the office
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-neutral-600 dark:text-neutral-400">
            <p className="leading-relaxed">
              When I&apos;m not working, I&apos;m usually focused on two things: staying active and exploring the world.
            </p>
            <p className="leading-relaxed">
              I grew up playing tennis and soccer, and while I&apos;ve traded the varsity experience for recreational matches on the weekends, I still love the competitive energy of both sports. Lately, that&apos;s translated into a new obsession: skiing. I picked up the sport much later in life than most, but I&apos;ve absolutely fallen in love with it—my focus now is just putting in the miles to keep getting better.
            </p>
            <p className="leading-relaxed">
              That same drive to stay in motion is why I make it a priority to get out of NYC as often as possible to see how the rest of the world lives. But I&apos;m also a big believer that this is the best food city in the world, and I&apos;m on a never-ending mission to find the next great meal across the five boroughs.
            </p>
            <div className="pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
                Currently chasing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="opacity-70 shrink-0" aria-hidden>🎿</span>
                  <span className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Fresh powder (and trying not to catch an edge)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="opacity-70 shrink-0" aria-hidden>✈️</span>
                  <span className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    The perfect sunset (in breathtaking surroundings)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="opacity-70 shrink-0" aria-hidden>🍝</span>
                  <span className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    The city&apos;s best spicy vodka pasta (recommendations welcome)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
