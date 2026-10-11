import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HOME_ROUTE } from "@/lib/constant";
import { HeaderUser } from "./HeaderUser";

// Shared shell for every page behind login (/home, /form, /settings).
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <header className="app-header">
        <Link href={HOME_ROUTE} aria-label="IDC home" className="shrink-0">
          <Logo className="h-9 w-auto" />
        </Link>
        {/* Reads the session cookie, so it streams in behind a boundary */}
        <Suspense fallback={<div className="h-10 w-40 animate-pulse rounded-lg bg-slate-100" />}>
          <HeaderUser />
        </Suspense>
      </header>
      <main className="page-container animate-fade-up motion-reduce:animate-none">
        {children}
      </main>
    </div>
  );
}
