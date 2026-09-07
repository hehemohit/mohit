"use client";

import React from "react";
import { ArrowUpRight, Globe, Play } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 11 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export interface Project {
    title: string;
    category: string;
    description: string;
    year: string;
    thumbnail?: string;
    href?: string;
    technologies?: string[];
    id?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isGithub = project.href?.includes("github.com");
    const isYoutube = project.href?.includes("youtube.com") || project.href?.includes("youtu.be");
    const hasLink = project.href && project.href !== "#";

    return (
        <motion.div
            layout="position"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                opacity: { duration: 0.6, ease: "easeInOut" },
                y: { duration: 0.8, ease: "easeOut", delay: index * 0.05 },
            }}
            className="group flex flex-col transition-all duration-300 cursor-pointer h-full
                       bg-surface-variant border border-primary/20 hover:border-primary 
                       hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(255,49,49,0.25)]"
        >
            {/* Header Image Area */}
            <div className="relative aspect-16/10 overflow-hidden bg-black/50">
                {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 uppercase font-headline font-black text-4xl">
                        {project.title}
                    </div>
                )}
                
                {/* Category Pill Overlay */}
                <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5
                                 bg-primary text-black font-label shadow-md"
                    >
                        {project.category}
                    </span>
                </div>

                {/* Link Type Indicator */}
                {hasLink && (
                    <div className="absolute top-4 right-4 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-primary/40 text-primary flex items-center gap-1.5 font-label">
                            {isGithub ? <><GithubIcon size={11} /> REPO</> : isYoutube ? <><Play size={10} className="fill-primary" /> VIDEO</> : <><Globe size={11} /> LIVE</>}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Body */}
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline font-black text-3xl md:text-4xl leading-none tracking-tighter uppercase mb-5 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="font-body text-[14px] md:text-[15px] text-neutral-300 leading-relaxed font-normal mb-8">
                    {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto mb-8">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="font-label text-[9px] font-bold text-neutral-300 border border-primary/25 bg-black/40 px-2.5 py-1 uppercase tracking-wider group-hover:border-primary/50 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Section */}
                <div className="pt-6 border-t border-primary/10 flex justify-between items-center group-hover:border-primary/30 transition-colors duration-300">
                    <span className="font-label text-[11px] font-bold text-neutral-500 tracking-widest uppercase">
                        {project.year}
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="font-label text-[9px] font-black tracking-widest uppercase text-neutral-400 group-hover:text-primary transition-colors">
                            {isGithub ? "OPEN GITHUB" : isYoutube ? "WATCH VIDEO" : hasLink ? "VIEW DEMO" : "INTERNAL"}
                        </span>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 bg-black/60 group-hover:bg-primary group-hover:border-primary group-hover:text-black text-primary transition-all duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
