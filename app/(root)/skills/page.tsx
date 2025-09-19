import React from 'react'

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Building modern, responsive user interfaces",
      skills: [
        { name: "HTML", proficiency: 90, experience: "3 years" },
        { name: "CSS", proficiency: 90, experience: "3 years" },
        { name: "JavaScript", proficiency: 70, experience: "3 years" },
        { name: "TypeScript", proficiency: 60, experience: "2 years" },
        { name: "React", proficiency: 80, experience: "2 years" },
        { name: "Next.js", proficiency: 60, experience: "1 year" }
      ]
    },
    {
      title: "Styling & Design",
      icon: "🎨",
      description: "Creating beautiful, responsive designs",
      skills: [
        { name: "Tailwind CSS", proficiency: 80, experience: "2 years" },        
        { name: "CSS Grid & Flexbox", proficiency: 80, experience: "3 years" },
        { name: "Responsive Design", proficiency: 90, experience: "3 years" },
        { name: "Mobile-First Design", proficiency: 80, experience: "2 years" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      description: "Development tools and version control",
      skills: [
        { name: "Git", proficiency: 80, experience: "2 years" },
        { name: "GitHub", proficiency: 80, experience: "2 years" },
        { name: "VS Code", proficiency: 90, experience: "3 years" },
        { name: "Browser DevTools", proficiency: 80, experience: "3 years" }
      ]
    }
  ];

  const certifications = [
    {
      title: "ICDL (International Computer Driving License)",
      issuer: "ICDL Foundation",
      date: "2023",
      credentialId: "Verified"
    },
    {
      title: "JavaScript Certificate",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "Verified"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "10+ Projects Completed",
      description: "Successfully delivered projects ranging from simple websites to complex web applications"
    },
    {
      icon: "⭐",
      title: "100% Client Satisfaction",
      description: "Maintained perfect client satisfaction rating across all projects"
    },
    {
      icon: "🚀",
      title: "Performance Optimization Expert",
      description: "Specialized in improving website speed and Core Web Vitals scores"
    },
    {
      icon: "📱",
      title: "Mobile-First Advocate",
      description: "Expert in creating responsive designs that work seamlessly across all devices"
    }
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-heading)] mb-6 sm:mb-10">
            🛠️ Skills &amp; Technologies
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, experience levels, and professional achievements.
          </p>
        </div>

        {/* Skills Categories with Progress Bars */}
        <div className="space-y-8 sm:space-y-12 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-heading)]">
                    {category.title}
                  </h2>
                  <p className="text-base text-[var(--color-text)]/80">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium text-[var(--color-text)]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[var(--color-text)]/60">
                        {skill.experience}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-[var(--color-heading)] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[var(--color-heading)] font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-10 text-center">
            🏆 Achievements & Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4 select-none">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-heading)] mb-3">
                  {achievement.title}
                </h3>
                <p className="text-base text-[var(--color-text)] leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-10 text-center">
            🎓 Certifications & Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl select-none">🏅</div>
                  <span className="text-sm text-[var(--color-text)]/60 bg-white/10 px-3 py-1 rounded-full select-none">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-2">
                  {cert.title}
                </h3>
                <p className="text-base text-[var(--color-text)] mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-[var(--color-text)]/60">
                  Credential ID: {cert.credentialId}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-8">
              📚 Continuous Learning Philosophy
            </h2>
            <p className="text-lg text-[var(--color-text)] leading-relaxed max-w-3xl mx-auto mb-8">
              Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends and best practices. 
              I dedicate time each week to learning new technologies, contributing to open-source projects, and experimenting with emerging tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[var(--color-heading)] mb-2">8+</div>
                <div className="text-sm text-[var(--color-text)]/80">Hours per week learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-heading)] mb-2">5+</div>
                <div className="text-sm text-[var(--color-text)]/80">Open source contributions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-heading)] mb-2">10+</div>
                <div className="text-sm text-[var(--color-text)]/80">Online courses completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
