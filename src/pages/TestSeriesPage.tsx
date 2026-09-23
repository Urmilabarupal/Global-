import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { InstituteSettings } from '../types';
import { 
  ClipboardCheck, 
  Calendar, 
  Clock, 
  BarChart3, 
  FileCheck2, 
  Award, 
  CheckCircle,
  FileText,
  Users
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
  const scheduleDays = [
    {
      day: 'Every Monday',
        timing: '10:00 AM - 12:00 PM',
      focus: 'General Knowledge & Current Affairs (Rajasthan GK, History, Geography, Art & Culture, National GK)',
      pattern: '100 Questions | 200 Marks | 1/3 Negative Marking | OMR Based'
    },
    {
      day: 'Every Wednesday',
        timing: '10:00 AM - 12:00 PM',
      focus: 'Mathematics, Mental Ability Reasoning & General Science (Physics, Chemistry, Biology)',
      pattern: '100 Questions | 200 Marks | Standardized OMR Evaluation'
    },
    {
      day: 'Alternate Sunday',
        timing: '09:00 AM - 12:00 PM',
      focus: 'Full-Length State-Level Mega Mock Test matching exact RSSB / RPSC final examination paper pattern',
      pattern: '150 Questions | 300 Marks | Real Examination Hall Simulation'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Regular Test Series & OMR Evaluation System"
          subtitle="Experience rigorous offline OMR testing matching RPSC & RSSB patterns with instant answer key discussions and Telegram merit lists."
        breadcrumbCurrent="Test Series"
        badge="Bi-Weekly Regular Testing"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission('Regular Test Series')}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-12">
        
        {/* Test Schedule Timeline */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-1 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-black uppercase text-amber-600 tracking-wider">
              Systematic Evaluation Cycle
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#0c2b5e] leading-tight">
              Monday & Wednesday Weekly Test Calendar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Testing is the backbone of selection. At Global Coaching Classes Anupgarh, every student undertakes regular examinations to monitor score progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {scheduleDays.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-[#0c2b5e] transition space-y-2.5 sm:space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#0c2b5e] text-white text-xs font-bold rounded-lg">
                    {item.day}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
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
              <div key={fidx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-2 sm:space-y-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#0c2b5e] flex items-center justify-center font-bold">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">{feat.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
