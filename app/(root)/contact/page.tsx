import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "✉️",
      title: "Email Me",
      description: "Best way to reach me for projects and collaborations",
      contact: "hatam07h@gmail.com",
      href: "mailto:hatam07h@gmail.com",
      available: "Usually responds within 24 hours"
    },
    {
      icon: "📱",
      title: "Telegram",
      description: "Message me directly on Telegram",
      contact: "@hatam7h",
      href: "https://t.me/hatam7h",
      available: "Quick response time"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with me professionally",
      contact: "linkedin.com/in/hatam7h",
      href: "https://linkedin.com/in/hatam7h",
      available: "Professional networking"
    },
  ]

  const quickInfo = [
    { icon: "📍", label: "Location", value: "Tehran, Iran" },
    { icon: "🏫", label: "University", value: "Islamic Azad University" },
    { icon: "💡", label: "Specialization", value: "Frontend Development" },
    { icon: "🕒", label: "Timezone", value: "GMT+3:30 (Iran)" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-heading)]/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-heading)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[var(--color-text)]">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-heading)] mb-6">
              Let&apos;s Work Together!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--color-text)]/80 max-w-3xl mx-auto leading-relaxed">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects. 
              Whether you need a website, have a question, or just want to chat about technology, I&apos;d love to hear from you!
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {quickInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{info.icon}</div>
                <div className="text-xs text-[var(--color-text)]/60 mb-1">{info.label}</div>
                <div className="text-sm font-medium text-[var(--color-text)]">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              Send Me a Message
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text)]/80 max-w-2xl mx-auto">
              Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible!
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text)]/80 max-w-2xl mx-auto">
              Choose your preferred way to connect with me. I&apos;m responsive and always happy to discuss new opportunities!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 select-none">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-[var(--color-heading)]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3 group-hover:text-[var(--color-heading)] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-[var(--color-text)]/70 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-sm font-medium text-[var(--color-heading)] mb-2">
                    {method.contact}
                  </div>
                  <div className="text-xs text-[var(--color-text)]/60">
                    {method.available}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              ✨ Want to Know More About Me?
            </h2>
            <p className="text-lg text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
              Discover my journey, skills, and experience in web development. 
              Let's explore how I can help bring your ideas to life!
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-heading)] text-white font-semibold rounded-full hover:bg-[var(--color-heading)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 select-none"
            >
              <span>Learn More About Me</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
