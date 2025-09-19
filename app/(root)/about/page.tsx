import React from 'react'

export default function AboutPage() {
  const journey = [
    {
      year: "2022",
      title: "Started Web Development",
      description: "Began my journey with HTML, CSS, and JavaScript, building my first websites and discovering my passion for creating digital experiences."
    },
    {
      year: "2023",
      title: "Mastered React & Modern Tools",
      description: "Dove deep into React ecosystem, learned TypeScript, and started building complex single-page applications with modern development practices."
    },
    {
      year: "2024",
      title: "Professional Development",
      description: "Expanded into full-stack development with Next.js, Node.js, and database technologies. Started taking on client projects and freelance work."
    },
    {
      year: "2025",
      title: "Advanced Expertise",
      description: "Specialized in performance optimization, accessibility, and modern deployment strategies. Building scalable applications for businesses."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "I believe in writing clean, maintainable code that stands the test of time and scales with your business needs."
    },
    {
      icon: "🚀",
      title: "Performance Focused",
      description: "Every line of code is optimized for speed and efficiency, ensuring your users have the best possible experience."
    },
    {
      icon: "🤝",
      title: "Collaborative Approach",
      description: "I work closely with clients and teams to understand requirements and deliver solutions that exceed expectations."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices."
    }
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-heading)] mb-10 sm:mb-16 text-center">
          👋 About Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Personal Introduction */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-heading)] mb-6">
                🌟 Who I Am
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-text)]/80 max-w-3xl mx-auto leading-relaxed">
                Welcome to my digital space! I&apos;m Hatam Hashemi, a Computer Engineering student from Iran 
                studying at Islamic Azad University. My journey in web development started 3 years ago with curiosity 
                and has evolved into a deep passion for creating beautiful, responsive web experiences.
              </p>
              <p className="text-base sm:text-lg text-[var(--color-text)] leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, learning through online courses, or working on personal projects. 
                I believe that continuous learning and practice are key to becoming a better developer.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-heading)] mb-6">
                💼 What I Do
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text)] leading-relaxed mb-4">
                I specialize in building responsive web applications using cutting-edge technologies. My expertise includes:
              </p>
              <ul className="space-y-3 text-base sm:text-lg text-[var(--color-text)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-heading)] mt-1">🎨</span>
                  <span>Frontend development with React, Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-heading)] mt-1">📱</span>
                  <span>Responsive design and mobile-first development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-heading)] mt-1">⚡</span>
                  <span>Performance optimization and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-heading)] mt-1">🛠️</span>
                  <span>Modern CSS frameworks and styling solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-heading)] mt-1">🔧</span>
                  <span>Backend integration and API development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-heading)] mb-8">
              🚀 My Journey
            </h2>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[var(--color-heading)]/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--color-heading)] rounded-full"></div>
                  <div className="text-sm font-semibold text-[var(--color-heading)] mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--color-text)]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-10 text-center">
            💎 My Values & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4 select-none">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-heading)] mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-[var(--color-text)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-heading)] mb-8">
              🎓 Education & Learning
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                  Computer Engineering Student
                </h3>
                <p className="text-base text-[var(--color-text)]/80">
                  Islamic Azad University, Iran - Currently pursuing Bachelor&apos;s degree
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                  Certifications
                </h3>
                <ul className="text-base text-[var(--color-text)]/80 space-y-1">
                  <li>• ICDL (International Computer Driving License)</li>
                  <li>• JavaScript Certificate - FreeCodeCamp</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-heading)] mb-8">
              🎉 Fun Facts
            </h2>
            <div className="space-y-3 text-base text-[var(--color-text)]">
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-heading)]">☕</span>
                <span>I drink way too much coffee while coding</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-heading)]">🌙</span>
                <span>Night owl - my best code happens after 10 PM</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-heading)]">🎮</span>
                <span>Gaming helps me think through complex problems</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-heading)]">📖</span>
                <span>Always reading about new technologies and trends</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-heading)]">🏃</span>
                <span>Running helps clear my mind and boost creativity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
