"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => (
  <footer className="bg-surface-container-low rounded-t-[3rem] mt-24 flex flex-col items-center w-full px-8 sm:px-12 md:px-16 lg:px-24 py-20 text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 mb-16 relative z-10">
        {['LinkedIn', 'GitHub', 'X / Twitter'].map((social) => (
          <a key={social} className="text-on-surface font-body uppercase tracking-[0.1em] text-xs hover:underline decoration-primary underline-offset-8 transition-all" href="#">{social}</a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-12 mb-20 relative z-10 font-label text-xs uppercase tracking-widest opacity-60">
        <a className="hover:text-primary transition-colors" href="#philosophy">Philosophy</a>
        <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
        <a className="hover:text-primary transition-colors" href="#experience">Experience</a>
        <a className="hover:text-primary transition-colors" href="#education">Education</a>
        <a className="hover:text-primary transition-colors" href="#skills">Skills</a>
        <a className="hover:text-primary transition-colors" href="#archive">Archive</a>
        <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
      </div>
      <div className="w-full text-6xl md:text-[18vw] font-black text-primary opacity-5 uppercase font-headline tracking-tighter leading-none select-none pointer-events-none mb-8">
        MOHIT JANGID
      </div>
      <p className="font-body text-[10px] tracking-[0.2em] text-on-surface opacity-40 uppercase">
        © 2026 MOHIT JANGID. ALL RIGHTS RESERVED.
      </p>
    </div>
  </footer>
);
