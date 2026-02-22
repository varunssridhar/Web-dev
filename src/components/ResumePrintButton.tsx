"use client";

import { Printer } from "lucide-react";

export function ResumePrintButton() {
  const handlePrint = () => window.print();

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="no-print inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Print or save resume as PDF"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
