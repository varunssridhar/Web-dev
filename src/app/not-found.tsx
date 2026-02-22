import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
