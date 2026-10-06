import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Lighting Gradients & Tech Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
            Engineering High-Impact{' '}
            <span className="gradient-text-cyan">Vertical SaaS</span> &amp;{' '}
            <span className="gradient-text-brand">Custom Software</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            A premier software engineering studio in Sri Lanka. We eliminate frontline operational friction, paper chaos, and revenue leakage for growing businesses through high-performance digital platforms and purposeful architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <span>Explore SaaS Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('methodology')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base shadow-lg"
            >
              <span>Engineering Process</span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-base"
            >
              <span>Book Discovery Call</span>
              <span className="text-cyan-400">&rarr;</span>
            </button>
          </div>

          {/* Core Operating Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <div className="glass-card p-4 rounded-xl text-left border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Direct Access</span>
              </div>
              <div className="font-display font-bold text-lg text-white">Senior Engineers</div>
              <p className="text-xs text-slate-400 mt-0.5">Collaborate directly with core architects with zero intermediary layers.</p>
            </div>

            <div className="glass-card p-4 rounded-xl text-left border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Reliability</span>
              </div>
              <div className="font-display font-bold text-lg text-white">Frontline-Tested</div>
              <p className="text-xs text-slate-400 mt-0.5">Engineered for high-volume crowds, offline modes &amp; mission-critical uptime.</p>
            </div>

            <div className="glass-card p-4 rounded-xl text-left border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Governance</span>
              </div>
              <div className="font-display font-bold text-lg text-white">Milestone Sprints</div>
              <p className="text-xs text-slate-400 mt-0.5">Transparent staged delivery with live staging reviews before sign-off.</p>
            </div>

            <div className="glass-card p-4 rounded-xl text-left border border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Architecture</span>
              </div>
              <div className="font-display font-bold text-lg text-white">Cloud-Native</div>
              <p className="text-xs text-slate-400 mt-0.5">Scalable, secure, and modern digital systems built for long-term growth.</p>
            </div>
          </div>
        </div>

        {/* Floating Technology Badges Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase font-mono tracking-widest text-slate-400 mb-6">
            Production Engineering Standards &amp; Architecture
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-400 text-sm font-medium">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> React &amp; Next.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Flutter Mobile / Firebase
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Node.js &amp; Laravel
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> MySQL &amp; MongoDB
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> TypeScript &amp; Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
