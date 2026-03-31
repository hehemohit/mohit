"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => (
  <section className="min-h-[921px] flex items-center w-full px-12 sm:px-20 md:px-32 lg:px-48 py-24">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-end relative">
      <div className="col-span-12 relative z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black text-[10.5vw] whitespace-nowrap leading-[0.85] tracking-tighter text-primary uppercase text-center -translate-y-24"
        >
          MOHIT JANGID
        </motion.h1>
      </div>
      
      <div className="col-span-12 md:col-span-4 flex flex-col justify-end space-y-8 order-3 md:order-1 relative z-20">
        <div className="flex gap-4">
          {['code', 'terminal', 'bolt'].map((icon, i) => (
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
          className="text-on-surface-variant font-light leading-relaxed max-w-xs"
        >
          Web Developer {"&"} Digital Strategist. Building innovative digital solutions and driving brand growth through creative strategies and technical expertise.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 flex justify-center z-50 pointer-events-none"
      >
        <div className="relative w-full max-w-2xl aspect-[4/5] mb-[-280px]">
          <img 
            className="w-full h-full object-contain object-bottom" 
            alt="Mohit Jangid Portrait" 
            src="/hero-profile.png"
          />
        </div>
      </motion.div>

      <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-end text-right space-y-8 order-2 md:order-3 relative z-20">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          className="font-label uppercase tracking-[0.2em] text-primary text-xs flex items-center gap-4 overflow-hidden whitespace-nowrap"
        >
          <div className="h-px w-12 bg-primary"></div>
          Digital Innovator
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-on-surface-variant font-light leading-relaxed max-w-xs"
        >
          Architecting unified CMS systems and high-converting web applications at the intersection of automation and design.
        </motion.p>
      </div>
    </div>
  </section>
);
