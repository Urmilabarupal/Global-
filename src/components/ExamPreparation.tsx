import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Shield, 
  Train, 
  Award, 
  Users, 
  Compass, 
  BadgeCheck, 
  FlaskConical, 
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ClipboardCheck,
  Video,
  Monitor,
  Check
} from 'lucide-react';
import { 
  POSTER_EXAM_PREPARATIONS, 
  POSTER_FACILITIES_5,
  PosterExamPreparation,
  PosterSubjectItem
} from '../data/initialData';

interface ExamPreparationProps {
  onExamClick: (examName: string) => void;
}

export const ExamPreparation: React.FC<ExamPreparationProps> = ({ onExamClick }) => {
  const [selectedStreamId, setSelectedStreamId] = useState<string>('cet');
  const [expandedSubjectIndex, setExpandedSubjectIndex] = useState<number | null>(0);

  const activeStream: PosterExamPreparation = 
    POSTER_EXAM_PREPARATIONS.find(s => s.id === selectedStreamId) || POSTER_EXAM_PREPARATIONS[0];

  const allExams = [
    {
      id: "cet",
      name: "CET",
      fullName: "Common Eligibility Test (12th & Graduate Level)",
      desc: "Core eligibility pathway for Rajasthan Government Junior Assistant, Police, Patwari, Forest Guard and other recruitments.",
      icon: FileText,
      accent: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      id: "reet",
      name: "REET",
      fullName: "Teacher Eligibility Examination (Level 1 & Level 2 + Mains)",
      desc: "Structured preparation for Educational Psychology, Teaching Methods, Sanskrit, Hindi, SST, Science and Mathematics.",
      icon: BookOpen,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      id: "ssc",
      name: "SSC",
      fullName: "SSC GD, CGL, CHSL, MTS",
      desc: "Shortcut-based training in Mathematics, Reasoning, Static GK and GD Constable physical preparation.",
      icon: Award,
      accent: "text-rose-700 bg-rose-50 border-rose-200"
    },
    {
      id: "computer",
      name: "RS-CIT & Typing",
      fullName: "Computer Education (RKCL Authorized)",
      desc: "Government-recognized RS-CIT diploma plus Hindi and English typing for High Court and LDC roles.",
      icon: Monitor,
      accent: "text-teal-700 bg-teal-50 border-teal-200"
    },
    {
      id: "police",
      name: "Rajasthan & Delhi Police",
      fullName: "Constable & Sub-Inspector (SI)",
      desc: "Reasoning, Computer Fundamentals, laws protecting women and children, Rajasthan GK and physical test guidance.",
      icon: Shield,
      accent: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      id: "railway",
      name: "Railway",
      fullName: "RRB NTPC, Group D, ALP & RPF",
      desc: "General Science, Arithmetic and online CBT mock test practice for Railway Recruitment Board examinations.",
      icon: Train,
      accent: "text-indigo-700 bg-indigo-50 border-indigo-200"
    },
    {
      id: "patwari",
      name: "Patwari & VDO",
      fullName: "Revenue Patwari & Village Development Officer",
      desc: "Panchayati Raj systems, rural development schemes, Rajasthan administration, Mathematics and Reasoning.",
      icon: Users,
      accent: "text-amber-800 bg-amber-50 border-amber-200"
    },
    {
      id: "defence",
      name: "Defence & Agniveer",
      fullName: "Army Agniveer GD, Clerk & Air Force",
      desc: "Disciplined study plans, model test papers, physical fitness and running strategy.",
      icon: Shield,
      accent: "text-green-800 bg-green-50 border-green-200"
    }
  ];

  return (
    <section id="exams" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffc700]/20 text-[#071c3d] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 border border-[#ffc700]/40">
            <Sparkles className="w-4 h-4 text-[#ffc700]" />
            <span>Complete subjects and preparation framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Subject-wise Preparation & Coaching Facilities
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            Global Coaching Classes, Anupgarh offers the key subjects, preparation formats and facilities shown in the course plan.
          </p>
        </div>

        {/* 1. TOP POSTER HIGHLIGHT: 5 GUARANTEED FACILITIES */}
        <div className="mb-14">
          <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="bg-[#ffc700] text-[#071c3d] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    5 Key Institute Features
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white">
                    5 Featured Facilities
                  </h3>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-amber-300 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-sm self-start md:self-auto">
                  New batch: Monday from 9:00 AM
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {POSTER_FACILITIES_5.map((fac, idx) => {
                  let Icon = ClipboardCheck;
                  if (fac.iconName === 'Video') Icon = Video;
                  if (fac.iconName === 'GraduationCap') Icon = GraduationCap;
                  if (fac.iconName === 'Compass') Icon = Compass;
                  if (fac.iconName === 'BookOpen') Icon = BookOpen;

                  return (
                    <div 
                      key={fac.id}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#ffc700] text-[#071c3d] flex items-center justify-center font-bold shadow-md">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-black uppercase text-amber-300 bg-white/10 px-2 py-0.5 rounded">
                            {fac.badge}
                          </span>
                        </div>
                        <h4 className="font-black text-white text-base mb-1">
                          {idx + 1}. {fac.titleHindi}
                        </h4>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                          {fac.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE STREAM EXPLORER (CET, REET, SSC, RS-CIT, POLICE) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16">
          
          {/* Stream Tabs Header */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white border-b border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Featured Courses
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Choose a course to view subjects and preparation formats
                </h3>
              </div>
              <div className="text-xs font-bold text-slate-300 bg-white/10 px-3 py-1.5 rounded-xl">
                Test series every Monday and Wednesday
              </div>
            </div>

            {/* Stream Selector Buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {POSTER_EXAM_PREPARATIONS.map((stream) => {
                const isActive = selectedStreamId === stream.id;
                return (
                  <button
                    key={stream.id}
                    onClick={() => {
                      setSelectedStreamId(stream.id);
                      setExpandedSubjectIndex(0);
                    }}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition flex items-center gap-2 ${
                      isActive 
                        ? 'bg-[#ffc700] text-[#071c3d] shadow-lg scale-105' 
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{stream.name}</span>
                    <span className="text-[10px] opacity-80 hidden sm:inline">({stream.badge})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stream Content */}
          <div className="p-5 sm:p-8">
            
            {/* Stream Summary Banner */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-block bg-[#0c2b5e] text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase mb-1.5">
                  {activeStream.badge}
                </div>
                <h4 className="text-2xl font-black text-[#0c2b5e]">
                  {activeStream.nameHindi}
                </h4>
                <p className="text-sm text-slate-700 font-medium mt-1">
                  {activeStream.slogan}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Duration: {activeStream.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    Batch time: {activeStream.batchSchedule}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    Eligibility: {activeStream.eligibility}
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => onExamClick(activeStream.name)}
                  className="w-full md:w-auto px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>Join this batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Target Posts Covered */}
            <div className="mb-8">
              <h5 className="text-xs uppercase font-black tracking-wider text-slate-400 mb-2.5">
                Key jobs and roles covered by this batch:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeStream.targetPosts.map((post, pIdx) => (
                  <span 
                    key={pIdx}
                    className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-xl border border-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{post}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Preparation Methodology */}
            <div className="mb-10 bg-amber-50/60 border border-amber-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <h5 className="font-black text-slate-900 text-base sm:text-lg">
                  Preparation format and teaching methodology:
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeStream.preparationTypes.map((prepType, tIdx) => (
                  <div 
                    key={tIdx}
                    className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-sm flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug">
                      {prepType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Subjects & Topics Breakdown */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Syllabus Details
                  </span>
                  <h5 className="text-lg sm:text-xl font-black text-[#0c2b5e]">
                    Included subjects and topic-wise syllabus ({activeStream.subjects.length} core subjects)
                  </h5>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Click any subject to view detailed topics
                </span>
              </div>

              <div className="space-y-3">
                {activeStream.subjects.map((sub: PosterSubjectItem, sIdx: number) => {
                  const isExpanded = expandedSubjectIndex === sIdx;
                  return (
                    <div 
                      key={sIdx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white hover:border-[#0c2b5e]"
                    >
                      <button
                        onClick={() => setExpandedSubjectIndex(isExpanded ? null : sIdx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-blue-50/40 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0c2b5e] font-black text-xs flex items-center justify-center">
                            {sIdx + 1}
                          </div>
                          <div>
                            <div className="font-black text-slate-900 text-sm sm:text-base">
                              {sub.name}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              {sub.nameEnglish}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {sub.marksOrWeightage && (
                            <span className="text-[11px] font-bold bg-[#ffc700]/30 text-[#071c3d] px-2.5 py-1 rounded-lg border border-[#ffc700]/40">
                              {sub.marksOrWeightage}
                            </span>
                          )}
                          <span className="text-xs font-bold text-[#0c2b5e] bg-white px-2 py-1 rounded border border-slate-200">
                            {isExpanded ? 'Show less ▲' : 'View topics ▼'}
                          </span>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-2">
                          <div className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                            Key chapters and topics covered in class:
                          </div>
                          <ul className="space-y-2">
                            {sub.topics.map((top, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{top}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 font-medium">
                ★ <strong className="text-slate-900">3 days of free demo classes available</strong> | Dedicated doubt counter for students needing extra support
              </div>
              <button
                onClick={() => onExamClick(activeStream.name)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#0c2b5e] hover:bg-[#071c3d] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
              >
                <span>Register for an {activeStream.name} batch demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ffc700]" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. ALL TARGET EXAMS CARD GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              All Other Competitive Exams
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A leading institute for government service preparation in Anupgarh and nearby areas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allExams.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${item.accent}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-400">
                        EXAM
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900 group-hover:text-[#0c2b5e] transition">
                      {item.name}
                    </h4>
                    <div className="text-[11px] font-bold text-amber-600 mt-0.5 mb-1.5">
                      {item.fullName}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onExamClick(item.name)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-[#0c2b5e] text-slate-700 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <span>View syllabus & admission</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
