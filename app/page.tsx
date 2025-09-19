import React from 'react'
import Link from 'next/link'

const page = () => {
  const highlights = [
    { number: "3+", label: "Years Learning" },
    { number: "10+", label: "Projects Built" },
    { number: "2", label: "Certificates" }
  ];

  const quickStats = [
    { icon: "🎓", title: "Student", desc: "Computer Engineering at Islamic Azad University" },
    { icon: "📍", title: "Location", desc: "Tehran, Iran" },
    { icon: "💻", title: "Focus", desc: "Frontend Development" },
    { icon: "📚", title: "Learning", desc: "Always exploring new technologies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-heading)]/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-heading)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--color-heading)] mb-6 leading-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-[var(--color-heading)] via-blue-400 to-purple-500 bg-clip-text text-transparent">Hatam</span>
              <br />
              <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-text)]">
                Frontend Developer
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--color-text)]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Computer Engineering student from Iran at Islamic Azad University. 
              Passionate about creating beautiful, responsive web experiences with modern frontend technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-heading)] text-white font-semibold rounded-full hover:bg-[var(--color-heading)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 select-none"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[var(--color-heading)] text-[var(--color-heading)] font-semibold rounded-full hover:bg-[var(--color-heading)] hover:text-white transition-all duration-300 select-none"
            >
              <span>Get in Toch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {highlights.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text)]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              👨‍💻 About Me
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto leading-relaxed">
              I&apos;m a passionate Computer Engineering student from Iran, dedicated to creating beautiful and functional web experiences. 
              Here&apos;s a quick overview of who I am and what drives me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[var(--color-heading)]/30 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm text-[var(--color-text)]/70 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
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

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              🚀 Ready to Work Together?
            </h2>
            <p className="text-lg text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects. 
              Let&apos;s build something great together!
            </p>
            <Link 
              href="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-heading)] text-white font-semibold rounded-full hover:bg-[var(--color-heading)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 select-none"
            >
              <span>View My Work</span>
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

export default page