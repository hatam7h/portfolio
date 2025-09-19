"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Background accents to match 404 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-heading)]/10 via-transparent to-white/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-heading)]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md shadow-2xl">
          <div className="px-8 sm:px-12 py-14 text-center">
            <div className="select-none text-6xl sm:text-7xl font-extrabold tracking-tighter">
              <span className="bg-gradient-to-r from-[var(--color-heading)] to-white/70 bg-clip-text text-transparent">Error</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-heading)]">Something went wrong</h1>
            <p className="mt-3 text-white/75 max-w-xl mx-auto">
              An unexpected error occurred while rendering this page.
            </p>
            {error?.digest && (
              <p className="mt-2 text-xs text-white/50">Error ID: {error.digest}</p>
            )}

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[var(--color-heading)] text-black font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-heading)] focus:ring-offset-2 focus:ring-offset-black transition"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-heading)]/60 focus:ring-offset-2 focus:ring-offset-black transition"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
