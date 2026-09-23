import React from 'react';
import { MapPin, Phone, Clock, Navigation, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstituteSettings } from '../types';

interface ContactSectionProps {
  settings: InstituteSettings;
  hideHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ settings, hideHeader = false }) => {
  return (
    <section id="contact" className={`${hideHeader ? 'py-2 sm:py-6' : 'py-8 sm:py-16 md:py-24'} bg-white relative`}>
      <div className="max-w-7xl mx-auto px-1 sm:px-4 md:px-6">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 px-2">
            <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
              <span>Visit Our Campus</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight leading-tight">
              Contact Details & Campus Location
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#ffc700] mx-auto mt-2 sm:mt-3 rounded-full" />

            <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base md:text-lg leading-relaxed">
              For admissions, batch timings, demo classes, and test series queries, contact us directly or visit our campus.
            </p>
          </div>
        )}

        {/* Contact Info & Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Authentic Institute Location & Director Details */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Main Address Card */}
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0c2b5e] text-[#ffc700] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Campus Address
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5 leading-snug">
                    GLOBAL COACHING CLASSES & COMPUTER EDUCATION
                  </h3>
                  
                  {/* Exact 5 lines in clean English */}
                  <div className="mt-2.5 sm:mt-3 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed space-y-1 shadow-2xs">
                    <p className="font-semibold text-[#0c2b5e]">📍 Opposite Government Hospital,</p>
                    <p>Behind Medical Store,</p>
                    <p>Near Ganesh Temple,</p>
                    <p>Opposite Dussehra Ground,</p>
                    <p className="font-bold text-[#dc2626]">Anupgarh (Rajasthan) - 335701</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Government+Hospital+Anupgarh+Rajasthan"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition"
                  id="contact-get-directions-btn"
                >
                  <Navigation className="w-4 h-4 text-[#ffc700]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Contact the Institute</div>
              <h3 className="mt-0.5 sm:mt-1 text-lg sm:text-xl font-black text-[#0c2b5e]">Talk to our admissions team</h3>
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                <a href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`} className="rounded-xl bg-[#0c2b5e] px-3 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Call Now</span>
                </a>
                <a href={`https://wa.me/91${settings.whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-xl bg-[#15803d] hover:bg-[#166534] px-3 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Campus hours */}
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 font-bold text-[#0c2b5e]">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Office Hours</span>
              </div>
              <p className="mt-1 sm:mt-2 text-slate-600">Monday to Saturday, 8:00 AM to 7:00 PM</p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed + Landmarks */}
          <div className="lg:col-span-6 flex flex-col h-full space-y-3 sm:space-y-4">
            
            {/* Map Container */}
            <div className="bg-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-slate-200 h-64 sm:h-80 md:h-[420px] relative">
              <iframe
                title="Global Coaching Classes Anupgarh Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13963.882194263725!2d73.20173615!3d29.1906233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393e0bfa900f6075%3A0x86b0051e5927ad9a!2sAnupgarh%2C%20Rajasthan%20335701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 rounded-lg sm:rounded-xl shadow-md border border-slate-200 text-[11px] sm:text-xs font-bold text-[#0c2b5e]">
                📍 Anupgarh, Rajasthan
              </div>
            </div>

            {/* Landmarks Checklist for easy student arrival */}
            <div className="bg-slate-50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-[#0c2b5e] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Nearby Landmarks for Easy Navigation:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-slate-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>Opposite Government Hospital Main Gate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>Behind Medical Store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>Adjacent to Ganesh Temple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>Directly facing Dussehra Ground</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
