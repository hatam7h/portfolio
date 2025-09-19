import Link from 'next/link'

export default function SkipLink() {
  return (
    <Link
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--color-heading)] focus:text-black font-semibold shadow-lg"
    >
      Skip to content
    </Link>
  )
}
