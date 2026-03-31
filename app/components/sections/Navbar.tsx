"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => (
  <nav className="bg-surface docked full-width top-0 sticky z-50 flex justify-center items-center w-full px-8 sm:px-12 md:px-16 lg:px-24 py-6">
    <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black uppercase tracking-tighter text-primary font-headline"
      >
        MOHIT JANGID
      </motion.div>
      <div className="hidden md:flex gap-12 font-body font-light">
        {['Philosophy', 'Projects', 'Experience', 'Education', 'Skills', 'Archive', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-on-surface opacity-80 hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-xs" 
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <button className="md:hidden text-primary active:scale-95 duration-200">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>
);
