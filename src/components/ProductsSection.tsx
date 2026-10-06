import React, { useState } from 'react';
import { 
  GraduationCap, 
  Waves, 
  QrCode, 
  Receipt, 
  Users, 
  MessageSquare, 
  FileSignature, 
  Camera, 
  Clock, 
  ShoppingCart, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface ProductsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<'tcms' | 'surfdesk'>('tcms');

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[#060910]">
      {/* Subtle radial ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proprietary SaaS Portfolio</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Specialized Software Built for{' '}
            <span className="gradient-text-cyan">Frontline Operations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We move beyond generic software. Our platforms are built with deep frontline empathy for the operators who rely on them every single day.
          </p>
        </div>

        {/* Product Selector Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
            <button
              onClick={() => setSelectedProduct('tcms')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                selectedProduct === 'tcms'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-cyan-300" />
              <span>TCMS (Education SaaS)</span>
            </button>

            <button
              onClick={() => setSelectedProduct('surfdesk')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                selectedProduct === 'surfdesk'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Waves className="w-4 h-4 text-cyan-300" />
              <span>SurfDesk (Leisure POS)</span>
            </button>
          </div>
        </div>

        {/* Product Details Display */}
        {selectedProduct === 'tcms' ? (
          /* TCMS Showcase */
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800/90 bg-gradient-to-br from-[#0c1322] via-[#090d18] to-[#05070c]">
            <div className="space-y-8">
              {/* Product Info Header */}
              <div className="text-center space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Proprietary SaaS Platform
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Production Ready &amp; Field-Tested
                  </span>
                </div>

                <div className="max-w-2xl mx-auto">
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3 tracking-tight">
                    TCMS — Tuition Class Management System
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    A comprehensive cloud platform engineered for private educational institutes, mass tuition centers, and tutors. Replaces chaotic door queues and paper slips with high-speed digital workflows.
                  </p>
                </div>
              </div>

              {/* Core Feature Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Sub-Second QR Gate Scanner</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Verify 500+ student arrivals in minutes via USB/Bluetooth hardware scanners or cameras.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Automated Fee Ledger &amp; POS</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Automated fee receipts, monthly dues tracking, and instant thermal printing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">4-Tier Strict RBAC</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Dedicated portals for Directors (Admin), Front-Desk Assistants, Teachers, and Students.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Parent SMS Gateway Alerts</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Immediate SMS alerts to parents on student check-in, fee payments, and exam reports.</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>Book TCMS Demonstration</span>
                  <ArrowRight className="w-4 h-4 text-cyan-950" />
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer text-center"
                >
                  View SaaS Pricing Plans
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* SurfDesk Showcase */
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800/90 bg-gradient-to-br from-[#0c1524] via-[#090e1a] to-[#05070c]">
            <div className="space-y-8">
              {/* Product Info Header */}
              <div className="text-center space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Proprietary SaaS Platform
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Field-Tested &amp; Offline-Resilient
                  </span>
                </div>

                <div className="max-w-2xl mx-auto">
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3 tracking-tight">
                    SurfDesk — Surfboard Rental &amp; Retail Shop POS
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    An enterprise-grade rental and point-of-sale platform designed for coastal surf schools, beachfront shacks, and water-sports hubs. Eliminates damaged gear disputes, unreturned boards, and soggy paper waivers.
                  </p>
                </div>
              </div>

              {/* Core Feature Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <FileSignature className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Paperless Digital Waivers</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Legally binding liability agreements with digital touchscreen e-signatures in the browser.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Photo Damage Matrix</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Before-and-after photo inspection logs attached to contract preventing return disputes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Automated Duration Billing</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Hourly, daily, and seasonal rental timers with automatic overtime and grace period calculation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Retail Barcode POS</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Simultaneous sales checkout for wax, rash guards, surf gear, and voucher redemptions.</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>Request SurfDesk Beach Demo</span>
                  <ArrowRight className="w-4 h-4 text-cyan-950" />
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer text-center"
                >
                  Explore Seasonal Plans
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
