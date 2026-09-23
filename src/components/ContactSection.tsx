import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Sparkles, Instagram, PenTool } from 'lucide-react';
import { InstituteSettings } from '../types';

interface ContactSectionProps {
  settings: InstituteSettings;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ settings }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Visit Our Campus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Contact Details & Campus Location
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            For admissions, batch timings, demo classes, and test series queries, contact us directly or visit our campus.
          </p>
        </div>

        {/* Contact Info & Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Institute Location & Director Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0c2b5e] text-[#ffc700] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Campus Address
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    GLOBAL COACHING CLASSES & COMPUTER EDUCATION
                  </h3>
                  
                  {/* Exact 5 lines translated to clean English */}
                  <div className="mt-3 p-4 bg-white rounded-2xl border border-slate-200/90 text-slate-800 text-sm sm:text-base leading-relaxed space-y-1 shadow-sm">
                    <p className="font-semibold text-[#0c2b5e]">📍 Opposite Government Hospital,</p>
                    <p>Behind Medical Store,</p>
                    <p>Near Ganesh Temple,</p>
                    <p>Opposite Dussehra Ground,</p>
                    <p className="font-bold text-[#dc2626]">Anupgarh (Rajasthan) - 335701</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Government+Hospital+Anupgarh+Rajasthan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition"
                  id="contact-get-directions-btn"
                >
                  <Navigation className="w-4 h-4 text-[#ffc700]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact the Institute</div>
              <h3 className="mt-1 text-xl font-black text-[#0c2b5e]">Talk to our admissions team</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`} className="rounded-xl bg-[#0c2b5e] px-3 py-3 text-center text-sm font-bold text-white">Call Now</a>
                <a href={`https://wa.me/91${settings.whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-xl bg-[#15803d] px-3 py-3 text-center text-sm font-bold text-white">WhatsApp</a>
              </div>
            </div>

            {/* Campus hours */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-bold text-[#0c2b5e]">
                <Clock className="w-4 h-4 text-amber-500" />
                Office Hours
              </div>
              <p className="mt-2">Monday to Saturday, 8:00 AM to 7:00 PM</p>
            </div>

            <div className="hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-5">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Founder & Director
                  </span>
                </div>
                <div className="text-lg font-black text-white">
                  Balram Nokhwal
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone 1 */}
                <div className="flex items-center justify-between bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#071c3d] flex items-center justify-center font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">Primary Helpline</div>
                      <div className="text-base sm:text-lg font-black font-mono tracking-wide text-white">{settings.primaryPhone1}</div>
                    </div>
                  </div>
                  <a
                    href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow"
                    id="contact-call-btn-1"
                  >
                    Call Now
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center justify-between bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-400 text-[#071c3d] flex items-center justify-center font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">Secondary Helpline</div>
                      <div className="text-base sm:text-lg font-black font-mono tracking-wide text-white">{settings.primaryPhone2}</div>
                    </div>
                  </div>
                  <a
                    href={`tel:${settings.primaryPhone2.replace(/[^0-9]/g, '')}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow"
                    id="contact-call-btn-2"
                  >
                    Call Now
                  </a>
                </div>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/91${settings.whatsappNumber}?text=Hello%20Global%20Coaching%20Classes%20Anupgarh,%20I%20would%20like%20information%20regarding%20courses.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#15803d] hover:bg-emerald-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition"
                  id="contact-whatsapp-chat-btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>

                {/* Official Instagram Reel link */}
                <a
                  href="https://www.instagram.com/balramnokhwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white font-bold py-3 rounded-2xl shadow-md transition text-xs sm:text-sm border border-pink-400/30"
                  id="contact-instagram-reel-btn"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Watch Reels on Instagram (@balramnokhwal)</span>
                </a>
              </div>

              {/* Office hours */}
              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span>Office Hours: Monday to Saturday, 8:00 AM to 7:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed + Landmarks */}
          <div className="lg:col-span-6 flex flex-col h-full space-y-4">
            
            {/* Map Container */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-md border-2 border-slate-200 h-96 sm:h-[420px] relative">
              <iframe
                title="Global Coaching Classes Anupgarh Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13963.882194263725!2d73.20173615!3d29.1906233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393e0bfa900f6075%3A0x86b0051e5927ad9a!2sAnupgarh%2C%20Rajasthan%20335701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-[#0c2b5e]">
                📍 Anupgarh, Rajasthan
              </div>
            </div>

            {/* Landmarks Checklist for easy student arrival */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-[#0c2b5e] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Nearby Landmarks for Easy Navigation:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Directly opposite Government Hospital Main Gate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Immediately behind Medical Store</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Adjacent to historical Ganesh Temple</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Directly facing Dussehra Ground Anupgarh</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
