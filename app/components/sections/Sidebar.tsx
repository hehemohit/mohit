"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
    { id: "hero", label: "HOME" },
    { id: "philosophy", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
];

const GithubIcon = ({ size = 18 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = ({ size = 18 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

export const Sidebar = () => {
    const [activeSectionId, setActiveSectionId] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActiveSectionId(e.target.id)),
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const activeLabel =
        sections.find((s) => s.id === activeSectionId)?.label ?? "HOME";

    const menuVariants = {
        closed: { x: "100%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
        open: { x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                aria-label="Section navigation"
                className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 z-40
                           flex-col items-center py-10
                           border-r border-white/5
                           bg-black/80 backdrop-blur-md
                           transition-colors duration-700"
            >
                <div
                    className="flex-none flex items-center justify-center mb-12 overflow-hidden"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", height: "120px" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeLabel}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="font-label text-[10px] font-black tracking-[0.5em] text-primary uppercase whitespace-nowrap"
                        >
                            {activeLabel}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                    {sections.map(({ id, label }) => {
                        const isActive = activeSectionId === id;
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                aria-label={label}
                                className="group relative flex items-center justify-center w-10 h-10"
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 2 : 1,
                                        backgroundColor: isActive ? "var(--primary)" : "transparent",
                                        borderColor: isActive ? "var(--primary)" : "white",
                                        opacity: isActive ? 1 : 0.2
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="w-1.5 h-1.5 rounded-full border border-white"
                                />

                                <span
                                    className="pointer-events-none absolute left-full ml-5
                                               font-label text-[10px] font-black tracking-[0.2em] uppercase
                                               text-black bg-primary
                                               px-3 py-1.5 rounded-sm whitespace-nowrap
                                               opacity-0 group-hover:opacity-100
                                               translate-x-2 group-hover:translate-x-0
                                               transition-all duration-200"
                                >
                                    {label}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                <div className="mt-auto flex flex-col items-center gap-6 pt-6">
                    {[
                        { href: "https://github.com/hehemohit", icon: GithubIcon, label: "GITHUB" },
                        { href: "https://www.linkedin.com/in/mohitjangid", icon: LinkedinIcon, label: "LINKEDIN" },
                        { href: "#", icon: TwitterIcon, label: "X / TWITTER" },
                    ].map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group relative flex items-center justify-center w-10 h-10
                                       text-white/30 hover:text-primary transition-colors duration-300"
                        >
                            <Icon size={18} />

                            <span
                                className="pointer-events-none absolute left-full ml-5
                                           font-label text-[10px] font-black tracking-[0.2em] uppercase
                                           text-black bg-primary
                                           px-3 py-1.5 rounded-sm whitespace-nowrap
                                           opacity-0 group-hover:opacity-100
                                           translate-x-2 group-hover:translate-x-0
                                           transition-all duration-200"
                            >
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </aside>

            {/* Mobile Header / Burger */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-end pointer-events-none">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto w-12 h-12 bg-black border border-white/10 flex items-center justify-center active:scale-95 transition-all"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <motion.span 
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                            className="w-full h-0.5 bg-primary block" 
                        />
                        <motion.span 
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-full h-0.5 bg-white block" 
                        />
                        <motion.span 
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                            className="w-full h-0.5 bg-primary block" 
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="lg:hidden fixed inset-0 z-40 bg-black flex flex-col"
                    >
                        <div className="flex-1 flex flex-col justify-center px-10 gap-10">
                            {sections.map((section, i) => (
                                <motion.a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="font-headline font-black text-5xl sm:text-6xl uppercase tracking-tighter text-white hover:text-primary transition-colors"
                                >
                                    {section.label}
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-10 border-t border-white/5 flex gap-8">
                            <a href="https://github.com/hehemohit" className="text-white/40 hover:text-primary transition-colors font-label font-black text-[10px] tracking-widest uppercase">GITHUB</a>
                            <a href="https://www.linkedin.com/in/mohitjangid" className="text-white/40 hover:text-primary transition-colors font-label font-black text-[10px] tracking-widest uppercase">LINKEDIN</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
