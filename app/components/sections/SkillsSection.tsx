"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: "LANGUAGES",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Kotlin", "C#"]
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    skills: ["React", "Node.js", "Express.js", "Next.js", "Spring Boot", "React Native", "LangGraph", "Zustand", "TanStack Query", "Tailwind CSS"]
  },
  {
    label: "DATABASES & STORAGE",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "SQLite", "Google Cloud Storage (GCS)"]
  },
  {
    label: "CLOUD & AI INFRASTRUCTURE",
    skills: ["AWS (ECS Fargate, Lambda, Bedrock)", "API Gateway", "Cognito", "ElastiCache Redis", "Strands Agents SDK", "Google Cloud Platform (GCP)", "Gemini API", "Prompt Engineering"]
  },
  {
    label: "PLATFORMS & DEVELOPER TOOLS",
    skills: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Linux (Ubuntu / Arch / Kali)", "Unity", "Magento"]
  },
  {
    label: "APIS & ARCHITECTURE",
    skills: ["REST APIs", "Socket.IO", "Server-Sent Events (SSE)", "Android Health Connect", "Multi-Agent Orchestration", "Supervisor-Worker Pattern", "LLM Contextual Reasoning", "Blackboard State Pattern"]
  }
];

function SkillTag({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      className="font-label text-[11px] sm:text-[12px] px-3.5 py-2 border border-primary/25 bg-black/60 text-neutral-200 cursor-default transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black hover:shadow-[3px_3px_0_0_rgba(255,49,49,0.35)]"
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
      className="border border-primary/20 bg-surface-variant p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300 shadow-[0_0_35px_rgba(255,49,49,0.03)] h-full"
    >
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-primary/10">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <h3 className="font-label text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-primary font-black">
          {category.label}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-2.5">
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
      className="relative min-h-screen px-6 sm:px-20 md:px-32 lg:pr-24 lg:pl-[calc(5rem+6rem)] py-24 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24 max-w-7xl mx-auto w-full">
        <h2 className="font-headline font-black text-[clamp(48px,15vw,160px)] tracking-tighter uppercase leading-[0.75] text-white">
          SKILLS
        </h2>
      </div>
  
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full relative z-10">
        {skillCategories.map((cat, i) => (
          <div key={cat.label}>
            <CategoryBlock category={cat} index={i} />
          </div>
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
