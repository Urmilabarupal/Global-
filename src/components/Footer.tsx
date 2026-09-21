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
  Heart 
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
    <footer className="bg-[#071c3d] text-slate-300 pt-16 pb-24 md:pb-12 border-t-4 border-[#ffc700] relative" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Institute Branding & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <InstituteLogo size="md" />

            <div className="mt-3">
              <div className="inline-block bg-[#ffc700] text-[#071c3d] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wide font-sans">
                "Knowledge is the Supreme Ornament"
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Anupgarh's premier, result-oriented coaching academy for competitive examinations (CET, REET, SSC, Railway, Police) and computer education (RS-CIT).
              </p>
            </div>

            <div className="pt-2 text-xs text-amber-300">
              Director: <strong className="text-white text-sm">{settings.directorName}</strong>
            </div>

            {/* Helpline quick buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-blue-900/60 hover:bg-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl border border-blue-700/50 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{settings.primaryPhone1}</span>
              </a>

              <a
                href={`https://wa.me/91${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#15803d]/80 hover:bg-[#15803d] text-white text-xs font-bold px-3 py-2 rounded-xl border border-emerald-600/50 transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 transition">
                  All Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('batch')} className="hover:text-amber-300 transition text-amber-300 font-semibold">
                  New Batches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('test-series')} className="hover:text-amber-300 transition">
                  Test Series
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faculty')} className="hover:text-amber-300 transition">
                  Faculty Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('results')} className="hover:text-amber-300 transition">
                  Results & Selections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition">
                  Campus Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Featured Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  CET (Common Eligibility Test - 12th & Graduate)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  REET (Level-1 & Level-2 SST / Science-Maths)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  SSC GD, CGL, CHSL, MTS
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  Rajasthan Police & Delhi Police
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  RS-CIT Computer Education (RKCL Approved)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <button onClick={() => onNavigate('courses')} className="hover:text-amber-300 text-left">
                  LDC, Patwari, VDO & Railways
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Campus Location
            </h4>
            
            <div className="space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  Opposite Government Hospital,<br />
                  Behind Medical Store, Near Ganesh Temple,<br />
                  Opposite Dussehra Ground,<br />
                  <strong className="text-white">Anupgarh (Rajasthan) - 335701</strong>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <div>⏰ Office Hours: 8:00 AM to 7:00 PM</div>
              <div>📅 Tests: Regular Monday & Wednesday Schedule</div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full mt-3 bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow text-center flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Fill Online Admission Form</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>GLOBAL COACHING CLASSES & COMPUTER EDUCATION, ANUPGARH</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Director: Balram Nokhwal</span>
            <span className="text-slate-700">•</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Login</span>
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-300 transition flex items-center gap-1"
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
