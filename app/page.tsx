"use client";

import React, { useState } from "react";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { Sidebar } from "./components/sections/Sidebar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { WorksSection } from "./components/sections/WorksSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ResumeModal } from "./components/ui/ResumeModal";


export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="max-w-[1920px] mx-auto selection:bg-primary selection:text-surface">
      <SmoothScroll />
      <Sidebar onOpenResume={() => setIsResumeOpen(true)} />

      <HeroSection />
      <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
      <WorksSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />

      <ContactSection onOpenResume={() => setIsResumeOpen(true)} />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </main>
  );
}
