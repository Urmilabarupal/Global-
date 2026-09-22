import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Shield, 
  Sparkles, 
  GraduationCap, 
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
            <InstituteLogo size="md" />

            <div className="mt-3">
              <div className="inline-block bg-amber-100 text-[#071c3d] border border-amber-300 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wide font-sans">
                "Knowledge is the Supreme Ornament"
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anupgarh's premier, result-oriented coaching academy for competitive examinations (CET, REET, SSC, Railway, Police) and computer education (RS-CIT).
              </p>
            </div>

            {/* Helpline quick buttons */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <a
                href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-[#0c2b5e] text-xs font-bold px-3 py-2 rounded-xl border border-blue-200 transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{settings.primaryPhone1}</span>
              </a>

              <a
                href={`https://wa.me/91${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-2 rounded-xl border border-emerald-200 transition shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
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
                <span>Reels (@balramnokhwal)</span>
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
              onClick={onOpenAdmin}
              className="text-slate-500 hover:text-[#0c2b5e] transition flex items-center gap-1 font-medium"
            >
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span>Admin Panel</span>
            </button>
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
