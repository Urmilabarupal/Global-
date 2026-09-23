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
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  POSTER_EXAM_PREPARATIONS, 
  POSTER_FACILITIES_5,
  PosterExamPreparation,
  PosterSubjectItem
} from '../data/initialData';

interface ExamPreparationProps {
  onExamClick: (examName: string) => void;
  onViewCourseDetail?: (courseId: string) => void;
}

export const ExamPreparation: React.FC<ExamPreparationProps> = ({ 
  onExamClick,
  onViewCourseDetail 
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState<string>('cet');
  const [expandedSubjectIndex, setExpandedSubjectIndex] = useState<number | null>(0);

  const activeStream: PosterExamPreparation = 
    POSTER_EXAM_PREPARATIONS.find(s => s.id === selectedStreamId) || POSTER_EXAM_PREPARATIONS[0];

  const allExams = [
    {
      id: "cet",
      name: "CET",
      fullName: "Common Eligibility Test (12th & Graduate Level)",
      desc: "Essential qualification gateway for Junior Assistant, Police, Patwari, Forester, and State clerical recruitments.",
      icon: FileText,
      accent: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      id: "reet",
      name: "REET",
      fullName: "Teacher Eligibility Test (Level-1 & Level-2 + Mains)",
      desc: "In-depth pedagogy, educational psychology, Sanskrit, Hindi, Social Studies, Science, and Mathematics.",
      icon: BookOpen,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      id: "ssc",
      name: "SSC",
      fullName: "SSC GD, CGL, CHSL, MTS",
      desc: "Shortcut calculation techniques for Quantitative Aptitude, Logical Reasoning, Static GK, and GD Physical guidance.",
      icon: Award,
      accent: "text-rose-700 bg-rose-50 border-rose-200"
    },
    {
      id: "computer",
      name: "RS-CIT & Typing",
      fullName: "Computer Education (RKCL Authorized)",
      desc: "Recognized RS-CIT diploma for government jobs along with High Court/LDC Hindi & English typing masterclasses.",
      icon: Monitor,
      accent: "text-teal-700 bg-teal-50 border-teal-200"
    },
    {
      id: "police",
      name: "Rajasthan & Delhi Police",
      fullName: "Constable & Sub-Inspector (SI)",
      desc: "Reasoning, computer basics, women & child safety laws, Rajasthan GK, and physical fitness coaching.",
      icon: Shield,
      accent: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      id: "railway",
      name: "Railway",
      fullName: "RRB NTPC, Group D, ALP & RPF",
      desc: "General science, arithmetic calculations, technical reasoning, and online CBT mock exam practice.",
      icon: Train,
      accent: "text-indigo-700 bg-indigo-50 border-indigo-200"
    },
    {
      id: "patwari",
      name: "Patwari & VDO",
      fullName: "Revenue Patwari & Village Development Officer",
      desc: "Panchayati Raj administration, rural schemes, Rajasthan administrative structure, and mental ability.",
      icon: Users,
      accent: "text-amber-800 bg-amber-50 border-amber-200"
    },
    {
      id: "defence",
      name: "Defence & Agniveer",
      fullName: "Army Agniveer GD, Clerk, Technical & Airforce",
      desc: "Disciplined study curriculum, daily physical fitness drills, model test papers, and speed endurance training.",
      icon: Shield,
      accent: "text-green-800 bg-green-50 border-green-200"
    }
  ];

  return (
    <section id="exams" className="py-6 sm:py-14 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-2 bg-[#ffc700]/20 text-[#071c3d] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2 sm:mb-3 border border-[#ffc700]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc700]" />
            <span>Comprehensive Syllabus & Preparation Framework</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight leading-tight">
            Subject-Wise Preparation & Coaching Facilities
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-[#ffc700] mx-auto mt-2.5 sm:mt-3 rounded-full" />

          <p className="mt-3 sm:mt-4 text-slate-700 text-xs sm:text-base md:text-lg leading-relaxed">
            Major academic streams, structured preparation methodologies, and premier coaching amenities at Global Coaching Classes, Anupgarh.
          </p>
        </div>

        {/* 1. TOP POSTER HIGHLIGHT: 5 GUARANTEED FACILITIES */}
        <div className="mb-8 sm:mb-14">
          <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
                <div>
                  <span className="bg-[#ffc700] text-[#071c3d] text-[10px] sm:text-xs font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                    5 Core Institute Highlights
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black mt-1.5 sm:mt-2 text-white leading-tight">
                    Verified Facilities & Academic Features
                  </h3>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-amber-300 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm self-start md:self-auto">
                  New Batch: Every Monday from 9:00 AM
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
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
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-8 sm:mb-16">
          
          {/* Stream Tabs Header */}
          <div className="p-3.5 sm:p-6 bg-slate-900 text-white border-b border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Core Career Streams
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  Select a Course to View Subjects & Preparation Strategy
                </h3>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl">
                Every Monday & Wednesday Test Series
              </div>
            </div>

            {/* Stream Selector Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 pt-1 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
              {POSTER_EXAM_PREPARATIONS.map((stream) => {
                const isActive = selectedStreamId === stream.id;
                return (
                  <button
                    key={stream.id}
                    onClick={() => {
                      setSelectedStreamId(stream.id);
                      setExpandedSubjectIndex(0);
                    }}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm transition flex items-center gap-1.5 sm:gap-2 flex-shrink-0 min-h-[38px] sm:min-h-[40px] ${
                      isActive 
                        ? 'bg-[#ffc700] text-[#071c3d] shadow-lg scale-100 sm:scale-105' 
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
          <div className="p-3.5 sm:p-6 md:p-8">
            
            {/* Stream Summary Banner */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 mb-5 sm:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <div className="inline-block bg-[#0c2b5e] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded uppercase mb-1 sm:mb-1.5">
                  {activeStream.badge}
                </div>
                <h4 className="text-lg sm:text-2xl font-black text-[#0c2b5e] break-words leading-tight">
                  {activeStream.nameHindi}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                  {activeStream.slogan}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-3 mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-slate-600 font-semibold">
                  <span className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-lg border border-blue-100">
                    <Clock className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <span>Duration: {activeStream.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-lg border border-blue-100">
                    <Calendar className="w-3 h-3 text-amber-600 flex-shrink-0" />
                    <span>Schedule: {activeStream.batchSchedule}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-lg border border-blue-100">
                    <GraduationCap className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span>Eligibility: {activeStream.eligibility}</span>
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto pt-2 sm:pt-0">
                <button
                  onClick={() => onExamClick(activeStream.name)}
                  className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <span>Enroll in this Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Target Posts Covered */}
            <div className="mb-6 sm:mb-8">
              <h5 className="text-xs uppercase font-black tracking-wider text-slate-400 mb-2.5">
                Target Career Posts & Positions Covered:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeStream.targetPosts.map((post, pIdx) => (
                  <span 
                    key={pIdx}
                    className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 font-bold text-xs px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{post}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Preparation Methodology */}
            <div className="mb-8 sm:mb-10 bg-amber-50/60 border border-amber-200 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <h5 className="font-black text-slate-900 text-base sm:text-lg">
                  Teaching Methodology & Preparation Types:
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                {activeStream.preparationTypes.map((prepType, tIdx) => (
                  <div 
                    key={tIdx}
                    className="bg-white p-3 sm:p-3.5 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-snug break-words">
                      {prepType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Subjects & Topics Breakdown */}
            <div id="syllabus-breakdown-section">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-blue-700 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>Syllabus Breakdown</span>
                  </div>
                  <h5 className="text-base sm:text-xl md:text-2xl font-black text-[#0c2b5e] leading-tight break-words">
                    Included Subjects & Topic-Wise Curriculum ({activeStream.subjects.length} Core Subjects)
                  </h5>
                </div>
                <span className="self-start sm:self-auto text-[11px] sm:text-xs text-slate-600 font-semibold bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200 whitespace-nowrap shadow-2xs">
                  Tap subject to expand topics
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {activeStream.subjects.map((sub: PosterSubjectItem, sIdx: number) => {
                  const isExpanded = expandedSubjectIndex === sIdx;
                  return (
                    <div 
                      key={sIdx}
                      className="border border-slate-200 hover:border-[#0c2b5e]/60 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden transition-all bg-white shadow-xs hover:shadow-md"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedSubjectIndex(isExpanded ? null : sIdx)}
                        className="w-full p-3.5 sm:p-4 md:p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-slate-50/90 to-white hover:from-blue-50/30 hover:to-white transition"
                      >
                        {/* Subject Number & Title */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 text-[#0c2b5e] font-black text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                            {String(sIdx + 1).padStart(2, '0')}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-black text-slate-900 text-sm sm:text-base leading-tight break-words">
                              {sub.name}
                            </div>
                            <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-normal mt-0.5 truncate sm:whitespace-normal">
                              {sub.nameEnglish}
                            </div>
                          </div>
                        </div>

                        {/* Marks & Expand Button */}
                        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-2.5 sm:pt-0 border-t border-slate-100 sm:border-0">
                          {sub.marksOrWeightage ? (
                            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black bg-[#ffc700] text-[#071c3d] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-amber-400/80 shadow-2xs whitespace-nowrap">
                              <Sparkles className="w-3 h-3 text-[#071c3d] flex-shrink-0" />
                              <span className="truncate max-w-[130px] sm:max-w-none">{sub.marksOrWeightage}</span>
                            </span>
                          ) : <span className="sm:hidden" />}
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0c2b5e] hover:bg-[#164282] text-white px-3 sm:px-3.5 py-1.5 rounded-lg sm:rounded-xl transition shadow-2xs whitespace-nowrap min-h-[36px]">
                            <span>{isExpanded ? 'Hide Topics' : 'View Topics'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />}
                          </span>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-3.5 sm:p-5 md:p-6 bg-slate-50/80 border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-200/60">
                            <span className="flex items-center gap-1.5 text-[#0c2b5e] leading-snug">
                              <BookOpen className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                              <span>Core Syllabus Chapters & Lecture Topics:</span>
                            </span>
                            <span className="text-[11px] text-slate-500 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 self-start sm:self-auto">
                              {sub.topics.length} Key Topics Covered
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                            {sub.topics.map((top, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2 sm:gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="leading-snug text-slate-800 font-medium break-words text-xs sm:text-sm">{top}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
                ★ <strong className="text-slate-900">3 Days Free Demo Classes Available</strong> | Dedicated Doubt Counter
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                {onViewCourseDetail && (
                  <button
                    onClick={() => onViewCourseDetail(activeStream.id)}
                    className="w-full sm:w-auto px-4 py-3 sm:py-2.5 bg-slate-100 hover:bg-[#0c2b5e] text-slate-700 hover:text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 min-h-[44px]"
                  >
                    <span>View {activeStream.name} Course Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => onExamClick(activeStream.name)}
                  className="w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                >
                  <span>Register for Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffc700]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. ALL TARGET EXAMS CARD GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              All Competitive & Government Job Examinations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Premier Institution in Anupgarh for State and Central Examination Selection
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

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (onViewCourseDetail) {
                          onViewCourseDetail(item.id);
                        } else {
                          onExamClick(item.name);
                        }
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#0c2b5e] text-slate-700 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <span>View Course Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onExamClick(item.name)}
                      className="py-2 px-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition shadow-xs"
                    >
                      <span>Enquire</span>
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
