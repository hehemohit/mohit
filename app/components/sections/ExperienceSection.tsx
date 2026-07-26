"use client";
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    dates: "AUG 2025 - JAN 2026",
    role: "Developer Intern",
    company: "DigitalVigyapan",
    bullets: [
      "Refactored the Magento codebase to implement responsive frontend rendering for Parcos, optimizing mobile performance which drove a 23.6% increase in sales conversions; well versed in Linux environment and deployment processes.",
      "Engineered a custom internal tool using React and Node.js to automate content publishing pipelines. Enforced schema validation in MongoDB, achieving a 70% reduction in fault rates and optimizing team throughput by 15%.",
      "Architected and developed a unified content management system (CMS) utilizing Google Cloud Platform (GCP) services for multi-platform content regulation. Integrated the YouTube Data API, Meta Graph API, and LinkedIn Marketing/Share API to enable centralized scheduling, increasing user engagement; also experienced in basic Pen testing."
    ]
  }
];

const responsibilities = [
  {
    role: "Sports Head",
    organization: "Students' Council",
    bullets: [
      "Led the organization of the annual Sports Fest, managing a core team for an event of over 1,000 students.",
      "Represented the college in intercollegiate tournaments, securing 1st position and earning 8 medals across events including ICT Volleyball."
    ]
  },
  {
    role: "Event Head",
    organization: "AURORA Fest (Yearly fest of UCOE)",
    bullets: [
      "Constructed a dynamic, real-time points table and leaderboard system for the event, streamline-tracking scores and results to keep participants and coordinators synchronized.",
      "Mitigated operational bottlenecks by leveraging technical solutions to replace traditional, manual tracking, resulting in zero scheduling delays and a highly structured, smooth tournament flow."
    ]
  }
];

export const ExperienceSection = () => (
  <section
    id="experience"
    className="relative min-h-screen px-6 sm:px-20 md:px-32 lg:px-24 py-24 overflow-hidden"
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
              <div className="md:w-[120px] md:shrink-0 mb-3 md:mb-0">
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
                <h3 className="font-headline font-black text-[clamp(28px,5vw,60px)] tracking-tighter uppercase leading-none mb-3 text-white group-hover:text-primary transition-colors duration-300">
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
                      <span className="text-primary font-label font-black mt-1 shrink-0 transition-transform group-hover/item:translate-x-1">
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

      {/* ── Positions of Responsibility ── */}
      <div className="mt-32 relative">
        {/* Header */}
        <div className="mb-16">
          <h3 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-none text-white">
            Leadership &amp; Responsibility
          </h3>
        </div>

        {/* Vertical line */}
        <div className="absolute left-[135px] top-4 bottom-0 w-px bg-outline-variant hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-24">
          {responsibilities.map((resp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col md:flex-row relative"
            >
              {/* Left side: Role info label */}
              <div className="md:w-[120px] md:shrink-0 mb-3 md:mb-0">
                <span className="font-label text-[11px] font-black tracking-widest text-outline uppercase">
                  Leadership
                </span>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-[135px] -translate-x-1/2 top-1.5 z-20 items-center justify-center">
                <div className="w-4 h-4 bg-black border-2 border-primary shadow-[3px_3px_0_0_var(--color-primary)] transition-all duration-300 group-hover:scale-125" />
              </div>

              {/* Right side: Content */}
              <div className="md:pl-20 flex-1 min-w-0">
                <h3 className="font-headline font-black text-[clamp(28px,5vw,60px)] tracking-tighter uppercase leading-none mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {resp.role}
                </h3>
                <p className="font-label text-[13px] font-black tracking-[0.2em] text-primary uppercase mb-8">
                  {resp.organization}
                </p>

                <ul className="space-y-4 w-full max-w-3xl">
                  {resp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-4 font-body text-[16px] text-on-surface-variant leading-relaxed group/item"
                    >
                      <span className="text-primary font-label font-black mt-1 shrink-0 transition-transform group-hover/item:translate-x-1">
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
