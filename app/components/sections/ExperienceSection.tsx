"use client";
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    dates: "AUG 2025 - PRESENT",
    role: "Web Developer Intern",
    company: "DigitalVigyapan",
    bullets: [
      "Refactored Magento codebase for Parcos, optimizing mobile performance and driving a 23.6% increase in conversion rates.",
      "Engineered automated content publishing pipelines using React and Node.js, reducing fault rates by 70%.",
      "Architected a unified CMS on GCP for multi-platform content regulation, integrating YouTube, Meta, and LinkedIn APIs."
    ]
  }
];

export const ExperienceSection = () => (
  <section
    id="experience"
    className="relative min-h-screen px-12 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
  >
    {/* Header */}
    <div className="mb-24 max-w-7xl mx-auto w-full">
      <h2 className="font-headline font-black text-[clamp(52px,12vw,140px)] tracking-tighter uppercase leading-[0.75] text-white">
        EXPERIENCE
      </h2>
    </div>

    {/* Timeline Wrapper */}
    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[135px] top-4 bottom-0 w-px bg-outline-variant hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col md:flex-row relative"
            >
              {/* Left side: Dates */}
              <div className="md:w-[120px] md:flex-shrink-0 mb-3 md:mb-0">
                <span className="font-label text-[11px] font-black tracking-widest text-outline uppercase">
                  {exp.dates}
                </span>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-[135px] -translate-x-1/2 top-1.5 z-20 items-center justify-center">
                <div className="w-4 h-4 bg-black border-2 border-primary shadow-[3px_3px_0_0_var(--color-primary)] transition-all duration-300 group-hover:scale-125" />
              </div>

              {/* Right side: Content */}
              <div className="md:pl-20 flex-1 min-w-0">
                <h3 className="font-headline font-black text-[clamp(28px,5vw,600px)] tracking-tighter uppercase leading-none mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="font-label text-[13px] font-black tracking-[0.2em] text-primary uppercase mb-8">
                  {exp.company}
                </p>

                <ul className="space-y-4 w-full max-w-3xl">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-4 font-body text-[16px] text-on-surface-variant leading-relaxed group/item"
                    >
                      <span className="text-primary font-label font-black mt-1 flex-shrink-0 transition-transform group-hover/item:translate-x-1">
                        →
                      </span>
                      <span className="group-hover/item:text-on-surface transition-colors duration-300">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Background Watermark 04 */}
    <div className="absolute top-[40%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
      <span className="font-headline font-black text-[clamp(150px,35vw,600px)] text-primary transition-colors duration-700 block translate-x-[10%]">
        03
      </span>
    </div>
  </section>
);
