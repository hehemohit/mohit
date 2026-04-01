"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const skills = [
  "REACT/MERN", "NODE.JS", "MAGENTO", "UNITY", "C#", "JAVASCRIPT", "GCP", "REST APIs"
];

const stats = [
  { num: "02+", label: "YEARS EXPERIENCE" },
  { num: "7.61", label: "CURRENT CGPA" }
];

export const AboutSection = ({ onOpenResume }: { onOpenResume: () => void }) => (
  <section
    id="philosophy"
    className="relative min-h-screen flex items-center px-6 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
  >
    {/* Background Watermark 01 */}
    <div className="absolute bottom-[-10%] right-[-5%] md:right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
      <span className="font-headline font-black text-[clamp(250px,45vw,700px)] text-primary transition-colors duration-700 block">
        01
      </span>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

        {/* Left Column: Title & Description */}
        <div className="lg:col-span-6 space-y-12">
          <div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-primary mb-4">
              MOHIT JANGID
            </h2>
            <h2 className="font-headline font-black text-7xl sm:text-8xl md:text-9xl lg:text-[120px] tracking-tighter uppercase leading-[0.8] text-white">
              ABOUT
            </h2>
          </div>

          <div className="space-y-10 max-w-lg">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed"
            >
              Based in Mumbai, I am a Computer Engineering student specializing in scalable systems and AI-driven accessibility. Currently a Web Developer Intern at DigitalVigyapan. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-on-surface-variant/60 font-light leading-relaxed"
            >
              My philosophy centers on technical precision and creative strategy. From refactoring codebases that drive conversions to architecting modular game frameworks, I focus on building tools that simplify complex problems.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Stats & Skills Grid */}
        <div className="lg:col-span-6 flex flex-col gap-12 lg:pl-10">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-headline font-black text-6xl md:text-8xl text-primary leading-none">
                  {stat.num}
                </div>
                <div className="font-label text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-outline mt-5 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-px bg-outline-variant" />

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border-2 border-primary/20 px-3 py-3.5 flex items-center justify-center text-center transition-all hover:border-primary hover:bg-primary hover:text-black cursor-default font-label text-[10px] font-black tracking-widest uppercase"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onOpenResume}
              className="inline-block bg-primary text-black border-2 border-primary font-label font-black text-xs tracking-[0.2em] px-12 py-5 uppercase transition-all shadow-[6px_6px_0_0_rgba(255,49,49,0.2)] hover:shadow-[2px_2px_0_0_rgba(255,49,49,0.2)] hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer"
            >
              DOWNLOAD_RESUME
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
