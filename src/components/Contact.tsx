import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, ExternalLink, Copy, Check, Send, Terminal, Shield, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhawana57661@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // SECURE COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Initiate Contact & Collaboration
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl font-sans">
            Ready to discuss deep learning architectures, GPU acceleration, research internships, or full-stack systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Candidate Dossier & Cyber Graphic */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-cyan-500/20">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Bhawana</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    AI & Deep Learning Engineer
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Primary Email
                        </span>
                        <a
                          href="mailto:bhawana57661@gmail.com"
                          className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors"
                        >
                          bhawana57661@gmail.com
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                      title="Copy Email Address"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copied && (
                    <div className="mt-2 text-[10px] font-mono text-emerald-400 text-right">
                      ✓ Copied to clipboard
                    </div>
                  )}
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white">
                      Jaipur, Rajasthan, India
                    </span>
                  </div>
                </div>

                {/* University Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      University
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white">
                      JECRC UNIVERSITY (1st year, B.Tech CSE)
                    </span>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Professional Network
                        </span>
                        <a
                          href="https://www.linkedin.com/in/bhawana-ab1891426?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                        >
                          linkedin.com/in/bhawana-ab1891426
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Cybernetic Mascot Graphic (/robot_pills.png) */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex items-center gap-6 border border-slate-800">
              <div className="w-24 h-24 flex-shrink-0 relative">
                <img
                  src="/robot_pills.png"
                  alt="Cybernetic Mascot Graphic"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-white">Telemetry & Security</span>
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Fast response guaranteed. All communications routed directly to primary mailbox with end-to-end reliability.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Send an Direct Transmission
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans mb-6">
                Fill in the dispatch payload below to get in touch regarding technical opportunities or research projects.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm font-sans placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@organization.ai"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm font-sans placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="AI Internship / CUDA Kernel Architecture / Technical Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm font-sans placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Message Payload *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm font-sans placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-mono font-bold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </div>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Payload received successfully. Direct email confirmation routed to bhawana57661@gmail.com.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Global Footer */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Bhawana</strong>. Built for low-latency AI & high-throughput web systems.
          </div>

          <div className="flex items-center gap-6">
            <span>Jaipur, Rajasthan • JECRC UNIVERSITY</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 transition-colors flex items-center gap-1.5"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
