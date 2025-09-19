"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0;
      setProgress(pct);
      setVisible(y > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const ringBg = `conic-gradient(var(--color-heading) ${progress}%, rgba(255,255,255,0.08) 0)`;

  return (
    <span
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 inline-flex p-[2px] rounded-full shadow-lg backdrop-blur-lg transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{ backgroundImage: ringBg }}
      aria-hidden={false}
    >
      <button
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={scrollToTop}
        className="cursor-pointer group relative h-11 w-11 flex items-center justify-center rounded-full border border-white/15 bg-black/40 text-white hover:bg-[var(--color-heading)] hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-heading)]/70 focus:ring-offset-2 focus:ring-offset-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true">
          <path fillRule="evenodd" d="M12 8.47l-5.25 5.25a.75.75 0 11-1.06-1.06l5.78-5.78a.75.75 0 011.06 0l5.78 5.78a.75.75 0 11-1.06 1.06L12 8.47z" clipRule="evenodd" />
        </svg>
      </button>
    </span>
  );
}
