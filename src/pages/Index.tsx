import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { GrainOverlay } from '../components/GrainOverlay';

export const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Subtle Analog Grain Layer */}
      <GrainOverlay />

      {/* Glassmorphic Sticky Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
