"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: "FRONTEND & WEB",
    skills: ["React/MERN", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
  },
  {
    label: "BACKEND & CMS",
    skills: ["Node.js", "Magento 2", "PHP", "REST APIs", "SQL"]
  },
  {
    label: "CLOUD & TOOLS",
    skills: ["GCP", "GCS", "Linux", "Git", "Postman"]
  },
  {
    label: "GAME DEV & AI",
    skills: ["Unity", "C#", "HLSL", "Gemini AI", "Prompt Engineering"]
  }
];

function SkillTag({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="font-label text-[11px] sm:text-[12px] md:text-[13px] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border-2 border-white/20 bg-black text-white/70 cursor-default transition-all duration-300 hover:border-white hover:text-white hover:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]"
    >
      {label}
    </motion.div>
  );
}

function CategoryBlock({ category, index }: { category: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      <h3 className="font-label text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white font-black mb-4 md:mb-6">
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {category.skills.map((skill: string) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export const SkillsSection = () => (
    <section
      id="skills"
      className="relative min-h-screen px-6 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24 max-w-7xl mx-auto w-full">
        <h2 className="font-headline font-black text-[clamp(48px,15vw,160px)] tracking-tighter uppercase leading-[0.75] text-white">
          SKILLS
        </h2>
      </div>
  
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-12 md:gap-y-16 max-w-7xl mx-auto w-full relative z-10">
        {skillCategories.map((cat, i) => (
          <CategoryBlock key={cat.label} category={cat} index={i} />
        ))}
      </div>

    {/* Background Watermark 04 */}
    <div className="absolute bottom-[2%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
      <span className="font-headline font-black text-[clamp(200px,38vw,600px)] text-primary transition-colors duration-700 block translate-x-[15%]">
        04
      </span>
    </div>
  </section>
);
