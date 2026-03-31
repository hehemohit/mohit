"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["ALL PROJECTS", "AI & EDTECH", "WEB DEVELOPMENT", "GAME DEV"];

const projects = [
  {
    title: "EduAble Platform",
    category: "AI & EDTECH",
    description: "AI-driven accessibility platform designed to empower differently-abled students with real-time learning tools.",
    technologies: ["React", "Node.js", "GCP", "Gemini API"],
    year: "2025",
    id: "01"
  },
  {
    title: "StudyApp AI",
    category: "AI & EDTECH",
    description: "Gemini-powered productivity tool that automates study schedules and generates context-aware summaries.",
    technologies: ["Next.js", "TailwindCSS", "Gemini API", "Clerk"],
    year: "2025",
    id: "02"
  },
  {
    title: "Unity Framework",
    category: "GAME DEV",
    description: "Modular FPS architecture built for Unity, featuring decoupled physics and high-performance rendering pipelines.",
    technologies: ["Unity", "C#", "HLSL", "Scriptable Objects"],
    year: "2024",
    id: "03"
  },
  {
    title: "Parcos Magento",
    category: "WEB DEVELOPMENT",
    description: "High-performance Magento 2 storefront optimization for Parcos, driving a 23.6% increase in conversion rates.",
    technologies: ["Magento 2", "PHP", "MySQL", "Varnish"],
    year: "2025",
    id: "04"
  }
];

import ProjectCard from '../ui/ProjectCard';

export const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");

  const filteredProjects = activeCategory === "ALL PROJECTS"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-12 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
    >
      {/* Background Watermark 03 */}
      <div className="absolute bottom-[-4%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
        <span className="font-headline font-black text-[clamp(250px,45vw,700px)] text-primary transition-colors duration-700 block translate-x-[15%]">
          02
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="font-headline font-black text-[52px] sm:text-[72px] md:text-[96px] lg:text-[112px] tracking-tighter uppercase leading-[0.85] text-white">
            PROJECTS
          </h2>

          {/* Filter Tabs */}
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 pb-4 border-b border-outline-variant">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative font-label text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-200 pb-4 whitespace-nowrap ${
                  activeCategory === cat ? "text-on-surface" : "text-outline/40 hover:text-outline"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
