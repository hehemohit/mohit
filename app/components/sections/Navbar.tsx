"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled down more than 300px
      // This ensures it stays hidden during the initial hero view
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface/90 backdrop-blur-md fixed top-0 left-0 right-0 z-100 flex justify-center items-center w-full px-8 sm:px-12 md:px-16 lg:px-24 py-5 border-b border-white/5"
        >
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black uppercase tracking-tighter text-primary font-headline"
            >
              MOHIT JANGID
            </motion.div>
            <div className="hidden md:flex gap-12 font-body font-light">
              {[
                { name: 'Philosophy', href: '#philosophy' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Archive', href: '#archive' },
                { name: 'Contact', href: '#contact' }
              ].map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/70 hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px] font-bold" 
                  href={item.href}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <button className="md:hidden text-primary active:scale-95 duration-200">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
