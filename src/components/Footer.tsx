import React from 'react';
import { 
  MapPin, 
  Phone, 
  Sparkles, 
  ArrowUp, 
  Clock,
  Instagram,
  GraduationCap
} from 'lucide-react';
import { InstituteLogo } from './InstituteLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstituteSettings } from '../types';

interface FooterProps {
  settings: InstituteSettings;
  onNavigate: (sectionId: string) => void;
  onOpenAdmission: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  onNavigate,
  onOpenAdmission,
  onOpenAdmin
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'All Courses' },
    { id: 'batch', label: 'New Batches' },
    { id: 'test-series', label: 'Test Series' },
    { id: 'about', label: 'About Us' },
    { id: 'faculty', label: 'Faculty & Mentors' },
    { id: 'gallery', label: 'Campus Gallery' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const featuredPrograms = [
    { id: 'course-cet', label: 'CET (12th & Graduate)' },
    { id: 'course-reet-l1-l2', label: 'REET (Level 1 & 2)' },
    { id: 'course-rajasthan-police', label: 'Rajasthan & Delhi Police' },
    { id: 'course-ssc-gd-cgl', label: 'SSC GD, CGL, CHSL' },
    { id: 'course-rscit', label: 'RS-CIT Computer Course' },
    { id: 'course-patwari-vdo', label: 'Patwari, VDO & Railways' }
  ];

  return (
    <footer className="bg-[#071c3d] text-slate-300 pt-8 sm:pt-10 pb-20 sm:pb-8 border-t-4 border-amber-400 relative" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compressed Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Institute Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white/95 rounded-2xl p-2.5 inline-block shadow-sm">
              <InstituteLogo size="sm" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Anupgarh's premier competitive examination academy and certified computer training center under Director Balram Nokhwal.
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <a
                href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/15 transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {settings.primaryPhone1}</span>
              </a>

              <a
                href={`https://wa.me/91${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/balramnokhwal/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-xs"
                title="Director Balram Nokhwal on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Compressed Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
              <span>Navigation</span>
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-300 hover:text-amber-300 transition text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Compressed Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
              <span>Featured Programs</span>
            </h4>
            <ul className="space-y-1.5 text-xs">
              {featuredPrograms.map((prog) => (
                <li key={prog.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <button
                    onClick={() => onNavigate(prog.id)}
                    className="text-slate-300 hover:text-white transition text-left truncate"
                  >
                    {prog.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
              <span>Campus Location</span>
            </h4>

            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="flex items-start gap-2 text-slate-300 leading-snug">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Opposite Government Hospital,</div>
                  <div className="text-slate-400">Behind Medical Store, Dussehra Ground Road,</div>
                  <div className="font-semibold text-amber-300">Anupgarh (Rajasthan) - 335701</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>8:00 AM - 7:00 PM • Mon & Wed OMR Tests</span>
              </div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full py-2 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Apply for 3-Day Free Demo Class</span>
            </button>
          </div>

        </div>

        {/* Compressed Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="text-center sm:text-left leading-relaxed">
            © {currentYear} <strong className="text-white">GLOBAL COACHING CLASSES & COMPUTER EDUCATION, ANUPGARH</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-medium text-slate-300">
              Director: Balram Nokhwal (B.Ed., M.A., UGC NET & SET)
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={scrollToTop}
              className="text-amber-400 hover:text-amber-300 transition flex items-center gap-1 font-bold"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
