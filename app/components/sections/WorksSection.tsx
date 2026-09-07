"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["ALL PROJECTS", "AGENTIC AI & SYSTEMS", "BACKEND & PROTOCOLS", "FULL STACK & WEB", "GAME DEV"];

const projects = [
  {
    title: "ZeroGrid",
    category: "BACKEND & PROTOCOLS",
    description: "Serverless P2P mesh network on Android using Wi-Fi Direct & BLE, achieving multi-hop relay up to 8 hops with store-and-forward packet transmission. Zero-trust encrypted with Curve25519 & AES-256-GCM, achieving <5% packet drop over low-latency socket communication.",
    technologies: ["Android / Kotlin", "Wi-Fi Direct & BLE", "Curve25519 / AES-256-GCM", "P2P Sockets", "Distributed Systems"],
    year: "2025",
    id: "01",
    href: "https://github.com/hehemohit/zerogrid",
    thumbnail: "/projects/zerogrid.jpg"
  },
  {
    title: "FitMatrix",
    category: "AGENTIC AI & SYSTEMS",
    description: "Autonomous coaching engine using a Supervisor-Worker topology with 5 domain agents synchronized via a centralized blackboard JSON state. Decoupled deterministic calculations (TDEE, 1RM) from LLM reasoning, streaming sub-second adaptive recommendations over Server-Sent Events (SSE) with Android Health Connect sync.",
    technologies: ["LangGraph & Agentic AI", "Supervisor-Worker Pattern", "SSE & Streaming APIs", "Android Health Connect", "Zustand / TanStack Query"],
    year: "2025",
    id: "02",
    href: "https://github.com/hehemohit/FitMatrix",
    thumbnail: "/projects/fitmatrix.jpg"
  },
  {
    title: "EduAble Platform",
    category: "AGENTIC AI & SYSTEMS",
    description: "1st Place at CODE AUTOMATA 2.1 Hackathon (500+ teams). AI-driven accessibility platform with a WhatsApp Business Bot serving <2s real-time queries for students. Built RESTful backend on MERN stack with TypeScript, GCS pipeline integration, and Meta Graph API automation.",
    technologies: ["MERN Stack", "TypeScript", "Google Cloud Storage", "Meta Graph API"],
    year: "2025",
    id: "03",
    href: "https://edu-able.vercel.app/",
    thumbnail: "/projects/eduable.png"
  },
  {
    title: "Study-Focus",
    category: "FULL STACK & WEB",
    description: "AI productivity platform that automates 100% of task prioritization. Built secure, scalable RESTful APIs and leveraged Google Gemini API to parse unstructured text into structured, metadata-rich JSON schemas — reducing study planning time by 20%.",
    technologies: ["Next.js", "Gemini API", "RESTful APIs", "Clerk Auth"],
    year: "2025",
    id: "04",
    href: "https://study-app-jet.vercel.app/",
    thumbnail: "/projects/study-app.png"
  },
  {
    title: "Parcos Luxury Beauty",
    category: "FULL STACK & WEB",
    description: "Refactored Magento frontend architecture and Linux deployment pipelines for a premium luxury e-commerce platform, cutting mobile load times and driving a 23.6% lift in mobile sales conversions across international fragrance, skincare and makeup brands.",
    technologies: ["Magento / React", "Linux Pipelines", "REST APIs", "GCP"],
    year: "2024",
    id: "05",
    href: "https://www.parcos.com/",
    thumbnail: "/projects/parcos.png"
  },
  {
    title: "Game Dev Framework",
    category: "GAME DEV",
    description: "A scalable First-Person Shooter (FPS) framework built in Unity that reduces weapon implementation time by 50% using modular C# architecture, interface-based polymorphism, and ScriptableObjects for decoupled weapon configuration.",
    technologies: ["Unity", "C#", "OOP", "ScriptableObjects"],
    year: "2025",
    id: "06",
    href: "#",
    thumbnail: "/projects/game-dev.png"
  }
];

import ProjectCard from '../ui/ProjectCard';

export const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewUrl(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = activeCategory === "ALL PROJECTS"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
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
              <div 
                key={project.title} 
                onClick={(e) => {
                  if (project.href && project.href !== "#") {
                    e.preventDefault();
                    setPreviewUrl(project.href);
                  }
                }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Iframe Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-4 md:p-8"
          >
            {/* Modal Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-label text-[10px] font-black tracking-[0.3em] text-white uppercase">Live Preview: {previewUrl}</span>
                </div>
                <div className="flex gap-2 items-center text-primary">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    <span className="font-label text-[9px] font-bold tracking-widest uppercase opacity-80">
                        Some google related features may not run in this preview
                    </span>
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <a 
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none bg-white text-black px-6 py-3 font-label font-black text-[10px] tracking-widest uppercase hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                  OPEN WEBSITE
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <button 
                  onClick={() => setPreviewUrl(null)}
                  className="flex-1 md:flex-none bg-primary text-black px-6 py-3 font-label font-black text-[10px] tracking-widest uppercase hover:bg-white transition-colors"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="flex-1 w-full border-4 border-primary bg-white relative overflow-hidden"
            >
              <iframe 
                src={previewUrl} 
                className="w-full h-full border-none"
                title="Project Preview"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
              {/* Fallback info */}
              <div className="absolute bottom-4 right-4 pointer-events-none">
                <span className="bg-black text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-tighter opacity-50">
                  Some sites may prevent embedding
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
