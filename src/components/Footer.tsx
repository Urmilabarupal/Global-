import React from 'react';
import { 
  MapPin, 
  Phone, 
  Sparkles, 
  ArrowUp, 
  Clock,
  Instagram
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
    { id: 'course-cet', label: 'CET (12th & Graduate Level)' },
    { id: 'course-reet-l1-l2', label: 'REET (Level 1 & 2)' },
    { id: 'course-rajasthan-police', label: 'Rajasthan & Delhi Police' },
    { id: 'course-ssc-gd-cgl', label: 'SSC GD, CGL, CHSL' },
    { id: 'course-rscit', label: 'RS-CIT Computer Course' },
    { id: 'course-patwari-vdo', label: 'Patwari, VDO & Railways' }
  ];

  return (
    <footer className="bg-white text-slate-700 pt-8 sm:pt-10 pb-20 sm:pb-8 border-t-2 border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] relative" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compressed Main Grid in Clean White Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 border-b border-slate-200">
          
          {/* Col 1: Institute Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-1 inline-block">
              <InstituteLogo size="sm" />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Anupgarh's premier competitive examination academy and certified computer training center under Director Balram Nokhwal.
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <a
                href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0c2b5e] text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 transition shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0c2b5e]" />
                <span>Call {settings.primaryPhone1}</span>
              </a>

              <a
                href={`https://wa.me/91${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/balramnokhwal/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-2xs"
                title="Director Balram Nokhwal on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Compressed Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0c2b5e] flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <span>Navigation</span>
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Compressed Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0c2b5e] flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <span>Featured Programs</span>
            </h4>
            <ul className="space-y-1.5 text-xs">
              {featuredPrograms.map((prog) => (
                <li key={prog.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <button
                    onClick={() => onNavigate(prog.id)}
                    className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition text-left truncate"
                  >
                    {prog.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0c2b5e] flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <span>Campus Location</span>
            </h4>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex items-start gap-2 text-slate-600 leading-snug">
                <MapPin className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0c2b5e]">Opposite Government Hospital,</div>
                  <div className="text-slate-500">Behind Medical Store, Dussehra Ground Road,</div>
                  <div className="font-semibold text-amber-700">Anupgarh (Rajasthan) - 335701</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1.5 border-t border-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#0c2b5e] flex-shrink-0" />
                <span>8:00 AM - 7:00 PM • Mon & Wed OMR Tests</span>
              </div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full py-2.5 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Apply for 3-Day Free Demo Class</span>
            </button>
          </div>

        </div>

        {/* Compressed Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="text-center sm:text-left leading-relaxed">
            © {currentYear} <strong className="text-slate-800">GLOBAL COACHING CLASSES & COMPUTER EDUCATION, ANUPGARH</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-medium text-slate-700">
              Director: Balram Nokhwal (B.Ed., M.A., UGC NET & SET)
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              onClick={scrollToTop}
              className="text-[#0c2b5e] hover:text-[#dc2626] transition flex items-center gap-1 font-bold"
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
