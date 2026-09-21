import React from 'react';
import { 
  ClipboardCheck, 
  Calendar, 
  Clock, 
  BarChart3, 
  FileCheck2, 
  Award, 
  PhoneCall, 
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { InstituteSettings } from '../types';

interface TestSeriesSectionProps {
  settings: InstituteSettings;
  onEnquireClick: () => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  settings,
  onEnquireClick
}) => {
  const testFeatures = [
    {
      icon: Calendar,
      title: "Weekly Scheduled Tests",
      description: "Rigorous topic-wise OMR evaluations conducted every Monday and Wednesday according to the syllabus."
    },
    {
      icon: FileCheck2,
      title: "Subject-Wise Test Papers",
      description: "Focused practice modules for Rajasthan GK, Mathematics, Reasoning, Hindi, Science, and Teaching Pedagogy."
    },
    {
      icon: ClipboardCheck,
      title: "Full-Length Mock Exams",
      description: "Simulated exam-hall conditions with strict time limits, negative marking, and standardized OMR evaluation."
    },
    {
      icon: Award,
      title: "Previous Years' Questions (PYQs)",
      description: "Curated compilations of the past 10 years of solved question papers from RPSC, RSMSSB, and SSC boards."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Performance Analytics",
      description: "Detailed post-test feedback pinpointing strong conceptual areas and high-priority improvement topics."
    },
    {
      icon: CheckCircle,
      title: "Merit Rankings & Score Tracking",
      description: "Transparent ranking, cut-off benchmarks, and measurable score progress published on the notice board."
    }
  ];

  return (
    <section id="test-series" className="py-16 md:py-24 bg-gradient-to-b from-[#071c3d] to-[#0c2b5e] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#ffc700] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-[#071c3d] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key to Success: Continuous Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Regular Test Series
          </h2>
          <div className="text-xl sm:text-2xl font-bold text-[#ffc700] mt-1">
            (Every Monday & Wednesday on OMR Sheets)
          </div>
          <div className="w-24 h-1.5 bg-[#dc2626] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Master time management, speed, and negative-marking accuracy through our standardized OMR examination series.
            Preparation is only complete when rigorously tested!
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testFeatures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-amber-400/60 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ffc700] text-[#071c3d] flex items-center justify-center mb-4 shadow">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Schedule & CTA Banner */}
        <div className="bg-gradient-to-r from-amber-400 via-[#ffc700] to-yellow-500 text-[#071c3d] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="bg-[#dc2626] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
              Official OMR Test Schedule
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 text-[#071c3d]">
              Register Today for the Upcoming Weekly Test Series
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 mt-1 font-semibold">
              Both enrolled academy students and external aspirants are welcome to participate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={onEnquireClick}
              className="bg-[#0c2b5e] hover:bg-[#071c3d] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-xl transition transform hover:scale-105"
              id="test-series-enquire-cta"
            >
              Join Test Series
            </button>
            <a
              href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
              className="bg-[#dc2626] hover:bg-red-700 text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-xl transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>{settings.primaryPhone1}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
