"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

const education = [
  {
    dates: "2023 - 2027",
    degree: "B.E. in Computer Engineering",
    institution: "Universal College of Engineering (Mumbai)",
    bullets: [
      "Current CGPA: 7.61/10",
      "Specializing in Scalable Systems and AI-Driven Accessibility Research.",
      "Core Coursework: Data Structures, Software Engineering, Database Management."
    ]
  }
];

export const EducationSection = () => (
  <section
    id="education"
    className="relative min-h-screen px-12 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
  >
    {/* Header */}
    <div className="mb-24 max-w-7xl mx-auto w-full">
      <h2 className="font-headline font-black text-[clamp(52px,12vw,140px)] tracking-tighter uppercase leading-[0.75] text-white">
        EDUCATION
      </h2>
    </div>

    {/* Timeline Wrapper */}
    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[135px] top-4 bottom-0 w-px bg-outline-variant hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-24">
          {education.map((edu, i) => (
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
                  {edu.dates}
                </span>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-[135px] -translate-x-1/2 top-1.5 z-20 items-center justify-center">
                <div className="w-4 h-4 bg-black border-2 border-primary shadow-[3px_3px_0_0_var(--color-primary)] transition-all duration-300 group-hover:scale-125" />
              </div>

              {/* Right side: Content */}
              <div className="md:pl-20 flex-1 min-w-0">
                <h3 className="font-headline font-black text-[clamp(28px,5vw,60px)] tracking-tighter uppercase leading-none mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="font-label text-[13px] font-black tracking-[0.2em] text-primary uppercase mb-8">
                  {edu.institution}
                </p>

                <ul className="space-y-4 w-full max-w-3xl">
                  {edu.bullets.map((bullet, j) => (
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

    {/* Background Watermark 05 */}
    <div className="absolute top-[40%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
      <span className="font-headline font-black text-[clamp(150px,35vw,600px)] text-primary transition-colors duration-700 block translate-x-[10%]">
        05
      </span>
    </div>
  </section>
);
