import React from 'react';
import { Award, PenTool, Sparkles, PhoneCall } from 'lucide-react';

interface DirectorPortraitProps {
  directorName?: string;
  phone1?: string;
  phone2?: string;
  onEnquireClick?: () => void;
}

export const DirectorPortrait: React.FC<DirectorPortraitProps> = ({
  directorName = "Balram Nokhwal",
  phone1 = "94130-94840",
  phone2 = "95094-46840",
  onEnquireClick
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto" id="director-portrait-hero">
      {/* Background Decorative Crest */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#0c2b5e] via-[#164282] to-[#ffc700] rounded-3xl opacity-20 blur-lg" />
      
      <div className="relative bg-white rounded-3xl p-3 md:p-4 shadow-2xl border-2 border-amber-300/60 overflow-hidden">
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#0c2b5e]/95 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-md border border-amber-400/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Founder & Director</span>
          </div>
          <div className="inline-flex items-center gap-1 bg-[#15803d]/95 text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow">
            <span>Expert Guidance</span>
          </div>
        </div>

        {/* Director Photo Frame */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-blue-50 to-[#0c2b5e]/10">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=85" 
            alt={`Director ${directorName} - Global Coaching Classes Anupgarh`}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            loading="eager"
          />

          {/* Subtle gradient vignette at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071c3d]/90 via-[#071c3d]/40 to-transparent" />

          {/* Quote Pill in image */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm font-semibold drop-shadow-md">
              "Right direction leads to certain success..."
            </p>
            <p className="text-amber-300 text-xs font-medium drop-shadow">
              Continuous practice and dedicated mentorship!
            </p>
          </div>
        </div>

        {/* Director Name Badge */}
        <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 rounded-2xl border border-amber-300 flex flex-col items-center text-center shadow-inner">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-[#071c3d] px-4 py-1 rounded-full text-xs font-extrabold shadow-sm border border-amber-400 uppercase tracking-wider">
            <PenTool className="w-3.5 h-3.5 text-[#071c3d]" />
            <span>Director</span>
          </div>
          <h3 className="mt-1.5 text-2xl font-black text-[#0c2b5e] tracking-tight">
            {directorName}
          </h3>
          <p className="text-xs text-slate-700 font-medium mt-0.5">
            Competitive Exam Mentor & Career Counselor, Anupgarh
          </p>

          {/* Quick Contact Buttons */}
          <div className="mt-3 flex items-center gap-2 w-full">
            <a 
              href={`tel:${phone1.replace(/[^0-9]/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold py-2 px-3 rounded-xl transition shadow"
              id="hero-director-call-btn"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>{phone1}</span>
            </a>
            {onEnquireClick && (
              <button 
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold py-2 px-3 rounded-xl transition shadow"
                id="hero-director-meet-btn"
              >
                <span>Counseling</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
