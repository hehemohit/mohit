"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
    return (
        <motion.a
            href={project.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            layout="position"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                opacity: { duration: 0.6, ease: "easeInOut" },
                y: { duration: 0.8, ease: "easeOut", delay: index * 0.05 },
            }}
            className="group flex flex-col transition-all duration-300 cursor-pointer h-full
                       bg-black border border-white/5 hover:border-primary 
                       hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--primary-container)]"
        >
            {/* Header Image Area */}
            <div className="relative aspect-16/10 overflow-hidden bg-white/5">
                {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/5 opacity-10 uppercase font-headline font-black text-4xl">
                        {project.title}
                    </div>
                )}
                
                {/* Category Pill Overlay */}
                <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5
                                 bg-primary text-black"
                    >
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline font-black text-3xl md:text-4xl leading-none tracking-tighter uppercase mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="font-body text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium mb-8">
                    {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="font-label text-[9px] font-bold text-white border border-white/10 px-2.5 py-1 uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Section */}
                <div className="pt-6 border-t border-white/5 flex justify-between items-center group-hover:border-white/10 transition-colors duration-300">
                    <span className="font-label text-[11px] font-bold text-white/20 tracking-widest uppercase">
                        {project.year}
                    </span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}
