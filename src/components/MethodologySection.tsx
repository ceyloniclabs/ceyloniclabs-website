import React from 'react';
import { 
  FileCode2, 
  Cpu, 
  TestTubes, 
  Rocket, 
  CheckCircle2, 
  GitCommit,
  ArrowRight
} from 'lucide-react';

interface MethodologySectionProps {
  onNavigate: (sectionId: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onNavigate }) => {
  const milestones = [
    {
      step: '01',
      percentage: '30% – 40%',
      title: 'Milestone 01: Architecture & UI/UX Figma Prototypes',
      timeline: 'Sprint 0 & 1',
      icon: FileCode2,
      desc: 'Complete architectural specification, database schema modeling, user journey mapping, and full clickable Figma design prototypes.',
      deliverables: [
        'System architecture diagram & data dictionary',
        'High-fidelity interactive UI/UX Figma prototype',
        'Signed sprint milestone scope specification',
      ],
      badge: 'Kickoff Advance',
    },
    {
      step: '02',
      percentage: '30%',
      title: 'Milestone 02: Core MVP & Functional Backend APIs',
      timeline: 'Sprint 2 & 3',
      icon: Cpu,
      desc: 'Building core database models, robust authentication, REST/tRPC APIs, and primary user workflow CRUD interfaces.',
      deliverables: [
        'Secure multi-tenant database & migrations',
        'Core business logic endpoints & validation',
        'Live sprint demo on staging server for client review',
      ],
      badge: 'Working Prototype',
    },
    {
      step: '03',
      percentage: '20% – 30%',
      title: 'Milestone 03: Feature Complete & Client UAT Testing',
      timeline: 'Sprint 4 & 5',
      icon: TestTubes,
      desc: 'Third-party API integrations (Payment gateways, SMS, hardware scanners), end-to-end edge testing, and hands-on User Acceptance Testing.',
      deliverables: [
        'SMS gateway, thermal printer & payment links',
        'Client staff hands-on testing on beta environment',
        'Bug triage and performance optimization passes',
      ],
      badge: 'Beta Validation',
    },
    {
      step: '04',
      percentage: '10%',
      title: 'Milestone 04: Production Deployment & 30-Day Warranty',
      timeline: 'Sprint 6 & Beyond',
      icon: Rocket,
      desc: 'Production cloud deployment on client custom domain, credential handover, staff walkthrough training, and standard 30-day bug warranty.',
      deliverables: [
        'Zero-downtime production launch on your domain',
        'Complete administrative credential handover',
        'Active 30-Day Bug Fix Warranty & monitoring',
      ],
      badge: 'Production Handover',
    },
  ];

  return (
    <section id="methodology" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Background ambient */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            <span>Agile Delivery Framework</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            De-risked Custom Development with{' '}
            <span className="gradient-text-cyan">Agile Milestones</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We reject murky invoices and endless delays. Every bespoke project follows our transparent 4-stage sprint delivery framework with verified deliverables before every payment.
          </p>
        </div>

        {/* Milestones Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/90 bg-slate-900/50 flex flex-col justify-between relative group hover:border-cyan-500/40"
              >
                <div>
                  {/* Top Step & Percentage Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                      {item.percentage}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Deliverables:
                    </span>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.timeline}</span>
                  <span className="text-cyan-400 font-semibold">{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Guarantees Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <div className="space-y-1">
            <div className="font-semibold text-white text-sm">1. Zero Speculation</div>
            <p className="text-xs text-slate-400">Work only begins after mutual architectural signoff and clear sprint targets.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="font-semibold text-white text-sm">2. Verified Sprint Demos</div>
            <p className="text-xs text-slate-400">You test working software on a live staging environment before authorizing the next phase.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="font-semibold text-white text-sm">3. 30-Day Bug Fix Warranty</div>
            <p className="text-xs text-slate-400">Post-deployment guarantee ensuring production issues are remediated immediately.</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-lg"
          >
            <span>Ready to commission a custom sprint? Request specification review</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
