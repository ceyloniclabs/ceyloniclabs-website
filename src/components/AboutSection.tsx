import React from 'react';
import {
  ShieldCheck,
  Compass,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05070C]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Ceylonic Labs</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Engineering High-Performance Software with{' '}
            <span className="gradient-text-cyan">Operational Insight</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ceylonic Labs is an agile software engineering studio in Sri Lanka. We build proprietary vertical SaaS platforms and custom digital systems designed for speed, reliability, and measurable business impact.
          </p>
        </div>

        {/* Brand Symbol & Story Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-800/90 mb-16 bg-gradient-to-br from-[#0c1322] via-[#080c16] to-[#05070c]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tech Lion Emblem Representation */}
            <div className="lg:col-span-4 flex items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 via-[#060a14] to-black border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group min-h-[240px] sm:min-h-[280px] lg:min-h-full">
              {/* Subtle ambient tech glow */}
              <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[220px] xl:max-w-[260px] aspect-square flex items-center justify-center p-2">
                <img
                  src="/assets/branding/ceylonic_labs_icon_white_transparent.png"
                  alt="Ceylonic Tech Lion Symbol"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(6,182,212,0.25)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-display font-bold text-2xl text-white">
                "Innovating Heritage Through Technology"
              </h3>
              <p>
                Modern businesses require software that is agile, resilient, and purpose-built for actual frontline realities. Ceylonic Labs bridges the gap between complex operational bottlenecks and elegant, high-throughput digital systems.
              </p>
              <p>
                From educational academies requiring sub-second QR entry scans for hundreds of arriving students, to beachside leisure operations managing live rental timers and paperless waivers, our platforms are engineered to perform reliably where work happens.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Enterprise-Grade Code Quality &amp; Security</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Transparent, Milestone-Driven Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct Collaboration with Senior Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Client Code &amp; Data Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Principles / Corporate Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>Outcome-Driven Engineering</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We focus our engineering craft on high-leverage solutions that eliminate operational friction, automate manual tasks, and deliver clear business ROI.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Uncompromising Reliability</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our clients entrust us with daily operational workflows and critical data. We uphold rigorous code quality, strict data privacy, and reliable cloud uptime.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>100% IP &amp; Data Sovereignty</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transparent contracts, milestone accountability, and complete ownership transfer of custom software assets and databases directly to you upon delivery.
            </p>
          </div>
        </div>

        {/* Direct Connect CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-lg"
          >
            <span>Have a technical question or project? Consult with our engineering team</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
