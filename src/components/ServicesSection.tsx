import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cpu, 
  ArrowRight, 
  Check, 
  Code2
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Applications',
      desc: 'High-performance web applications, customer portals, and internal dashboards built with Next.js, React, and robust TypeScript backends.',
      tags: ['Next.js', 'React', 'Node.js', 'FastAPI'],
      capabilities: [
        'Responsive, reactive SPA & SSR interfaces',
        'Complex business rules & role authorization',
        'Sub-second API response times',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Engineering',
      desc: 'Native-feel iOS and Android applications developed with Flutter for frontline staff, hardware barcode scanning, and on-the-go management.',
      tags: ['Flutter', 'iOS & Android', 'Offline-First', 'Hardware Sync'],
      capabilities: [
        'Camera barcode / 2D QR scanning',
        'Bluetooth receipt printer integration',
        'Offline local cache with auto-sync',
      ],
    },
    {
      icon: Database,
      title: 'Cloud Architecture & Micro-ERP',
      desc: 'Custom business logic platforms to automate manual bottlenecks—from automated inventory deduction to client billing and audit logging.',
      tags: ['PostgreSQL', 'Supabase', 'Docker', 'Redis'],
      capabilities: [
        'Scalable relational schemas & indexing',
        'Real-time websockets & event streaming',
        'Automated daily backup & encryption',
      ],
    },
    {
      icon: Cpu,
      title: 'Hardware & IoT Integration',
      desc: 'Bridging web software with real-world frontline hardware devices to create seamless physical-to-digital workflows.',
      tags: ['2D QR Scanners', 'POS Thermal Printers', 'Digital Scales'],
      capabilities: [
        'USB and Bluetooth peripheral pairing',
        'Raw thermal receipt ESC/POS printing',
        'Fast turnkey hardware setup guidance',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#05070C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Custom Engineering Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Custom Software Built to{' '}
            <span className="gradient-text-cyan">Scale Your Business</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Beyond our proprietary SaaS platforms, we selectively engineer bespoke software systems for businesses demanding reliability, performance, and clean code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between group hover:border-cyan-500/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-xl text-white">Have a unique business workflow to automate?</h4>
            <p className="text-sm text-slate-400">We work directly with founders and operations managers to map and digitize complex systems.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-md shadow-cyan-500/20 cursor-pointer flex items-center gap-2"
          >
            <span>Request Custom Scope Estimate</span>
            <ArrowRight className="w-4 h-4 text-cyan-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
