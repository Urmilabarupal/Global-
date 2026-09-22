import React from 'react';
import { 
  Building2, 
  Target, 
  Laptop, 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { InstituteSettings } from '../types';

interface AboutSectionProps {
  settings: InstituteSettings;
  onEnquireClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  settings,
  onEnquireClick
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Collage of Institute */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80" 
                alt="Global Coaching Classes & Computer Education Campus"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071c3d]/90 via-[#071c3d]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block bg-[#ffc700] text-[#071c3d] text-xs font-black px-2.5 py-0.5 rounded uppercase mb-2">
                  Anupgarh Campus
                </div>
                <h3 className="text-xl font-bold">
                  Global Coaching Classes & Computer Education
                </h3>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Opposite Govt Hospital, Behind Medical Store, Anupgarh</span>
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 text-[#0c2b5e] max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Institute Director</div>
                  <div className="text-base font-black text-[#0c2b5e]">Balram Nokhwal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-1.5 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-amber-500" />
              <span>About Our Institute</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2b5e] tracking-tight leading-tight">
              Dedication, Expert Mentorship & Disciplined Academic Excellence
            </h2>

            <div className="mt-4 space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Global Coaching Classes & Computer Education, Anupgarh</strong> is a premier coaching center dedicated to competitive exam success and computer education.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base">
                Our primary mission is to empower students with high-caliber teaching, exam-centric curricula, weekly test series, and comprehensive study material, enabling them to clear state and national government examinations with confidence.
              </p>
            </div>

            {/* Core Pillars Bullet Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Competitive Exam Coaching</h4>
                  <p className="text-xs text-slate-500">Targeted preparation for CET, REET, SSC, Railways, Police, Patwar, and LDC.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Computer Education (RS-CIT)</h4>
                  <p className="text-xs text-slate-500">Certified computer diploma training with hands-on typing and digital lab sessions.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Experienced Faculty Team</h4>
                  <p className="text-xs text-slate-500">Led by Director Balram Nokhwal and a team of dedicated subject teachers.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Serene & Safe Campus</h4>
                  <p className="text-xs text-slate-500">CCTV surveillance, distraction-free atmosphere, and personalized mentorship.</p>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={onEnquireClick}
                className="bg-[#0c2b5e] hover:bg-[#164282] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md transition"
                id="about-enquire-btn"
              >
                Book Free Academic Guidance
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
