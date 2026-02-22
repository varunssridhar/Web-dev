"use client";

import { useEffect, useState } from "react";

/**
 * Renders children only after mount on the client. Server and initial client
 * render return null, so there is no hydration mismatch. Use for theme toggle etc.
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}
