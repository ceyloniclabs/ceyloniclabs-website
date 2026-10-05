import React from 'react';
import { 
  Users, 
  Terminal, 
  Palette, 
  TrendingUp, 
  ShieldCheck, 
  Compass,
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const founders = [
    {
      role: 'Founder 01',
      title: 'Engineering & Architecture Lead',
      icon: Terminal,
      scope: 'System Architecture, Backend APIs, Cloud Infrastructure, Database Optimization, and System Security.',
      responsibilities: [
        'Core backend contracts for TCMS & SurfDesk',
        'Supabase / PostgreSQL database optimization',
        'High-uptime cloud environments & security hygiene',
      ],
    },
    {
      role: 'Founder 02',
      title: 'Product Design & Full-Stack Lead',
      icon: Palette,
      scope: 'UI/UX Design Systems, Frontend & Mobile Development, User Journey Mapping, and Cross-Platform QA.',
      responsibilities: [
        'Responsive client dashboards & operator interfaces',
        'Flutter mobile hardware scanner applications',
        'Frontline usability testing & rapid UI component fixes',
      ],
    },
    {
      role: 'Founder 03',
      title: 'Growth, Operations & Client Success Lead',
      icon: TrendingUp,
      scope: 'Client Acquisition, Live Field Demonstrations, Onboarding Logistics, Customer Support & Marketing.',
      responsibilities: [
        'Direct outreach to tuition academies & coastal surf centers',
        'On-site hardware pairing & staff onboarding training',
        'Frontline feedback collection & pilot success metrics',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05070C]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Ceylonic Labs Story</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Built by Engineers with{' '}
            <span className="gradient-text-cyan">Frontline Empathy</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We are three software engineers and friends in Sri Lanka who united to prove that a lean, coordinated product studio can engineer world-class software directly from home workspaces.
          </p>
        </div>

        {/* Brand Symbol & Story Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-800/90 mb-16 bg-gradient-to-br from-[#0c1322] via-[#080c16] to-[#05070c]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tech Lion Emblem Representation */}
            <div className="lg:col-span-4 flex flex-col items-center text-center justify-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="relative w-36 h-36 rounded-2xl bg-black border border-cyan-500/30 p-4 shadow-xl flex items-center justify-center mb-4 group">
                <img
                  src="/assets/branding/ceylonic_labs_icon_white_transparent.png"
                  alt="Ceylonic Tech Lion Symbol"
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-display font-bold text-white text-lg">The Ceylonic Tech Lion</h4>
              <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
                A geometric fusion of the historic heritage lion with modern circuit traces, structured hexagonal architecture, and technical symmetry.
              </p>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-display font-bold text-2xl text-white">
                "Innovating Heritage Through Technology"
              </h3>
              <p>
                Traditional enterprise software is often bloated, overpriced, and disconnected from the harsh conditions of real-world business. We started Ceylonic Labs to build software that thrives where the work actually happens.
              </p>
              <p>
                Whether it is a tuition hall entrance at 7:30 AM with hundreds of students queuing to scan their smart cards, or a beach surf shack in Weligama with wet hands and fluctuating 4G signals, our software is battle-tested to perform without excuses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Remote-First Operating Model</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Zero Bloat &amp; Accessible Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct Communication with the Builders</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Roadmap to Sri Lanka Pvt Ltd Registration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Founders Leadership Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              The 3-Founder Engineering Team
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Operating as a flat, agile collective where every founder writes code and oversees critical operational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, idx) => {
              const Icon = founder.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between hover:border-cyan-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {founder.role}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-lg text-white mb-2">
                      {founder.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {founder.scope}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Key Responsibilities:
                      </span>
                      {founder.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Full-Stack Contributor</span>
                    <span className="text-emerald-400 font-semibold">Active Co-Founder</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Principles / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>Products Over Hours</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We focus our primary engineering power on scalable, subscription-earning software products rather than trading developer hours endlessly.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Radical Reliability</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our clients entrust us with their daily revenue collections and student records. We protect that trust with strict data privacy, code reviews, and backups.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
            <div className="text-cyan-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Planned Incorporation</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operating transparently with legal client agreements while systematically pacing toward formal Sri Lanka Private Limited (Pvt Ltd) incorporation.
            </p>
          </div>
        </div>

        {/* Direct Connect CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-lg"
          >
            <span>Have a technical question? Talk to the founders</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
