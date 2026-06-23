"use client";
import React from 'react';
import { motion } from 'framer-motion';

const icons = ['code', 'terminal', 'bolt'] as const;

export const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center w-full px-6 sm:px-20 md:px-32 lg:px-48 py-24 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto w-full">

      {/* ── Mobile Layout (hidden on md and above) ── */}
      <div className="flex flex-col items-center text-center gap-8 md:hidden">

        {/* Vertical rectangle profile photo — mobile only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative"
        >
          {/* Spinning glow ring */}
          <div className="absolute inset-0 rounded-[6px] border-2 border-primary/40 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute -inset-1 rounded-[6px] border border-primary/20" />
          {/* Image */}
          <div className="w-36 h-48 rounded-[6px] overflow-hidden border-2 border-primary shadow-[0_0_32px_rgba(255,49,49,0.35)] relative">
            <img
              src="/hero-profile.png"
              alt="Mohit Jangid"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black text-[clamp(40px,12vw,64px)] leading-[0.85] tracking-tighter text-primary uppercase"
        >
          MOHIT JANGID
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          className="font-label uppercase tracking-[0.2em] text-primary text-[10px] flex items-center gap-3 overflow-hidden whitespace-nowrap"
        >
          <div className="h-px w-8 bg-primary" />
          Digital Innovator
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-on-surface-variant font-light leading-relaxed text-sm max-w-[30ch]"
        >
          Web Developer &amp; Digital Strategist. Building innovative digital
          solutions and driving brand growth through creative strategies and
          technical expertise.
        </motion.p>

        <div className="flex gap-4">
          {icons.map((icon, i) => (
            <motion.a
              key={icon}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-surface transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">{icon}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Desktop Layout (shown on md and above) ── */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-end relative">

        {/* Big Title */}
        <div className="col-span-12 relative z-0 flex justify-center w-full">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline font-black text-[10.5vw] whitespace-nowrap leading-[0.85] tracking-tighter text-primary uppercase text-center w-full -translate-y-24"
          >
            MOHIT JANGID
          </motion.h1>
        </div>

        {/* Left column — icons + tagline */}
        <div className="col-span-4 flex flex-col justify-end space-y-8 relative z-20">
          <div className="flex gap-4">
            {icons.map((icon, i) => (
              <motion.a
                key={icon}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-surface transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </motion.a>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-on-surface-variant font-light leading-relaxed max-w-xs text-base"
          >
            Web Developer &amp; Digital Strategist. Building innovative digital
            solutions and driving brand growth through creative strategies and
            technical expertise.
          </motion.p>
        </div>

        {/* Floating portrait — absolutely centred */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 flex justify-center z-50 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-2xl aspect-[4/5] mb-[-340px]"
          >
            <img
              className="w-full h-full object-contain object-bottom"
              alt="Mohit Jangid Portrait"
              src="/hero-profile.png"
            />
          </motion.div>
        </motion.div>

        {/* Right column — Digital Innovator label + description */}
        <div className="col-span-4 col-start-9 flex flex-col justify-end items-end text-right space-y-8 relative z-20 translate-y-32">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            className="font-label uppercase tracking-[0.2em] text-primary text-xs flex items-center justify-end gap-4 overflow-hidden whitespace-nowrap"
          >
            <div className="h-px w-12 bg-primary" />
            Digital Innovator
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-on-surface-variant font-light leading-relaxed max-w-xs text-base"
          >
            Architecting unified CMS systems and high-converting web
            applications at the intersection of automation and design.
          </motion.p>
        </div>

      </div>
    </div>
  </section>
);
