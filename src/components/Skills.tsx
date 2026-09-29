import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Brain, Layers, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillDomain {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const skillDomains: SkillDomain[] = [
    {
      id: 'ai-deep-learning',
      title: 'AI & Deep Learning',
      badge: 'Neural Architectures & LLMs',
      image: '/skill_ai_robot.jpg',
      description: 'Engineering cutting-edge deep learning systems, transformer models, and parameter-efficient fine-tuning (LoRA/QLoRA). Deploying high-throughput inference with vLLM and TensorRT-LLM.',
      tools: ['PyTorch', 'Transformers', 'vLLM', 'LoRA / QLoRA', 'TensorRT-LLM', 'Computer Vision', 'HuggingFace'],
      metrics: [
        { label: 'Model Throughput', value: '42% Gain' },
        { label: 'Quantization', value: 'FP8 / INT8' },
      ],
      accentColor: 'border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400',
    },
    {
      id: 'gpu-cuda',
      title: 'GPU & CUDA Acceleration',
      badge: 'Bare-Metal Silicon Optimization',
      image: '/skill_hardware_systems.jpg',
      description: 'Writing custom CUDA C++ and Triton kernels designed for NVIDIA Hopper & Ampere microarchitectures. Maximizing SM occupancy through SRAM memory tiling and warp-level primitives.',
      tools: ['CUDA C/C++', 'OpenAI Triton', 'Nsight Compute', 'SRAM Tiling', 'Warp Shuffles', 'Memory Hierarchy'],
      metrics: [
        { label: 'Kernel Speedup', value: '2.4x vs Torch' },
        { label: 'Bank Conflicts', value: '0 Conflicts' },
      ],
      accentColor: 'border-emerald-500/40 text-emerald-400 group-hover:border-emerald-400',
    },
    {
      id: 'web-frontend',
      title: 'Modern Web & Frontend',
      badge: 'High-Performance UI Architecture',
      image: '/skill_web_frontend.jpg',
      description: 'Crafting responsive, production-ready web experiences using React 18, TypeScript, and Tailwind CSS. Implementing complex animation choreography, WebSockets, and state workflows.',
      tools: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets', 'Next.js', 'Vite'],
      metrics: [
        { label: 'Lighthouse Score', value: '99/100' },
        { label: 'Frame Rate', value: '60 FPS Smooth' },
      ],
      accentColor: 'border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400',
    },
    {
      id: 'cloud-cicd',
      title: 'Cloud Systems & Deployment',
      badge: 'Infrastructure, DevOps & CI/CD',
      image: '/skill_deployment_cicd.png',
      description: 'Building automated CI/CD deployment pipelines, containerizing GPU-accelerated microservices with Docker, and orchestrating scalable model servers using Triton Inference Server and Kubernetes.',
      tools: ['Docker', 'Kubernetes', 'Triton Server', 'FastAPI', 'GitHub Actions', 'Linux Profiling', 'Prometheus'],
      metrics: [
        { label: 'Deploy Reliability', value: '99.9% Sched' },
        { label: 'Container Startup', value: '< 2.5s' },
      ],
      accentColor: 'border-amber-500/40 text-amber-400 group-hover:border-amber-400',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai-deep-learning', label: 'AI & Deep Learning' },
    { id: 'gpu-cuda', label: 'GPU & CUDA' },
    { id: 'web-frontend', label: 'Modern Web' },
    { id: 'cloud-cicd', label: 'Cloud & CI/CD' },
  ];

  const filteredSkills = selectedFilter === 'all'
    ? skillDomains
    : skillDomains.filter(s => s.id === selectedFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#040816]">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // CORE TECHNICAL STACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Specialized Engineering Domains
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              Engineered with extreme precision across AI algorithms, silicon-level acceleration, modern frontend architecture, and cloud systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/30'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((domain, index) => (
            <motion.div
              key={domain.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/40" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-cyan-300">
                    {domain.badge}
                  </span>
                </div>

                {/* Metrics Pill Top Right */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {domain.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      <strong className="text-white">{m.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {domain.description}
                  </p>
                </div>

                {/* Tech Pills Matrix */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Technologies & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Technical Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-mono font-bold text-white">Full-Spectrum Systems Competency</div>
              <div className="text-xs text-slate-400">From low-level CUDA thread blocks to high-level reactive client states.</div>
            </div>
          </div>

          <a
            href="#work"
            className="px-4 py-2 text-xs font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all"
          >
            Review Production Work →
          </a>
        </div>

      </div>
    </section>
  );
};
