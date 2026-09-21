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
      fullName: "Common Eligibility Test (12वीं व स्नातक स्तर)",
      desc: "राजस्थान सरकार की कनिष्ठ सहायक, पुलिस, पटवारी, वनरक्षक आदि भर्तियों का मुख्य अनिवार्य आधार।",
      icon: FileText,
      accent: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      id: "reet",
      name: "REET",
      fullName: "अध्यापक पात्रता परीक्षा (Level-1 व Level-2 + Mains)",
      desc: "शिक्षा मनोविज्ञान, शिक्षण विधियां, संस्कृत, हिन्दी, SST, विज्ञान व गणित की प्रामाणिक तैयारी।",
      icon: BookOpen,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      id: "ssc",
      name: "SSC",
      fullName: "SSC GD, CGL, CHSL, MTS",
      desc: "शॉर्टकट ट्रिक्स आधारित गणित, रीजनिंग, स्टैटिक जीके एवं जीडी कॉन्स्टेबल फिजिकल मार्गदर्शन।",
      icon: Award,
      accent: "text-rose-700 bg-rose-50 border-rose-200"
    },
    {
      id: "computer",
      name: "RS-CIT & Typing",
      fullName: "कम्प्यूटर एजुकेशन (RKCL Authorized)",
      desc: "सभी सरकारी नौकरियों हेतु मान्य RS-CIT डिप्लोमा एवं हाई कोर्ट/LDC हेतु हिन्दी व अंग्रेजी टाइपिंग।",
      icon: Monitor,
      accent: "text-teal-700 bg-teal-50 border-teal-200"
    },
    {
      id: "police",
      name: "Rajasthan & Delhi Police",
      fullName: "कॉन्स्टेबल एवं सब-इंस्पेक्टर (SI)",
      desc: "रीजनिंग, कम्प्यूटर, महिला एवं बाल अपराध कानून, राजस्थान जीके एवं फिजिकल टेस्ट टिप्स।",
      icon: Shield,
      accent: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      id: "railway",
      name: "Railway",
      fullName: "RRB NTPC, Group D, ALP & RPF",
      desc: "रेलवे भर्ती बोर्ड परीक्षाओं हेतु सामान्य विज्ञान, अंकगणित एवं ऑनलाइन CBT मॉक टेस्ट अभ्यास।",
      icon: Train,
      accent: "text-indigo-700 bg-indigo-50 border-indigo-200"
    },
    {
      id: "patwari",
      name: "Patwari & VDO",
      fullName: "राजस्व पटवारी एवं ग्राम विकास अधिकारी",
      desc: "पंचायती राज व्यवस्था, ग्रामीण विकास योजनाएं, राजस्थान प्रशासनिक ढांचा व गणित/रीजनिंग।",
      icon: Users,
      accent: "text-amber-800 bg-amber-50 border-amber-200"
    },
    {
      id: "defence",
      name: "Defence & Agniveer",
      fullName: "आर्मी अग्निवीर GD, क्लर्क व एयरफोर्स",
      desc: "अनुशासित अध्ययन कार्यक्रम, मॉडल टेस्ट पेपर्स एवं फिजिकल फिटनेस व दौड़ रणनीति।",
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
            <span>पोस्टर अनुसार सम्पूर्ण विषय व तैयारी का प्रारूप</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            विषयवार तैयारी एवं कोचिंग सुविधाएं
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            ग्लोबल कोचिंग क्लासेज, अनूपगढ़ में पोस्टर के अनुसार संचालित प्रमुख विषय, तैयारी के प्रकार एवं विशेष सुविधाएं।
          </p>
        </div>

        {/* 1. TOP POSTER HIGHLIGHT: 5 GUARANTEED FACILITIES */}
        <div className="mb-14">
          <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="bg-[#ffc700] text-[#071c3d] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    संस्थान की 5 प्रमुख विशेषताएं
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white">
                    पोस्टर में उल्लिखित 5 विशेष सुविधाएं
                  </h3>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-amber-300 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-sm self-start md:self-auto">
                  नया बैच: सोमवार से प्रातः 9:00 बजे
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
                  पोस्टर अनुसार मुख्य कोर्स
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  कोर्स चुनें और विषय व तैयारी का प्रकार देखें
                </h3>
              </div>
              <div className="text-xs font-bold text-slate-300 bg-white/10 px-3 py-1.5 rounded-xl">
                प्रत्येक सोमवार व बुधवार टेस्ट सीरीज
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
                    अवधि: {activeStream.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    बैच समय: {activeStream.batchSchedule}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    योग्यता: {activeStream.eligibility}
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => onExamClick(activeStream.name)}
                  className="w-full md:w-auto px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>इस बैच में प्रवेश लें</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Target Posts Covered */}
            <div className="mb-8">
              <h5 className="text-xs uppercase font-black tracking-wider text-slate-400 mb-2.5">
                इस बैच से कवर होने वाली प्रमुख नौकरियां व पद:
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

            {/* Preparation Methodology (तैयारी का प्रकार) */}
            <div className="mb-10 bg-amber-50/60 border border-amber-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <h5 className="font-black text-slate-900 text-base sm:text-lg">
                  तैयारी का प्रकार एवं शिक्षण पद्धति (Type of Preparation Offered):
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
                    पाठ्यक्रम विवरण
                  </span>
                  <h5 className="text-lg sm:text-xl font-black text-[#0c2b5e]">
                    शामिल विषय एवं टॉपिक-वार पाठ्यक्रम ({activeStream.subjects.length} मुख्य विषय)
                  </h5>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  किसी भी विषय पर क्लिक करके विस्तृत टॉपिक देखें
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
                            {isExpanded ? 'कम देखें ▲' : 'टॉपिक देखें ▼'}
                          </span>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-2">
                          <div className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                            कक्षा में अध्यापन किए जाने वाले प्रमुख अध्याय व टॉपिक:
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
                ★ <strong className="text-slate-900">3 दिन की फ्री डेमो कक्षाएं उपलब्ध</strong> | कमजोर विद्यार्थियों हेतु विशेष डाउट काउंटर
              </div>
              <button
                onClick={() => onExamClick(activeStream.name)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#0c2b5e] hover:bg-[#071c3d] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
              >
                <span>{activeStream.name} बैच में डेमो हेतु रजिस्टर करें</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ffc700]" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. ALL TARGET EXAMS CARD GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              अन्य सभी प्रतियोगी परीक्षाएं (All Competitive Exams)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              अनूपगढ़ एवं आसपास के क्षेत्र में सरकारी सेवा चयन हेतु अग्रणी संस्थान
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
                      <span>पाठ्यक्रम व एडमिशन</span>
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
