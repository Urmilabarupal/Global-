import React from 'react';
import { Award, GraduationCap, Sparkles, UserPlus, BookOpen } from 'lucide-react';
import { FacultyMember } from '../types';

interface FacultySectionProps {
  faculty: FacultyMember[];
  onOpenAdmin: () => void;
  onEnquireClick: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({
  faculty,
  onOpenAdmin,
  onEnquireClick
}) => {
  // Show only Director / Founder per user request to hide extra placeholder faculty
  const directorList = faculty.filter(m => m.isDirector);
  const displayFaculty = directorList.length > 0 ? directorList : faculty.slice(0, 1);

  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>Academic Leadership & Mentorship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Director & Chief Educator
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Under the direct guidance and vision of Director Balram Nokhwal, Global Coaching Classes Anupgarh provides syllabus-oriented, authentic coaching and personalized doubt-solving for competitive aspirants.
          </p>
        </div>

        {/* Director Highlight Card */}
        <div className="max-w-4xl mx-auto">
          {displayFaculty.map((member) => {
            return (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-amber-400/80 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group"
                id={`faculty-card-${member.id}`}
              >
                {/* Photo Col */}
                <div className="md:col-span-5 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-slate-100 min-h-[320px]">
                  <img
                    src="/images/balram-nokhwal-office.png"
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />

                  {/* Role Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow bg-[#ffc700] text-[#071c3d] border border-amber-300">
                      Founder & Director
                    </span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#0c2b5e] text-xs font-bold px-3 py-1 rounded-xl shadow">
                    6 Years of Teaching Experience
                  </div>
                </div>

                {/* Details Col */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/80 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Institute Leadership • Anupgarh</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
                      Balram Nokhwal
                    </h3>

                    <div className="text-sm font-bold text-slate-700 mt-1 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#dc2626]" />
                      <span>Hindi & Geography Specialist • Competitive Exam Mentor</span>
                    </div>

                    <div className="text-xs font-semibold text-slate-600 mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 bg-blue-50 text-[#0c2b5e] rounded font-bold">B.Ed.</span>
                      <span className="px-2 py-0.5 bg-blue-50 text-[#0c2b5e] rounded font-bold">M.A. in Hindi</span>
                      <span className="px-2 py-0.5 bg-blue-50 text-[#0c2b5e] rounded font-bold">M.A. in Geography</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded font-bold">UGC NET & SET Qualified</span>
                    </div>

                    <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                      {member.bio || "Renowned mentor and educator in Anupgarh with dual post-graduations in Hindi and Geography, along with UGC NET and SET qualifications. Known for disciplined teaching, individual doubt guidance, and comprehensive test series."}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="font-bold text-[#0c2b5e]">Direct Mentorship</div>
                        <div className="text-slate-500 mt-0.5">Daily doubt clearing counter</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="font-bold text-[#0c2b5e]">Regular Test Series</div>
                        <div className="text-slate-500 mt-0.5">Monday & Wednesday OMR</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs text-slate-500 font-medium">
                      Chief Academic Mentor
                    </span>
                    <button
                      onClick={onEnquireClick}
                      className="px-5 py-2.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5"
                    >
                      <span>Connect for Academic Counseling →</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Admin note & Faculty addition CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0c2b5e] bg-white px-4 py-2 rounded-xl border border-dashed border-slate-300 hover:border-[#0c2b5e] transition shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Management: Add or Update Faculty (Admin Panel)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
