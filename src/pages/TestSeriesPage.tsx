import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { InstituteSettings } from '../types';
import { 
  ClipboardCheck, 
  Calendar, 
  Clock, 
  BarChart3, 
  FileCheck2, 
  Award, 
  PhoneCall, 
  Sparkles, 
  CheckCircle,
  FileText,
  Users,
  Send,
  Check
} from 'lucide-react';

interface TestSeriesPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
}

export const TestSeriesPage: React.FC<TestSeriesPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  const [selectedExam, setSelectedExam] = useState('Rajasthan CET (12th & Graduation)');
  const [registered, setRegistered] = useState(false);
  const [studentMobile, setStudentMobile] = useState('');
  const [studentName, setStudentName] = useState('');

  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  const handleTestSeriesEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentMobile.trim()) return;
    setRegistered(true);
  };

  const scheduleDays = [
    {
      day: 'Every Monday',
      dayHindi: 'प्रत्येक सोमवार',
      timing: '10:00 AM - 12:00 PM',
      focus: 'General Knowledge & Current Affairs (Rajasthan GK, History, Geography, Art & Culture, National GK)',
      pattern: '100 Questions | 200 Marks | 1/3 Negative Marking | OMR Based'
    },
    {
      day: 'Every Wednesday',
      dayHindi: 'प्रत्येक बुधवार',
      timing: '10:00 AM - 12:00 PM',
      focus: 'Mathematics, Mental Ability Reasoning & General Science (Physics, Chemistry, Biology)',
      pattern: '100 Questions | 200 Marks | Standardized OMR Evaluation'
    },
    {
      day: 'Alternate Sunday',
      dayHindi: 'वैकल्पिक रविवार',
      timing: '09:00 AM - 12:00 PM',
      focus: 'Full-Length State-Level Mega Mock Test matching exact RSSB / RPSC final examination paper pattern',
      pattern: '150 Questions | 300 Marks | Real Examination Hall Simulation'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Regular Test Series & OMR Evaluation System"
        titleHindi="ग्लोबल टेस्ट सीरीज — सोमवार एवं बुधवार नियमित टेस्ट"
        subtitle="Experience rigorous offline OMR testing matching RPSC & RSSB patterns with instant answer key discussions and Telegram merit lists."
        breadcrumbCurrent="Test Series"
        badge="Bi-Weekly Regular Testing"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission('Regular Test Series')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Test Schedule Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">
              Systematic Evaluation Cycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
              Monday & Wednesday Weekly Test Calendar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Testing is the backbone of selection. At Global Coaching Classes Anupgarh, every student undertakes regular examinations to monitor score progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scheduleDays.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0c2b5e] transition space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#0c2b5e] text-white text-xs font-bold rounded-lg">
                    {item.day}
                  </span>
                  <span className="text-xs font-bold text-amber-700">{item.dayHindi}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.timing}</span>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-1">Subject Focus:</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.focus}</p>
                </div>

                <div className="p-2.5 bg-blue-50/70 rounded-xl border border-blue-100 text-[11px] font-semibold text-[#0c2b5e]">
                  {item.pattern}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Key Benefits of Test Series */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Real OMR Sheet Practice',
              desc: 'Develop muscle memory for bubbling OMR sheets accurately to avoid disqualification or duplicate markings in board exams.',
              icon: FileCheck2
            },
            {
              title: 'Strict Negative Marking Control',
              desc: 'Learn calculated risk management and question elimination techniques to minimize 1/3 negative marking penalties.',
              icon: ClipboardCheck
            },
            {
              title: 'Immediate Answer Key Analysis',
              desc: 'Detailed post-test answer discussion and step-by-step shortcuts provided by subject teachers on the same afternoon.',
              icon: BarChart3
            },
            {
              title: 'Transparent Merit Rank Lists',
              desc: 'Scorecards and comparative batch ranks displayed on the notice board and shared in the official student Telegram group.',
              icon: Award
            },
            {
              title: 'Past 10 Years PYQs Included',
              desc: 'Every test incorporates verified previous examination questions asked by RPSC, RSSB, SSC, and Railway recruitment boards.',
              icon: FileText
            },
            {
              title: 'Personal Weak Area Diagnosis',
              desc: 'Faculty reviews individual scorecards during daily doubt counter hours (2 PM to 4 PM) to fix recurring mistakes.',
              icon: Users
            }
          ].map((feat, fidx) => {
            const Icon = feat.icon;
            return (
              <div key={fidx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0c2b5e] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">{feat.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Test Series Registration Card */}
        <div className="bg-gradient-to-r from-[#0c2b5e] to-[#071c3d] text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-[#ffc700] tracking-wider">
                Open for Regular & External Aspirants
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Join Global Coaching Test Series Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Regular classroom students receive full test series automatically included. External self-study candidates can also enroll for Monday & Wednesday test packages.
              </p>
            </div>

            {registered ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-200">Registration Received!</h4>
                <p className="text-xs text-slate-300">
                  We will share the upcoming Monday test syllabus with you on <strong>{studentMobile}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTestSeriesEnroll} className="space-y-4 max-w-md mx-auto text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffc700]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={studentMobile}
                    onChange={e => setStudentMobile(e.target.value)}
                    placeholder="e.g. 94130XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffc700]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Target Examination Stream</label>
                  <select
                    value={selectedExam}
                    onChange={e => setSelectedExam(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c2b5e] border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ffc700]"
                  >
                    <option value="Rajasthan CET (12th & Graduation)">Rajasthan CET (12th & Graduation)</option>
                    <option value="REET (Level-1 & Level-2)">REET (Level-1 & Level-2)</option>
                    <option value="Rajasthan Police Constable">Rajasthan Police Constable</option>
                    <option value="SSC GD, CGL, CHSL">SSC GD, CGL, CHSL</option>
                    <option value="Patwari, VDO & Railways">Patwari, VDO & Railways</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] font-black text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Register for Test Series Syllabus</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4">
              <span>Director Helpline: <strong className="text-white">{settings.primaryPhone1}</strong></span>
              <span>•</span>
              <a href={`tel:${cleanPhone}`} className="text-[#ffc700] hover:underline font-bold">Call Now</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
