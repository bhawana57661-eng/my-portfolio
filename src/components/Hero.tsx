import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, ArrowRight, FileDown, Sparkles, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export const Hero: React.FC = () => {
  const mousePos = useMousePosition();
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI / Deep Learning Engineer • GPU Acceleration (CUDA) • Systems & Web Architect";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* Interactive Cursor Radial Spotlight Mask */}
      <div
        className="pointer-events-none absolute -inset-px opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.08), transparent 70%)`,
        }}
      />

      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Candidate Intel */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-sm shadow-cyan-500/20 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for AI & Systems Engineering Roles</span>
            </motion.div>

            {/* Candidate Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1 mb-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Candidate Profile // 001</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                Bhawana
              </h1>
            </motion.div>

            {/* Typewriter Headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="min-h-[56px] sm:min-h-[64px] mb-6 flex items-start"
            >
              <p className="text-base sm:text-xl font-mono text-cyan-400 font-medium leading-relaxed">
                {displayText}
                <span className="inline-block w-2 h-4 sm:h-5 ml-1 bg-cyan-400 animate-pulse"></span>
              </p>
            </motion.div>

            {/* Location & Academic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm text-slate-300 font-mono"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>JECRC UNIVERSITY (1st year, B.Tech CSE)</span>
              </div>
            </motion.div>

            {/* Bio Synopsis */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-sans"
            >
              Architecting high-throughput deep learning inference pipelines and bare-metal GPU kernels.
              Bridging modern mathematical AI foundations (PyTorch, Transformers, LoRA) with low-level CUDA
              optimizations and full-stack web platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all w-full sm:w-auto"
              >
                <span>Explore Systems & Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Bhawana_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 rounded-lg transition-all w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <span>Get in Touch →</span>
              </a>
            </motion.div>

            {/* Fast Telemetry Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80 w-full"
            >
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  &lt; 8ms
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider">
                  Inference Latency
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  2.4x
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider">
                  CUDA Attention Speedup
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  100%
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider">
                  Bare-Metal & Web
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  1st Year
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider">
                  CSE @ JECRC
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Candidate Cutout Visual & Cyber Shield */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 sm:w-96 lg:w-full max-w-md aspect-[4/5] flex items-center justify-center"
            >
              {/* Outer Cybernetic Ring */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 via-slate-900/40 to-indigo-500/10 backdrop-blur-sm -rotate-2" />
              <div className="absolute inset-2 rounded-3xl border border-indigo-500/20 rotate-1" />

              {/* Glowing Aura Behind Cutout */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/30 to-indigo-600/30 blur-2xl -z-10 animate-pulse-slow" />

              {/* Candidate Portrait Cutout */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-3xl p-4">
                <img
                  src="/hero-cutout.png"
                  alt="Bhawana - AI & Systems Engineer"
                  className="w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_25px_rgba(6,182,212,0.25)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: CUDA Acceleration */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 z-20 px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-black/60 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs font-semibold text-emerald-300">CUDA & Triton</span>
              </motion.div>

              {/* Floating Badge 2: PyTorch & LLMs */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 z-20 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-lg shadow-black/60 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-semibold text-cyan-300">Deep Learning & LLMs</span>
              </motion.div>

              {/* Floating Badge 3: JECRC Tag */}
              <div className="absolute top-1/2 -left-6 z-20 px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-700/80 backdrop-blur-md hidden sm:flex items-center gap-1.5 shadow-md">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-mono text-[10px] text-slate-300">JECRC UNIV</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
