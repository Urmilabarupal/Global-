import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FacultyMember, InstituteSettings } from '../types';
import { Clock, GraduationCap, Award, CheckCircle2, User, Sparkles, BookOpen, Phone, Check, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface FacultyPageProps {
  faculty: FacultyMember[];
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
  onOpenAdmin: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  faculty = [],
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  // Extract Director (Balram Nokhwal) and other faculty members
  const director = faculty.find(m => m.isDirector) || {
    id: "director-balram",
    name: "Balram Nokhwal",
    role: "Founder & Managing Director",
    subject: "Competitive Exam Mentor, Hindi & Geography Specialist",
    experience: "6 Years of Teaching Experience",
    qualification: "B.Ed. | M.A. in Hindi | M.A. in Geography | UGC NET & SET Qualified",
    bio: "Renowned mentor and educator in Anupgarh with dual post-graduations in Hindi and Geography, along with UGC NET and SET qualifications. Known for disciplined teaching, individual doubt guidance, and comprehensive test series.",
    photoUrl: "/images/balram-nokhwal-office.png",
    isDirector: true
  };

  const otherFaculty = faculty.filter(m => !m.isDirector && m.id !== director.id);

  // Exact credentials provided by the user
  const qualificationsList = [
    { title: "B.Ed.", desc: "Bachelor of Education", badge: "Pedagogy" },
    { title: "M.A. in Hindi", desc: "Master of Arts (Hindi Literature & Grammar)", badge: "Post Graduate" },
    { title: "M.A. in Geography", desc: "Master of Arts (Physical & Rajasthan Geography)", badge: "Post Graduate" },
    { title: "UGC NET & SET Qualified", desc: "National & State Level Eligibility for Lectureship", badge: "Prestigious" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Our Expert Faculty Team & Mentors"
        subtitle="Meet the seasoned educators leading competitive examination prep in Anupgarh under the direct mentorship of Director Balram Nokhwal."
        breadcrumbCurrent="Faculty Team"
        badge="Academic Leadership"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission()}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12">
        
        {/* Daily Doubt Counter Highlight */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 text-[10px] sm:text-xs font-bold rounded-full border border-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Daily Faculty Doubt Counter: 2:00 PM - 4:00 PM</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-[#0c2b5e]">
              Individual Student Doubt Solving Every Afternoon
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Every student gets one-on-one time with Director Balram Sir and our educators to resolve difficult mathematics derivations, Hindi grammar rules, Geography maps, and GK retention questions.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmission('Faculty Demo Pass')}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold rounded-xl transition shadow whitespace-nowrap text-center shrink-0 active:scale-95"
          >
            Attend Free 3-Day Demo Classes
          </button>
        </div>

        {/* Grand Director Spotlight Card */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                Institute Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e] mt-1">
                Founder & Academic Director
              </h2>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <Award className="w-4 h-4 text-amber-500" />
              <span>6 Years of Teaching Experience</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-amber-400/90 grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
            
            {/* Director Official Office Photo Column */}
            <div className="lg:col-span-5 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto min-h-[380px] sm:min-h-[460px] overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src="/images/balram-nokhwal-office.png"
                alt="Director Balram Nokhwal at Global Coaching Classes office desk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              
              {/* Top Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 bg-[#ffc700] text-[#071c3d] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#071c3d]" />
                  Director - Balram Nokhwal
                </span>
                <span className="inline-flex items-center gap-1 bg-[#0c2b5e]/90 text-white backdrop-blur-md px-3 py-0.5 rounded-full text-[11px] font-bold shadow border border-white/20">
                  UGC NET & SET Qualified
                </span>
              </div>

              {/* Bottom Tag on Photo */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-[#0c2b5e]">Balram Nokhwal</div>
                    <div className="text-[11px] text-amber-700 font-bold">6 Years Teaching Experience</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                    NET & SET
                  </span>
                </div>
              </div>
            </div>

            {/* Comprehensive Information Column */}
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c2b5e] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                    <GraduationCap className="w-4 h-4 text-[#0c2b5e]" />
                    <span>Global Coaching Classes & Computer Education</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">
                    Opp. Govt Hospital, Anupgarh
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c2b5e] tracking-tight">
                    Balram Nokhwal
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-amber-700 mt-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#dc2626]" />
                    <span>Founder & Managing Director • Hindi & Geography Specialist</span>
                  </p>
                  
                  {/* Experience Highlight Pill */}
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-xl text-amber-900 text-xs font-extrabold">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span>Professional Experience: 6 Years of Teaching Experience</span>
                  </div>
                </div>

                {/* Educational Qualifications Section - Exact User Provided Data */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Educational Qualifications</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {qualificationsList.map((q, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-2.5 transition hover:bg-blue-50/50 hover:border-blue-200"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#0c2b5e] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-amber-300 stroke-[3]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-black text-slate-900 text-xs sm:text-sm">{q.title}</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 uppercase">
                              {q.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {q.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Director Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#0c2b5e]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct Mentorship</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Balram Sir personally guides students daily on syllabus completion, retention tricks, and mock test scores.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#0c2b5e]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bi-Weekly Test Series</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Monday & Wednesday OMR-based examinations mirroring official RPSC/RSMSSB patterns with instant merit rankings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenAdmission(`Demo Class with Director Balram Sir`)}
                  className="w-full sm:flex-1 py-3 px-5 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white text-xs sm:text-sm font-black rounded-xl shadow-md transition text-center active:scale-95"
                >
                  Book 3-Day Free Demo Class
                </button>
                
                <a
                  href={`https://wa.me/91${settings.whatsappNumber}?text=Hello%20Director%20Balram%20Sir%2C%20I%20want%20information%20regarding%20courses%20and%20counseling%20at%20Global%20Coaching%20Classes%20Anupgarh.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition flex items-center justify-center gap-2 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:9413094840"
                  className="w-full sm:w-auto py-3 px-4 bg-[#0c2b5e] hover:bg-[#071c3d] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Faculty Members Section (if any) */}
        {otherFaculty.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-[#0c2b5e]">
                Dedicated Subject Faculty
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Subject teachers committed to student conceptual clarity and examination tricks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherFaculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition p-4 sm:p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start gap-3.5">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-slate-200 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-[#0c2b5e] flex items-center justify-center shrink-0 border border-blue-100">
                        <User className="w-7 h-7 text-[#0c2b5e]" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-black text-slate-900 text-base sm:text-lg leading-tight">{member.name}</h4>
                      <p className="text-xs font-bold text-[#0c2b5e] mt-0.5">{member.role}</p>
                      <p className="text-[11px] text-amber-700 font-semibold">{member.subject}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Experience:</span>
                      <span className="font-semibold text-slate-700">{member.experience}</span>
                    </div>
                    {member.qualification && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Qualification:</span>
                        <span className="font-semibold text-slate-700 truncate max-w-[160px]">{member.qualification}</span>
                      </div>
                    )}
                    {member.bio && (
                      <p className="text-slate-500 text-[11px] pt-1 border-t border-slate-200/60 leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenAdmission(`Demo with ${member.name}`)}
                    className="w-full py-2 bg-[#0c2b5e] hover:bg-[#071c3d] text-white text-xs font-bold rounded-xl transition text-center"
                  >
                    Request Demo Class
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
