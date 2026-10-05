import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Dynamic current year that auto-increments automatically (e.g. 2026, 2027, etc.)
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030509] border-t border-slate-900/90 text-slate-400 relative overflow-hidden">
      {/* Subtle top border highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1">
                <img
                  src="/assets/branding/ceylonic_labs_icon_white_transparent.png"
                  alt="Ceylonic Labs Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5 font-display font-extrabold text-xl tracking-tight text-white">
                <span>CEYLONIC</span>
                <span className="text-cyan-400">LABS</span>
              </div>
            </div>

            <p className="text-sm font-bold text-slate-400 max-w-sm leading-relaxed">
              Innovating Heritage Through Technology
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              An agile software venture studio &amp; remote engineering lab in Sri Lanka. We build scalable vertical SaaS platforms and high-impact custom software for modern businesses.
            </p>

            <div className="pt-2">
              <a
                href="mailto:ceyloniclabs@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ceyloniclabs@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Flagship SaaS Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Custom Software Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Agile Sprint Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  About the 3 Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Commercial Pricing Models
                </button>
              </li>
            </ul>
          </div>

          {/* Proprietary Platforms */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Flagship Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  <span className="font-semibold text-white block">TCMS Tuition System</span>
                  <span className="text-[11px] text-slate-400">QR Smart Cards &amp; Automated Fees</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer mt-2"
                >
                  <span className="font-semibold text-white block">SurfDesk Rental POS</span>
                  <span className="text-[11px] text-slate-400">Digital Waivers &amp; Damage Proof</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Operations */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">
              Governance
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>100% Remote-First Lab</p>
              <p>Sri Lanka (Distributed)</p>
              <p className="text-[11px] text-slate-400 pt-1">
                Scaling toward formal Private Limited (Pvt Ltd) incorporation under Sri Lanka company registry.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Auto-Increment Year */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            &copy; {currentYear} <strong className="text-slate-200 font-semibold">Ceylonic Labs</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with pride in Sri Lanka</span>
            <span className="text-rose-500 font-mono">🇱🇰</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
