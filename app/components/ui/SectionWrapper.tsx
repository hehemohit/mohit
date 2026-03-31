"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const SectionWrapper = ({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`w-full px-8 sm:px-12 md:px-16 lg:px-24 ${className}`}
  >
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </motion.section>
);
