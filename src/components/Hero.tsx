import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  PhoneCall,
  GraduationCap
} from 'lucide-react';
import { DirectorPortrait } from './DirectorPortrait';
import { InstituteSettings } from '../types';

interface HeroProps {
  settings: InstituteSettings;
  onAdmissionClick: () => void;
  onViewCoursesClick: () => void;
  onCourseSelect: (courseId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  settings,
  onAdmissionClick,
  onViewCoursesClick,
  onCourseSelect
}) => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-[#071c3d] via-[#0c2b5e] to-[#0a224a] text-white pt-8 pb-16 md:pt-12 md:pb-24 border-b-4 border-[#ffc700]"
    >
      {/* Subtle Background Pattern & Geometry matching poster */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#ffc700] blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        {/* Geometric angled stripe */}
        <div className="absolute inset-y-0 right-1/4 w-32 -skew-x-12 bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Institute Branding, Tagline, New Batch, and Featured Exams */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {/* Red Poster Brush Badge */}
              <div className="poster-brush-badge text-xs md:text-sm uppercase tracking-wide">
                🔥 NEW BATCHES COMMENCING
              </div>
              
              {/* Bright Yellow Batch Schedule Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#ffc700] text-[#071c3d] px-3.5 py-1.5 rounded-full font-black text-xs md:text-sm shadow-md border border-amber-300">
                <Calendar className="w-4 h-4 text-[#071c3d]" />
                <span>{settings.newBatchDay} | {settings.newBatchTime}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1 bg-white/10 backdrop-blur-md text-amber-200 px-3 py-1 rounded-full text-xs font-semibold border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Anupgarh's Trusted Coaching Hub</span>
              </div>
            </div>

            {/* Main Institute Display Name */}
            <div className="space-y-1 mb-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-md">
                GLOBAL
              </h1>
              <div className="inline-block bg-[#ffc700] px-3 py-1 rounded-md transform -rotate-0.5 shadow-lg">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#071c3d] tracking-tight uppercase">
                  COACHING CLASSES
                </span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 tracking-wide">
                & COMPUTER EDUCATION <span className="text-[#ffc700] font-black">• ANUPGARH</span>
              </div>
            </div>

            {/* Sacred Tagline */}
            <div className="inline-block my-2 py-1 px-3 bg-red-950/50 border border-red-500/40 rounded-lg">
              <span className="text-amber-300 text-base sm:text-lg font-bold tracking-wider italic">
                "Knowledge is the Supreme Ornament"
              </span>
            </div>

            {/* Supporting Value Proposition Text */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mt-2 max-w-2xl">
              Quality education and comprehensive exam preparation under the mentorship of veteran subject specialists.
              <span className="text-amber-300 font-medium block mt-1">
                The proven pathway to success — regular OMR test series, quiet study environment, and complete printed notes.
              </span>
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onAdmissionClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 border border-red-400/40"
                id="hero-admission-btn"
              >
                <span>Submit Admission Enquiry</span>
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </button>

              <button
                onClick={onViewCoursesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-5 py-3.5 rounded-xl border border-white/25 transition backdrop-blur-sm"
                id="hero-view-courses-btn"
              >
                <span>View All Courses</span>
              </button>
            </div>

            {/* 3 Prominent Color Course Cards */}
            <div className="mt-8 w-full">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffc700] animate-ping" />
                <span>Featured Exam Target Batches:</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
                {/* CET - Orange Card */}
                <button
                  onClick={() => onCourseSelect('cet')}
                  className="group bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-orange-300/40 transition transform hover:-translate-y-1 text-center flex flex-col items-center justify-center cursor-pointer"
                  id="hero-exam-card-cet"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-lg sm:text-2xl font-black tracking-tight">CET</span>
                  <span className="text-[10px] sm:text-xs text-amber-100 font-medium leading-tight">
                    12th & Graduate
                  </span>
                </button>

                {/* REET - Green Card */}
                <button
                  onClick={() => onCourseSelect('reet-l1-l2')}
                  className="group bg-gradient-to-br from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-emerald-300/40 transition transform hover:-translate-y-1 text-center flex flex-col items-center justify-center cursor-pointer"
                  id="hero-exam-card-reet"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-lg sm:text-2xl font-black tracking-tight">REET</span>
                  <span className="text-[10px] sm:text-xs text-emerald-100 font-medium leading-tight">
                    Level 1 & Level 2
                  </span>
                </button>

                {/* SSC - Red Card */}
                <button
                  onClick={() => onCourseSelect('ssc-gd-cgl')}
                  className="group bg-gradient-to-br from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-rose-300/40 transition transform hover:-translate-y-1 text-center flex flex-col items-center justify-center cursor-pointer"
                  id="hero-exam-card-ssc"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-lg sm:text-2xl font-black tracking-tight">SSC</span>
                  <span className="text-[10px] sm:text-xs text-rose-100 font-medium leading-tight">
                    GD / CGL / CHSL
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Director Balram Nokhwal Presentation & Floating Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Floating Educational Graphics */}
            <div className="hidden sm:block absolute -top-4 -left-6 z-20 bg-white text-[#0c2b5e] p-2.5 rounded-2xl shadow-xl border border-amber-300 transform -rotate-3 animate-bounce duration-1000">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#0c2b5e] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black">100% Exam-Oriented</div>
                  <div className="text-[10px] text-slate-500">Trend-Based Curriculum</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-4 -right-4 z-20 bg-[#071c3d] text-white p-3 rounded-2xl shadow-xl border border-amber-400 transform rotate-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-amber-300">Mon & Wed</div>
                  <div className="text-[10px] text-slate-300">Regular Test Series</div>
                </div>
              </div>
            </div>

            {/* Teacher Profile Presentation */}
            <DirectorPortrait 
              directorName={settings.directorName}
              phone1={settings.primaryPhone1}
              phone2={settings.primaryPhone2}
              onEnquireClick={onAdmissionClick}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
