import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { FaPaperPlane } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  // Reusable styles
  const socialBase =
    "inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-colors duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-heading)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  const socialPrimary =
    "bg-[var(--color-heading)]/20 border-[var(--color-heading)]/30 text-[var(--color-heading)] hover:bg-[var(--color-heading)]/30 hover:border-[var(--color-heading)]/40";
  const socialNeutral =
    "bg-white/10 border-white/20 text-[var(--color-text)] hover:bg-white/20 hover:text-[var(--color-heading)] hover:border-[var(--color-heading)]/30";
  const explorePill =
    "inline-flex items-center justify-center h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold whitespace-nowrap w-full rounded-full border border-white/15 hover:border-white/25 bg-white/5 hover:bg-white/10 text-[var(--color-text)] hover:text-[var(--color-heading)] transition-colors";

  // Navigation links (Explore)
  const navLinks = [
    { href: "/", label: "🏠 Home" },
    { href: "/about", label: "👨‍💻 About" },
    { href: "/skills", label: "🛠️ Skills" },
    { href: "/work", label: "💼 Work" },
    { href: "/contact", label: "📞 Contact" },
  ] as const
  
  const techLove = ["Next.js", "TypeScript", "Tailwind", "React"]

  return (
    <footer
      className="bg-gradient-to-t from-black/60 to-black/40 backdrop-blur-sm border-t border-white/20 mt-20 relative overflow-hidden"
      role="contentinfo"
      aria-labelledby="footerHeading"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-heading)]/5 to-purple-500/5"></div>
      <div className="pointer-events-none absolute top-0 left-1/4 w-32 h-32 bg-[var(--color-heading)]/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 id="footerHeading" className="sr-only">Site footer</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="footer-brand"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div>
              <h3 id="footer-brand" className="text-3xl font-bold text-[var(--color-heading)] mb-2 flex items-center gap-2" itemProp="name">
                Hatam Hashemi
              </h3>
              <p className="text-lg text-[var(--color-heading)]/80 font-medium mb-4" itemProp="jobTitle">
                Frontend Developer
              </p>
              <p className="text-[var(--color-text)]/80 leading-relaxed max-w-md" itemProp="description">
                Computer Engineering student passionate about creating beautiful, responsive web experiences. 
                I love turning ideas into reality through clean code and thoughtful design!
              </p>
            </div>

            {/* Social Links (icons only) */}
            <div className="flex flex-wrap gap-2 sm:gap-3" aria-label="Social links">
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBase} ${socialNeutral}`}
                aria-label="GitHub profile"
                title="GitHub"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBase} ${socialNeutral}`}
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.67c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V23h-4V8z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={siteConfig.author.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBase} ${socialNeutral}`}
                aria-label="Telegram"
                title="Telegram"
              >
                <FaPaperPlane className="w-5 h-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </section>

          {/* Quick Navigation */}
          <nav aria-label="Footer navigation" className="w-full sm:max-w-xl">
            <h4 className="text-xl font-semibold text-[var(--color-heading)] mb-3 sm:mb-4 flex items-center gap-2">
              🧭 Explore
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 justify-items-stretch">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                     href={link.href} 
                     className={explorePill}
                   >
                     {link.label}
                   </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tech & Status */}
          <div>
            <h4 className="text-xl font-semibold text-[var(--color-heading)] mb-6 flex items-center gap-2">
              💻 Currently
            </h4>
            
            <div className="space-y-6">
              {/* Status */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 select-none">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">Available for Freelance Work</span>
                </div>
                <p className="text-xs text-[var(--color-text)]/70">
                  Open to freelance projects and collaborations
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h5 className="text-sm font-medium text-[var(--color-heading)] mb-3">❤️ Loving</h5>
                <div className="flex flex-wrap gap-2">
                  {techLove.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-[var(--color-heading)]/20 text-[var(--color-heading)] rounded text-xs font-medium border border-[var(--color-heading)]/30 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-[var(--color-text)]/60 text-sm">
                © {currentYear} Hatam Hashemi
              </p>
              <p className="text-[var(--color-text)]/40 text-xs mt-1">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
            
            <address className="not-italic flex items-center gap-2 text-xs text-[var(--color-text)]/60" aria-label="Location">
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                🌍 <span itemProp="addressCountry">Iran</span>
              </span>
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}