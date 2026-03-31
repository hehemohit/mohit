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

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{
        opacity: { duration: 0.6, ease: "easeInOut" },
        y: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 },
        scale: { duration: 0.5, ease: "easeInOut" },
      }}
      className="group flex flex-col bg-black border-2 border-white/20 p-8 transition-all duration-500 shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] hover:border-white hover:shadow-[4px_4px_0_0_rgba(255,49,49,0.5)] hover:translate-x-[4px] hover:translate-y-[4px] h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="bg-white text-black font-label font-black text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 flex items-center justify-center border border-white">
          {project.category}
        </span>
      </div>

      <h3 className="font-headline font-black text-2xl md:text-3xl leading-none tracking-tighter uppercase mb-4 text-white group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      <p className="font-body text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium flex-1 mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="font-label text-[9px] font-bold text-white/40 border border-white/20 px-2 py-1 uppercase tracking-wider group-hover:border-white/40 group-hover:text-white transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center group-hover:border-white/20 transition-colors duration-300">
        <span className="font-label text-[11px] font-bold text-white/30 tracking-widest">
          {project.year}
        </span>
        <div className="w-10 h-10 flex items-center justify-center border-2 border-white/20 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
          <span className="material-symbols-outlined text-sm">north_east</span>
        </div>
      </div>
    </motion.div>
  );
}

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
      <div className="absolute bottom-[-10%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
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
