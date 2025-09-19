"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="inline-flex backdrop-blur-xl bg-black/20 rounded-full px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 max-w-fit border border-white/10">
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-white font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 sm:px-3 lg:px-4 py-1 sm:py-2 transition-all duration-200 rounded-full ${
                pathname === item.href
                  ? "text-white bg-white/10"
                  : "text-white hover:text-blue-200 hover:bg-white/5"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span className="relative z-10">{item.label}</span>
              {pathname === item.href && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-heading)]/20 to-[var(--color-heading)]/10 backdrop-blur-md rounded-full pointer-events-none border border-[var(--color-heading)]/30" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
