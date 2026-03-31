"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

export const ContactSection = () => (
  <SectionWrapper id="contact" className="mt-40 mb-20 relative overflow-hidden rounded-[3rem] bg-primary-container h-[512px] flex items-center justify-center">
    <div className="absolute inset-0 bg-primary z-0">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDizg3PCRR3olxrnUKFeP1hSVp3uWJt16spy_ka-TUKIfg3ENojWOyePo20d_tfv_QGba4trBm651Rfuk5UyIUGe4fdWorkHAvMhnBSmrO5_tOJ6LSSpwqTiAGPWit1j79pVu5gH9NHbkfykIIys3MQHQ4ZqMi-ikenqyw5UEVHUykznE1uX8LHocJ5Sjlzc_8lxNcr-TIqG8yRFFJj6_7h6mlLgsw4zhzoVk0g84pCdvx2lZQgIseoAZo4v7NqozBqEjwV_2R63U0G')" }}
      ></div>
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline font-black text-[12vw] tracking-tighter text-on-primary uppercase leading-none text-center"
      >
        STAY CONNECTED
      </motion.h2>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-[12px] border-surface/20 overflow-hidden shadow-2xl"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="tech close up" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9WG-Qqe-Fzs1piqd2B4AE54EEMdXG1ByUOfcyGbzOFfH0o_cLx13nNro5Jxw8YUODKW7tIcYiENG2YwG3h3QDQXWvCX-fvzh0YuPAfS2UrfmN5ZeXqLqoA2z4dkOjCLfOaJxH10ATrlbNXhZK1_b-cdY-aZ3xZIkbuVHiu70kgsWgknTxSOK2O_Trsp6UfTEz0lWguB3BQ1SkDqONgRMbz7fXQBNefKDQe9HYyvYxEWFKLCM89mWvRfBybO0aubBj_jywjLLO807_"
        />
      </motion.div>
      <motion.a 
        href="mailto:mohit.jangid2805@gmail.com" 
        className="mt-24 group cursor-pointer flex items-center gap-4 bg-surface text-on-surface px-10 py-5 rounded-full border border-surface active:scale-95 transition-all outline-none"
      >
        <span className="font-label uppercase tracking-widest text-sm">Send a message</span>
        <span className="material-symbols-outlined">mail</span>
      </motion.a>
    </div>
  </SectionWrapper>
);
