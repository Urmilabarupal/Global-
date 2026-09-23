import React from 'react';
import { 
  MapPin, 
  Phone, 
  Sparkles, 
  ArrowUp, 
  Heart,
  Instagram 
} from 'lucide-react';
import { InstituteLogo } from './InstituteLogo';
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

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-24 md:pb-12 border-t-4 border-[#0c2b5e] relative shadow-inner" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Institute Branding & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <InstituteLogo size="sm" className="origin-left scale-110 sm:scale-100" />

            <div className="mt-2 max-w-[28rem]">
              <div className="inline-block bg-amber-100 text-[#071c3d] border border-amber-300 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wide font-sans">
                "Knowledge is the Supreme Ornament"
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anupgarh&apos;s result-oriented coaching academy for CET, REET, SSC, Railway, Police and RS-CIT computer education.
              </p>
            </div>

            {/* Helpline quick buttons */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <a
                href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-[#0c2b5e] text-xs font-bold px-3 py-2 rounded-xl border border-blue-200 transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/91${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-2 rounded-xl border border-emerald-200 transition shadow-xs"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-emerald-600">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.52 0 .2 5.32.2 11.87c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.87 11.87 0 0 0 5.62 1.42h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.14-3.42-8.41ZM12.08 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.85 9.85 0 1 1 8.38 4.65Zm5.4-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/balramnokhwal/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 text-pink-700 text-xs font-bold px-3 py-2 rounded-xl border border-pink-200 transition shadow-xs"
                title="Watch Director Balram Nokhwal's Video Reels on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#0c2b5e] border-b border-slate-200 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  All Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('batch')} className="text-amber-700 hover:text-[#0c2b5e] font-bold transition">
                  New Batches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('test-series')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  Test Series
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faculty')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  Faculty Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  Campus Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admission')} className="text-[#dc2626] font-bold hover:underline transition">
                  Online Admission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-slate-600 hover:text-[#0c2b5e] hover:font-bold transition">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#0c2b5e] border-b border-slate-200 pb-2">
              Featured Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-cet')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  CET (12th & Graduate Level)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-reet-l1-l2')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  REET (Level-1 & Level-2)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-ssc-gd-cgl')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  SSC GD, CGL, CHSL, MTS
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-rajasthan-police')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  Rajasthan Police & Delhi Police
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-rscit')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  RS-CIT Computer (RKCL Approved)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <button onClick={() => onNavigate('course-patwari-vdo')} className="text-slate-600 hover:text-[#0c2b5e] text-left transition">
                  Patwari, LDC, VDO & Railways
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#0c2b5e] border-b border-slate-200 pb-2">
              Campus Location
            </h4>
            
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0c2b5e]">Opposite Government Hospital,</div>
                  <div>Behind Medical Store, Near Ganesh Temple,</div>
                  <div>Opposite Dussehra Ground,</div>
                  <strong className="text-slate-900 font-bold">Anupgarh (Rajasthan) - 335701</strong>
                </div>
              </div>
            </div>

            <div className="pt-1 text-xs text-slate-500 space-y-0.5">
              <div>⏰ <strong>Office Hours:</strong> 8:00 AM to 7:00 PM</div>
              <div>📅 <strong>OMR Tests:</strong> Every Monday & Wednesday</div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold py-2.5 rounded-xl transition shadow-xs text-center flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Fill Online Admission Form</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong className="text-slate-800">GLOBAL COACHING CLASSES & COMPUTER EDUCATION, ANUPGARH</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-slate-700">Director: Balram Nokhwal</span>
            <span className="text-slate-300">•</span>
            <button
              onClick={scrollToTop}
              className="text-slate-500 hover:text-[#0c2b5e] transition flex items-center gap-1 font-medium"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
