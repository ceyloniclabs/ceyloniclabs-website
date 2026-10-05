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
  CheckCircle2, 
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
          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800/90 bg-gradient-to-br from-[#0c1322] via-[#090d18] to-[#05070c]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Flagship SaaS Platform 01
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Pilot Validated
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                    TCMS — Tuition Class Management System
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    A comprehensive cloud platform engineered for private educational institutes, mass tuition centers, and tutors. Replaces chaotic door queues and paper slips with high-speed digital workflows.
                  </p>
                </div>

                {/* Core Feature Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Sub-Second QR Gate Scanner</div>
                      <p className="text-xs text-slate-400 mt-0.5">Verify 500+ student arrivals in minutes via USB/Bluetooth hardware scanners or cameras.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Automated Fee Ledger &amp; POS</div>
                      <p className="text-xs text-slate-400 mt-0.5">Automated fee receipts, monthly dues tracking, and instant thermal printing.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">4-Tier Strict RBAC</div>
                      <p className="text-xs text-slate-400 mt-0.5">Dedicated portals for Directors (Admin), Front-Desk Assistants, Teachers, and Students.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Parent SMS Gateway Alerts</div>
                      <p className="text-xs text-slate-400 mt-0.5">Immediate SMS alerts to parents on student check-in, fee payments, and exam reports.</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <span>Book TCMS Demonstration</span>
                    <ArrowRight className="w-4 h-4 text-cyan-950" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
                  >
                    View SaaS Pricing Plans
                  </button>
                </div>
              </div>

              {/* Graphic Mockup / Live Visual Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#0b101c] border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-xs text-slate-400 ml-2">TCMS Operations Scanner</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE SCANNER
                    </span>
                  </div>

                  {/* Mock Scanner Card */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-center">
                      <div className="w-20 h-20 mx-auto rounded-lg bg-black border border-cyan-500/40 p-2 flex items-center justify-center mb-2 shadow-inner">
                        <QrCode className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="text-xs font-mono text-slate-400">STUDENT ID: STU-10492</div>
                      <div className="text-white font-bold text-sm mt-0.5">Kasun Perera — Grade 11 Combined Maths</div>
                      <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-500/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ATTENDANCE RECORDED (0.38s)</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-2 font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Monthly Tuition Status:</span>
                        <span className="text-emerald-400 font-semibold">PAID (Receipt #RCP-2026-0812)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Parent SMS Alert:</span>
                        <span className="text-cyan-400 font-semibold">DISPATCHED (077 ••• ••34)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Current Hall Batch:</span>
                        <span className="text-slate-200">Hall A - Capacity 450/450</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SurfDesk Showcase */
          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800/90 bg-gradient-to-br from-[#0c1524] via-[#090e1a] to-[#05070c]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Flagship SaaS Platform 02
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Coastal Beach Ready
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                    SurfDesk — Surfboard Rental &amp; Retail Shop POS
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    An enterprise-grade rental and point-of-sale platform designed for coastal surf schools, beachfront shacks, and water-sports hubs. Eliminates damaged gear disputes, unreturned boards, and soggy paper waivers.
                  </p>
                </div>

                {/* Core Feature Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <FileSignature className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Paperless Digital Waivers</div>
                      <p className="text-xs text-slate-400 mt-0.5">Legally binding liability agreements with digital touchscreen e-signatures in the browser.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Photo Damage Matrix</div>
                      <p className="text-xs text-slate-400 mt-0.5">Before-and-after photo inspection logs attached to contract preventing return disputes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Automated Duration Billing</div>
                      <p className="text-xs text-slate-400 mt-0.5">Hourly, daily, and seasonal rental timers with automatic overtime and grace period calculation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Retail Barcode POS</div>
                      <p className="text-xs text-slate-400 mt-0.5">Simultaneous sales checkout for wax, rash guards, surf gear, and voucher redemptions.</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <span>Request SurfDesk Beach Demo</span>
                    <ArrowRight className="w-4 h-4 text-cyan-950" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
                  >
                    Explore Seasonal Plans
                  </button>
                </div>
              </div>

              {/* Graphic Mockup Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#0b121e] border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-xs text-slate-400 ml-2">SurfDesk Rental Counter</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      ACTIVE RENTAL
                    </span>
                  </div>

                  {/* Mock Surf Desk Card */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400">CONTRACT #SRF-2026-0391</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                          RETURN IN 42 MIN
                        </span>
                      </div>
                      <div className="text-white font-bold text-base">Torq Epoxy 7'6" Funboard #B-14</div>
                      <div className="text-xs text-slate-400 mt-1">Customer: Liam O'Connor (Passport KYC Verified)</div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-800/80 text-xs">
                        <div className="p-2 rounded bg-slate-950/60">
                          <span className="text-slate-500 block text-[10px]">PRE-INSPECTION:</span>
                          <span className="text-cyan-300 font-medium">3 Photos Attached</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950/60">
                          <span className="text-slate-500 block text-[10px]">DIGITAL WAIVER:</span>
                          <span className="text-emerald-400 font-medium">Signed on iPad</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-2 font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Security Deposit:</span>
                        <span className="text-slate-200 font-semibold">$50.00 / LKR 15,000 (Pre-Authorized)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Rate Structure:</span>
                        <span className="text-cyan-400 font-semibold">2 Hours ($14.00) + Wax ($3.00)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-500">Connection Mode:</span>
                        <span className="text-emerald-400 font-semibold">Offline-Ready (Coastal 4G Sync)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
