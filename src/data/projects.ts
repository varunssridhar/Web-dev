export type ProjectIcon = "globe" | "sparkles";

export type Project = {
  title: string;
  subtitle: string;
  icon: ProjectIcon;
  href?: string;
  github?: string;
  badge?: string;
  stack: string[];
  intro: string;
  built: string[];
  builtSources?: string[];
  builtSourcesLabel?: string;
  iterations: string[];
  iterationsTitle?: string;
  learned: string;
};

export const projects: Project[] = [
  {
    title: "varunsridhar.com",
    subtitle: "My internet home — the site you're on right now.",
    icon: "globe",
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
    iterationsTitle: "Stuff I kept in mind",
    iterations: [
      "One resume, two outputs — the page is the source of truth; a script snapshots it to a PDF so I'm not maintaining Word and HTML separately.",
      "Print that doesn't suck — nav and chrome hidden when you print, spacing tuned for Letter size.",
      "Light/dark mode — follows your system, no weird flash on load.",
      "Ship and tweak — push to GitHub, Vercel deploys; custom domain on Cloudflare.",
    ],
    learned:
      "Building your own site is the same game as product work: scope, copy, and knowing when \"good enough\" beats one more polish pass. Keeping the stack small means I can change a resume bullet and redeploy in minutes.",
  },
  {
    title: "Product Insights",
    subtitle: "Turning call transcripts and Slack noise into ranked, quotable product signal.",
    icon: "sparkles",
    badge: "Internal · no public repo",
    stack: ["Claude", "Google Sheets", "Cloud Run", "GCS", "Slack", "Jira"],
    intro:
      "I was watching a lot of customer calls—every one transcribed, none of it connected. AMs and vendors were logging feature asks in Slack daily. The signal was everywhere; the synthesis wasn't. I could've written a spec and waited. Instead I spent a week of evenings and shipped something I actually use in my current role.",
    builtSourcesLabel: "Three data sources",
    builtSources: [
      "Call transcripts from our AI notetaker (via Sheets—easier to iterate on).",
      "Historical Slack requests from Jira Product Discovery (~6–7 months of backfill—Slack's API only goes back 90 days).",
      "Daily Slack search across all vendor channels for new asks as they come in.",
    ],
    built: [
      "All three feed into Claude—each item classified as a feature request or pain point, semantically similar themes merged, and every insight attributed to the vendor and the channel it came from.",
      "One place to browse those insights with source quotes and mention counts, sorted so the loudest signal rises to the top.",
      "Daily sync on a schedule; new data processes incrementally in seconds.",
    ],
    iterationsTitle: "Iterations along the way",
    iterations: [
      "Day one was deceptively easy—Claude handled messy meeting titles and merging themes without me writing rules. The hard part was everything after.",
      "Jira Product Discovery doesn't expose normal search—so I had to fetch tickets by key with concurrent requests and parse descriptions from nested JSON, not plain text.",
      "Cross-batch duplicates—Claude merges within a batch, not across them. Fix: pass existing insight IDs and titles into every synthesis run so semantic matches reuse IDs; plus a one-click AI dedup and manual merge UI for stragglers.",
      "Cloud Run scales to zero—cron and local state don't survive deploys. Moved persistence to GCS and triggers to Cloud Scheduler over HTTP POST.",
    ],
    learned:
      "The gap between \"I have an idea\" and \"this is in production\" should be days, not sprints. This didn't replace engineering—it made me walk into planning with ranked customer asks and receipts, not a quarterly survey.",
  },
];
