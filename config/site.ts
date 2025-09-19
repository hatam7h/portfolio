import type { Metadata } from "next";

// Site configuration constants
export const siteConfig = {
  name: "Hatam Hashemi",
  title: "Hatam Hashemi - Frontend Developer & Computer Engineering Student",
  description: "Frontend Developer from Iran specializing in React, Next.js, and modern web technologies. Computer Engineering student passionate about creating beautiful, responsive web experiences.",
  url: "https://hatamh.com",
  ogImage: "/og-image.jpg",
  
  // Personal information
  author: {
    name: "Hatam Hashemi",
    email: "hatam07h@gmail.com",
    github: "https://github.com/hatam7h",
    linkedin: "https://linkedin.com/in/hatam7h",
    telegram: "https://t.me/hatam7h",
  },

  // SEO keywords
  keywords: [
    "Hatam Hashemi",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Iran",
    "Computer Engineering",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio"
  ],

  // Metadata configuration
  metadata: {
    title: {
      default: "Hatam Hashemi - Frontend Developer & Computer Engineering Student",
      template: "%s | Hatam Hashemi"
    },
    description: "Frontend Developer from Iran specializing in React, Next.js, and modern web technologies. Computer Engineering student passionate about creating beautiful, responsive web experiences.",
    keywords: [
      "Hatam Hashemi",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer Iran",
      "Computer Engineering",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Portfolio"
    ],
    authors: [{ name: "Hatam Hashemi" }],
    creator: "Hatam Hashemi",
    publisher: "Hatam Hashemi",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://hatamh.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://hatamh.com",
      title: "Hatam Hashemi - Frontend Developer & Computer Engineering Student",
      description: "Frontend Developer from Iran specializing in React, Next.js, and modern web technologies. Computer Engineering student passionate about creating beautiful, responsive web experiences.",
      siteName: "Hatam Hashemi Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Hatam Hashemi - Frontend Developer Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hatam Hashemi - Frontend Developer & Computer Engineering Student",
      description: "Frontend Developer from Iran specializing in React, Next.js, and modern web technologies.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  } as Metadata,
} as const;
