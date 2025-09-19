import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import SkipLink from "@/components/SkipLink";
import BackToTop from "@/components/BackToTop";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  ...siteConfig.metadata,
  icons: {
    icon: [
      { url: '/cube.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
      { url: '/cube.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/cube.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden">
        <SkipLink />
        <Navbar />
        <main id="content" className="pb-16 sm:pb-20 focus:outline-none">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
