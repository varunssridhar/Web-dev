import { FolderOpen } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <FolderOpen className="h-16 w-16 text-neutral-300 dark:text-neutral-600 mb-6" />
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-md">
          Hobby projects and case studies will go here. Coming soon... 🤓
        </p>
      </div>
    </div>
  );
}
