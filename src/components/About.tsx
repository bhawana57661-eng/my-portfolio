import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Zap, BookOpen, Layers, CheckCircle2, Activity, Play } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'telemetry'>('profile');

  const engineeringPillars = [
    {
      icon: Cpu,
      title: "Bare-Metal GPU Acceleration",
      desc: "Delving past Python runtimes to craft custom CUDA C++ and Triton kernels. Leveraging shared memory (SRAM) tiling, warp-shuffle intrinsics, and bank-conflict mitigation for extreme compute efficiency.",
      tags: ["CUDA C++", "Triton", "SRAM Tiling", "Nsight Systems"],
      color: "border-cyan-500/30 text-cyan-400",
    },
    {
      icon: Zap,
      title: "Deep Learning & LLM Systems",
      desc: "Designing and fine-tuning state-of-the-art transformer architectures. Mastering low-rank adaptation (LoRA/QLoRA), KV-cache quantization, and distributed inference engines like vLLM and TensorRT-LLM.",
      tags: ["PyTorch", "vLLM", "TensorRT-LLM", "LoRA / QLoRA"],
      color: "border-indigo-500/30 text-indigo-400",
    },
    {
      icon: Layers,
      title: "Modern Web & Distributed Infrastructure",
      desc: "Architecting high-throughput full-stack systems. Combining React 18, TypeScript, and modern styling with high-concurrency microservices, containerization, and real-time telemetry streaming.",
      tags: ["React 18", "TypeScript", "Tailwind CSS", "Docker & Linux"],
      color: "border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background cyber accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ARCHITECTURAL DNA & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineering at the Silicon & Web Frontier
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base font-sans leading-relaxed">
            Bridging the gap between mathematical machine learning algorithms, hardware-level kernel execution, and responsive web platforms.
          </p>
        </div>

        {/* Top Split: Narrative & Interactive Telemetry Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Candidate Story & Academic Focus */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <span>The Engineering Philosophy</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                I am <strong className="text-white">Bhawana</strong>, an AI and Deep Learning Engineer based in <span className="text-cyan-300">Jaipur, Rajasthan</span>, currently pursuing my 1st year of <strong className="text-white">B.Tech in Computer Science & Engineering</strong> at <span className="text-indigo-300 font-semibold">JECRC UNIVERSITY</span>.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than treating deep learning as an opaque black box of high-level API calls, my engineering focus dives directly down to the silicon die. I investigate how attention matrices flow across GPU streaming multiprocessors (SMs), how registers and shared memory tile data to eliminate DRAM latency bottlenecks, and how modern web interfaces can seamlessly interface with distributed model clusters.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                From hand-crafting low-level CUDA kernels to building full-stack platforms in React 18 and TypeScript, I take pride in delivering complete, resilient, and end-to-end engineered solutions.
              </p>

              {/* Education & Location Summary Callout */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Academic Institution
                  </span>
                  <span className="text-xs font-mono font-bold text-indigo-300">
                    JECRC UNIVERSITY, Jaipur
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    1st year, B.Tech CSE
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Primary Operational Base
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    Jaipur, Rajasthan, India
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    IST (UTC +5:30) • Open Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive GPU Kernel Terminal Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#090d18] border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1322] border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    gpu_nsight_telemetry_live.sh
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>DEVICE // ONLINE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3.5 text-slate-300 bg-[#060a14]">
                <div className="text-slate-400">
                  <span className="text-cyan-400">root@bhawana-cluster</span>:<span className="text-indigo-400">~/kernels</span># ./profile_attention --device=0 --verbose
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center justify-between">
                    <span>[TARGET] NVIDIA Tensor Core H100 (80GB HBM3)</span>
                    <span className="text-slate-400 text-[10px]">SM ARCH: sm_90a</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div>• Active Streaming Multiprocessors: <span className="text-cyan-300">114 / 114</span></div>
                    <div>• Warp Execution Efficiency: <span className="text-emerald-300">99.1%</span></div>
                    <div>• Memory Bandwidth: <span className="text-cyan-300">3.35 TB/s (Peak 96.4%)</span></div>
                    <div>• SRAM L1 Shared Memory: <span className="text-indigo-300">228 KB / SM</span></div>
                  </div>
                </div>

                <div className="text-slate-300 space-y-1">
                  <div className="text-cyan-400 font-bold">&gt;&gt; Active Kernel Routine:</div>
                  <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded border border-slate-800/80 font-mono">
                    <span className="text-indigo-400">__global__ void</span> <span className="text-yellow-300">fused_flash_attention_kernel</span>(
                      <br />&nbsp;&nbsp;const half* __restrict__ Q,
                      <br />&nbsp;&nbsp;const half* __restrict__ K,
                      <br />&nbsp;&nbsp;const half* __restrict__ V,
                      <br />&nbsp;&nbsp;half* __restrict__ Out,
                      <br />&nbsp;&nbsp;const int seq_len, const int head_dim
                    )
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-800/60 text-slate-400">
                  <span>Speedup vs Naive Torch: <strong className="text-emerald-400 font-bold">2.41x</strong></span>
                  <span className="text-cyan-400">Status: ZERO_BANK_CONFLICTS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 border ${pillar.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
