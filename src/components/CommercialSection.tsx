import React, { useState } from 'react';
import { 
  Check, 
  CreditCard, 
  ShieldCheck, 
  Zap,
  Building
} from 'lucide-react';

interface CommercialSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onNavigate }) => {
  const [modelType, setModelType] = useState<'saas' | 'custom'>('saas');

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
            <span>Commercial &amp; Billing Framework</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Transparent Pricing with{' '}
            <span className="gradient-text-cyan">Zero Hidden Fees</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether adopting our ready-to-deploy SaaS platforms or commissioning bespoke custom engineering, our billing policies are straightforward and fair.
          </p>
        </div>

        {/* Pricing Model Selector Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setModelType('saas')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                modelType === 'saas'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-300 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-4 h-4 text-cyan-950" />
              <span>SaaS Product Subscriptions</span>
            </button>

            <button
              onClick={() => setModelType('custom')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                modelType === 'custom'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-300 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building className="w-4 h-4 text-cyan-950" />
              <span>Custom Engineering Milestones</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display based on Toggle */}
        {modelType === 'saas' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Monthly Card */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Maximum Flexibility
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">
                  Monthly Subscription
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Ideal for growing tuition centers and year-round surf clubs wanting low upfront commitment.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-3xl font-display font-extrabold text-white">Month-to-Month</div>
                  <div className="text-xs text-slate-400 mt-1">Billed in advance every 30 days</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full cloud access &amp; regular updates</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Unlimited student / rental record capacity</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct WhatsApp &amp; phone builder support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cancel anytime with 14 days' notice</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              >
                Inquire for Monthly Quote
              </button>
            </div>

            {/* Annual Card (Featured) */}
            <div className="glass-card p-8 rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-b from-cyan-950/20 via-slate-900/60 to-slate-900/40 relative flex flex-col justify-between shadow-xl shadow-cyan-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 font-bold text-xs shadow-md">
                MOST POPULAR • SAVE ~20%
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  Best Value
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">
                  Annual Commitment
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Recommended for established institutes and high-volume operations seeking the lowest cost.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-3xl font-display font-extrabold text-cyan-300">15% – 20% Off</div>
                  <div className="text-xs text-slate-400 mt-1">Equivalent to ~2 months free licensing</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>All Monthly tier capabilities included</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Free on-site or remote hardware pairing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Priority feature requests in sprint backlog</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Guaranteed pricing lock for 12 months</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                Inquire for Annual Plan
              </button>
            </div>

            {/* Seasonal Card */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Tourism &amp; Leisure
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">
                  Seasonal Operations
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Tailored for seasonal leisure, tourism, and coastal enterprises with fluctuating operating cycles.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-3xl font-display font-extrabold text-white">3 to 6 Months</div>
                  <div className="text-xs text-slate-400 mt-1">Pay only while your business season is actively running</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Complete data preservation during hiatus</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Zero licensing fees during off-season months</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Instant on-demand re-activation next season</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Digital waivers &amp; photo damage matrix included</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              >
                Inquire for Seasonal Quote
              </button>
            </div>
          </div>
        ) : (
          /* Custom Engineering Milestones */
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/40 mb-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Milestone-Based Custom Engineering
                </h3>
                <p className="text-sm text-slate-400">
                  Every custom software project is budgeted with transparent sprint deliverables. You only approve payments for verified, demonstrated software.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="font-mono text-xs text-slate-500 uppercase">Milestone 01</span>
                  <div className="text-2xl font-bold font-display text-cyan-400 my-1">30% – 40%</div>
                  <div className="text-xs font-semibold text-white">Advance &amp; Architecture</div>
                  <p className="text-[11px] text-slate-400 mt-1">DB schema, system spec &amp; clickable Figma prototypes.</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="font-mono text-xs text-slate-500 uppercase">Milestone 02</span>
                  <div className="text-2xl font-bold font-display text-cyan-400 my-1">30%</div>
                  <div className="text-xs font-semibold text-white">Core Functional MVP</div>
                  <p className="text-[11px] text-slate-400 mt-1">Working APIs, auth &amp; live staging demo.</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="font-mono text-xs text-slate-500 uppercase">Milestone 03</span>
                  <div className="text-2xl font-bold font-display text-cyan-400 my-1">20% – 30%</div>
                  <div className="text-xs font-semibold text-white">Feature Complete &amp; UAT</div>
                  <p className="text-[11px] text-slate-400 mt-1">SMS, payments, hardware &amp; client beta testing.</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                  <span className="font-mono text-xs text-slate-500 uppercase">Milestone 04</span>
                  <div className="text-2xl font-bold font-display text-cyan-400 my-1">10%</div>
                  <div className="text-xs font-semibold text-white">Deploy &amp; Handover</div>
                  <p className="text-[11px] text-slate-400 mt-1">Production launch on domain + 30-day warranty.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>
                    <strong>Customer Protection Guarantee:</strong> In the event of contract termination, you retain 100% full ownership of all code, assets, and documentation completed up to the approved milestone.
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="shrink-0 px-4 py-2 rounded-lg font-semibold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  Estimate Custom Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
