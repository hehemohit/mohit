"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

export const GallerySection = () => (
  <SectionWrapper id="archive" className="min-h-screen flex flex-col justify-center py-24 mt-20">
    <div className="grid grid-cols-12 gap-8 mb-20 items-end">
      <div className="col-span-12 md:col-span-6">
        <h2 className="font-headline font-bold text-9xl tracking-tighter text-on-surface uppercase leading-none">Archive</h2>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-between items-end">
        <p className="text-on-surface-variant font-light max-w-sm">
          Snapshots of the technical journey, from hackathon wins to deep-dives into code architecture.
        </p>
        <motion.div 
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-4 group cursor-pointer"
        >
          <span className="font-label uppercase tracking-widest text-xs text-primary">More Archive</span>
          <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="space-y-12">
      <motion.div 
        transition={{ duration: 0.6 }}
        className="w-full h-[716px] rounded-3xl overflow-hidden relative group cursor-pointer"
      >
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          alt="featured collection" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4kW2Ca8BYFjVSQ8wNWcx7a4ASdiei-_3h7UjRJnRwmxXLzbUNAoLFUj7miE6WP2B9XEDucHHSabmeZ3wvPE8-Ux3790TkaG6l-oROA5mTyFPj9zJYyG9BY3CL45fu0jrtbELPaRgdEmW7zM9gX7c_E0WeHSHzYsCej7AcKfSUR8wYMx4_i22_Twa0HYuIgmSOV_JvzwLnQosssPLwh7oPCYaqhRz0U9qMlbiljT1lScaDv1zjXWNmD4SPv9G3ZSZD-1Ag6xBd6Pj8"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface/60 to-transparent"></div>
        <div className="absolute bottom-12 left-12">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-xs">Core Focus</span>
          <h4 className="font-headline text-4xl text-white mt-2">Scalable Systems Architecture</h4>
        </div>
      </motion.div>
      <div className="relative flex items-center gap-8">
        <button className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCyu7xE8fYyxJdotQY60LgbRjYr7JVD9Ud7OeQUPJP700UUlDe4MiyToWyPFTYbPzOYU_3XMP-fHLo-buvWI2nzNIthLvxHkfvW86ZiA7PaDvoyk-m1YzDHb1Lfx19Okesz8hmGnhDc51FWg9PmaNLBkEG4W7pYKZmPW6fzhlnDKQbQAuhydWPxOg7mnoHxaJehVz790iJBYIM1Ik-yonh6f2IWpGLh2PokeS3gUZ_aBG4PZTMBANzILO4V24-4yZhwsmNcNM0dYtch',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCCcz9bUF5kdKD9xY0MQYgZJrMssg58rQnO6eVnUnaeaSJe6Djty9ypsw46DjX6vrXu8c6VHHfdUfi9X3lcdVmV10nXBYnfdF6v0iyPyswFw8NjbbaU3lo6z29ZKNWLRd5s-RSBhddLhGgR94n2OsIfQObE3JUXQ3c_4mDGU4krChp930VDhJ1Fi2p_SJGWT6zoiCNazSwtTRvefHv4aWm3oaGzP-QLasMatBdhKyimdxw3CzO-1tGmWIC1fLK7OxJ67bBMeB-d7RGc',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgOYtLe_PfIa3RLQrLEeDts61oahvSrfJp-_IsE6hDJWYyx8-MnXTEQRqMtvC9MY3Rv9wSARtIL8SDEfAWVGjPpkMfBubFE2vRK3MTsj7qTp2dvUnOjVOJBWBzbY8cL5hB39hZJ5ctcEni4X06vSAzEf_TjKq9kjmmU3biXGZ2YFDuNqCto2JkIiQypP917_vrbq9zwLmM6CQgoQYhQgbjF3DNHxhKO4749sI0F7-2H_YTbnLbaXfbPNuivIL8X__Li56kr8FLZR3'
          ].map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img className="w-full h-full object-cover" alt={`gallery thumbnail ${i}`} src={src} />
            </motion.div>
          ))}
        </div>
        <button className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  </SectionWrapper>
);
