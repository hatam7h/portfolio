"use client";

import React, { useState } from 'react'
import Link from 'next/link'

export default function WorkPage() {
  const projects = [

    
    // pause projects 
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and user authentication. Includes payment integration, order management, and an admin dashboard for comprehensive store management.",
      technologies: ["Next.js", "TypeScript", "Redux", "Node.js", "MongoDB", "Express"],
      emoji: "🛒",
      liveUrl: "https://ecommerce.hatamh.com/",
      githubUrl: "https://github.com/hatam7h/e-commerce-platform",
      featured: true,
      category: "Full Stack",
      status: "Planned"
    },

    {
      id: 3,
      title: "Financial Management App",
      description: "A personal finance tracker built with React, featuring expense tracking, budget planning, and financial analytics. Includes interactive data visualization and investment portfolio management capabilities.",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS", "Redux"],
      emoji: "💰",
      liveUrl: "https://financial.hatamh.com/",
      githubUrl: "https://github.com/hatam7h/financial-management-app",
      featured: true,
      category: "Web App",
      status: "Planned"
    },

    {
      id: 5,
      title: "To-Do List App",
      description: "A sleek task management app built with React, featuring task creation, editing, and completion tracking. Includes categories and local storage for persistent task management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      emoji: "✅",
      liveUrl: "https://todo.hatamh.com/",
      githubUrl: "https://github.com/hatam7h/to-do-list",
      featured: false,
      category: "Web App",
      status: "Planned"
    },
 
    // Completed Projects    
    {
      id: 2,
      title: "Math Solver App",
      description: "A powerful mathematics problem solver built with Next.js, featuring equation solving, step-by-step solutions, and graphing capabilities. Showcases clean interface design and advanced algorithm implementation.",
      technologies: ["JavaScript", "Next.js", "Tailwind CSS", "Mathematical Algorithms", "Responsive Design"],
      emoji: "🧮",
      liveUrl: "https://mathsolver.hatamh.com/",
      githubUrl: "https://github.com/hatam7h/math-solver",
      featured: false,
      category: "Web App",
      status: "Live"
    },

    {
      id: 1,
      title: "Car Racing Game",
      description: "A high-performance car racing game built with vanilla JavaScript, featuring realistic physics, responsive controls, and engaging gameplay. Demonstrates advanced DOM manipulation and game development skills.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Game Physics"],
      emoji: "🏎️",
      liveUrl: "https://racerz.hatamh.com/",
      githubUrl: "https://github.com/hatam7h/racerz",
      featured: false,
      category: "Game",
      status: "Live"
    },   

    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js, showcasing projects and skills with modern web technologies. Features clean design and smooth animations for an engaging user experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      emoji: "💼",
      liveUrl: "https://hatamh.com",
      githubUrl: "https://github.com/hatam7h/portfolio",
      featured: false,
      category: "Frontend",
      status: "Live"
    },


  ];

  const categories = ["All", "Game", "Web App", "Full Stack", "Frontend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    emoji: string;
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    category: string;
    status: string;
  };

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter((project: Project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project: Project) => project.featured);

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-heading)] mb-6 sm:mb-8">
            🎨 My Work & Projects
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed mb-8">
            Welcome to my digital showcase! Here you&apos;ll find a collection of projects that represent my journey as a frontend developer. 
            Each project tells a story of learning, creativity, and problem-solving.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)]">3+</div>
              <div className="text-sm text-[var(--color-text)]/70">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)]">10+</div>
              <div className="text-sm text-[var(--color-text)]/70">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)]">7+</div>
              <div className="text-sm text-[var(--color-text)]/70">Technologies</div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-10 text-center">
            ⭐ Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-[var(--color-heading)]/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-[var(--color-heading)]/20 to-[var(--color-heading)]/5 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300 select-none">{project.emoji}</div>
                  <div className="absolute top-4 right-4 curso">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium select-none ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-[var(--color-heading)]/20 text-[var(--color-heading)] rounded-full text-sm font-semibold border border-[var(--color-heading)]/30 select-none">
                      {project.category}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30 animate-pulse select-none">
                      ⭐ Featured
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-heading)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-[var(--color-text)]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/10 text-[var(--color-text)] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--color-heading)] to-[var(--color-heading)]/80 text-white font-bold rounded-xl hover:from-[var(--color-heading)]/90 hover:to-[var(--color-heading)]/70 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 select-none"
                    >
                      🚀 Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-white/10 text-[var(--color-text)] font-bold rounded-xl hover:bg-white/20 transition-all duration-200 text-center border border-white/20 hover:border-white/40 transform hover:-translate-y-1 select-none"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-10 text-center">
            💻 All Projects
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[var(--color-heading)] text-white'
                    : 'bg-white/10 text-[var(--color-text)] hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-[var(--color-heading)]/30 transition-all duration-300 group hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-[var(--color-heading)]/20 to-[var(--color-heading)]/5 flex items-center justify-center relative">
                  <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 select-none">{project.emoji}</div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium select-none ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[var(--color-heading)]/20 text-[var(--color-heading)] rounded-full text-sm font-semibold border border-[var(--color-heading)]/30 select-none">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30 select-none">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-heading)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text)]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-white/10 text-[var(--color-text)] rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-[var(--color-text)] rounded text-xs select-none">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[var(--color-heading)] to-[var(--color-heading)]/80 text-white font-semibold rounded-lg hover:from-[var(--color-heading)]/90 hover:to-[var(--color-heading)]/70 transition-all duration-200 text-center text-sm transform hover:-translate-y-0.5 select-none"
                    >
                      🚀 Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/10 text-[var(--color-text)] font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 text-center text-sm border border-white/20 hover:border-white/40 transform hover:-translate-y-0.5 select-none"
                    >
                      💻 Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              🤝 Like What You See?
            </h2>
            <p className="text-lg text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with amazing people. 
              Let&apos;s build something great together!
            </p>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-heading)] text-white font-semibold rounded-full hover:bg-[var(--color-heading)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 select-none"
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
