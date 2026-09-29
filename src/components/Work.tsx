import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, ExternalLink, Github, ArrowUpRight, BarChart3, ShieldCheck } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'cuda' | 'ai-systems' | 'web-systems';
  tag: string;
  description: string;
  metrics: { label: string; value: string }[];
  architecture: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cuda' | 'ai-systems' | 'web-systems'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'flash-cuda',
      title: 'Flash-CUDA: Custom Attention & Memory-Tiled Kernel',
      category: 'cuda',
      tag: 'CUDA C++ // GPU Acceleration',
      description: 'Hand-crafted fused Multi-Head Attention (MHA) kernel for NVIDIA Hopper and Ampere GPUs. Eliminates materialization of intermediate N×N attention matrices in high-latency HBM by tiling queries, keys, and values into on-chip SRAM.',
      metrics: [
        { label: 'Throughput Speedup', value: '2.4x vs PyTorch' },
        { label: 'Memory Footprint', value: 'O(N) Linear' },
        { label: 'Bank Conflicts', value: '0 Confirmed' },
      ],
      architecture: [
        'Shared memory double-buffering using asynchronous copy intrinsics (cuda::memcpy_async)',
        'Warp-level online softmax reduction using __shfl_xor_sync instructions',
        'Direct PyTorch C++ / CUDA extension bindings via pybind11',
      ],
      techStack: ['CUDA C++', 'C++20', 'PyTorch C++', 'CMake', 'Nsight Compute'],
      githubUrl: 'https://github.com/bhawana-ai/flash-cuda-kernel',
    },
    {
      id: 'vllm-engine',
      title: 'Triton-vLLM High-Concurrency Inference Engine',
      category: 'ai-systems',
      tag: 'Distributed Inference // Cloud AI',
      description: 'High-throughput LLM serving engine featuring continuous batching, dynamic PagedAttention, and automated FP8 KV-cache quantization. Designed for multi-tenant concurrent request pipelines.',
      metrics: [
        { label: 'TTFT Reduction', value: '42% Faster' },
        { label: 'Throughput', value: '145 tokens/s' },
        { label: 'Concurrent Users', value: '250+ Stream' },
      ],
      architecture: [
        'Dynamic non-contiguous memory management inspired by OS virtual paging',
        'Custom Triton quantization kernels for FP8 and INT4 weight decompression',
        'Async FastAPI streaming endpoint with Server-Sent Events (SSE) backpressure handling',
      ],
      techStack: ['Python', 'vLLM', 'OpenAI Triton', 'TensorRT-LLM', 'Docker', 'FastAPI'],
      githubUrl: 'https://github.com/bhawana-ai/triton-vllm-serving',
    },
    {
      id: 'edge-vision',
      title: 'Autonomous Edge-to-Cloud Real-time Vision Pipeline',
      category: 'ai-systems',
      tag: 'Edge AI // TensorRT',
      description: 'Zero-copy edge inference pipeline handling multiple camera streams simultaneously. Converted PyTorch object detection and segmentation models into FP16 TensorRT engine graphs with sub-8ms latency.',
      metrics: [
        { label: 'Inference Latency', value: '< 7.8 ms' },
        { label: 'Camera Streams', value: '4x 1080p @ 60fps' },
        { label: 'Precision', value: 'FP16 / INT8' },
      ],
      architecture: [
        'Pipelined CUDA streams separating memory host-to-device transfers and kernel execution',
        'Zero-copy unified memory buffers directly bound to hardware video decoders (NVDEC)',
        'Low-overhead WebRTC streaming output to browser dashboards',
      ],
      techStack: ['TensorRT', 'CUDA Streams', 'OpenCV', 'Python', 'WebSockets'],
      githubUrl: 'https://github.com/bhawana-ai/edge-vision-tensorrt',
    },
    {
      id: 'gpu-dashboard',
      title: 'Neural Systems Profiler & GPU Telemetry Dashboard',
      category: 'web-systems',
      tag: 'Full-Stack // React 18 & WebSockets',
      description: 'Real-time telemetry and hardware monitoring platform for distributed GPU clusters. Visualizes streaming multiprocessor (SM) occupancy, HBM3 bandwidth utilization, warp stall reasons, and execution traces.',
      metrics: [
        { label: 'Update Latency', value: '< 10 ms' },
        { label: 'Rendering Rate', value: '60 FPS Canvas' },
        { label: 'Network Footprint', value: '< 15 KB/s' },
      ],
      architecture: [
        'Binary WebSocket telemetry protocol avoiding JSON serialization overhead',
        'React 18 concurrent features with memoized Canvas visualization layers',
        'Glassmorphic dark design system with responsive real-time metric gauges',
      ],
      techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
      githubUrl: 'https://github.com/bhawana-ai/gpu-telemetry-dashboard',
      liveUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // FEATURED ENGINEERING SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Production Work & Kernels
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
              A curated catalog of low-level GPU optimizations, distributed inference engines, and full-stack telemetry applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'cuda', label: 'GPU & CUDA' },
              { id: 'ai-systems', label: 'Inference Engines' },
              { id: 'web-systems', label: 'Web & Telemetry' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeFilter === f.id
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40"
            >
              <div>
                {/* Header Tag & Actions */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
                    {project.tag}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400/90 uppercase tracking-wider block">
                    Architecture Implementation:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Metrics & Tech Stack */}
              <div>
                {/* Metrics Callout */}
                <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-slate-800/80">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 text-center">
                      <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
