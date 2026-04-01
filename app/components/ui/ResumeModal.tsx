"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10"
          style={{ zIndex: 100 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-black border border-white/10 overflow-hidden flex flex-col shadow-[0_0_100px_rgba(255,49,49,0.15)]"
            style={{ zIndex: 101 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-neutral-950">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div>
                  <h3 className="font-headline font-black text-sm tracking-widest uppercase text-white">
                    MOHIT_JANGID_RESUME
                  </h3>
                  <p className="font-label text-[8px] tracking-[0.3em] uppercase text-neutral-500">
                    PDF VIEWER / PORTFOLIO v1.0
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Mohit_Jangid_Resume.pdf"
                  className="p-2.5 text-neutral-400 hover:text-primary hover:bg-white/5 transition-all rounded-sm border border-transparent hover:border-white/10 group"
                  title="Download Resume"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2.5 text-neutral-400 hover:text-white hover:bg-primary transition-all rounded-sm border border-transparent hover:border-primary group"
                >
                  <X size={20} className="group-rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Viewer Stage (A4 or Square ratio as per request) */}
            <div className="flex-1 overflow-auto bg-black p-6 sm:p-10 flex flex-col items-center gap-10 no-scrollbar">
              <div className="relative w-full max-w-[min(90vw,75vh)] aspect-square bg-neutral-900 border border-white/5 shadow-2xl overflow-hidden group">
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
                  className="w-full h-full border-none pointer-events-auto"
                />
                
                {/* Floating "Open Fullscreen" hint - hidden since it's an iframe embed but shows aesthetics */}
                <div className="absolute inset-0 pointer-events-none border-8 border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col items-center gap-4 py-6">
                <p className="font-label text-center text-[10px] tracking-[0.4em] uppercase text-neutral-600 font-black">
                  TECHNICAL_EXPERTISE / COMPUTER_ENGINEERING / FULL_STACK_DEV
                </p>
                <div className="h-px w-20 bg-primary/20" />
              </div>
            </div>

            {/* Footer / Status bar */}
            <div className="px-6 py-2 bg-neutral-950 border-t border-white/5 flex items-center justify-between">
              <span className="font-label text-[7px] text-neutral-700 uppercase tracking-widest">
                VIEWING: MOHIT_JANGID_RESUME_.PDF [144 KB]
              </span>
              <span className="font-label text-[7px] text-neutral-700 uppercase tracking-widest">
                READY_FOR_COLABORATION
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
