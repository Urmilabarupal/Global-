import React, { useState } from 'react';
import { Award, CheckCircle, PlusCircle, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { ResultItem } from '../types';

interface ResultsSectionProps {
  results: ResultItem[];
  onOpenAdmin: () => void;
  onEnquireClick: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  results,
  onOpenAdmin,
  onEnquireClick
}) => {
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('All');

  const examCategories = ['All', 'REET', 'CET', 'Police', 'Patwari', 'SSC'];

  const filteredResults = results.filter((res) => {
    if (selectedExamFilter === 'All') return true;
    return res.exam.toLowerCase().includes(selectedExamFilter.toLowerCase());
  });

  return (
    <section id="results" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Authentic Achievements & Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Our Successful Students & Results
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Selections achieved by Global Coaching Classes Anupgarh students in various state and national competitive examinations.
            (We publish 100% verified and genuine results only).
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {examCategories.map((exam) => (
            <button
              key={exam}
              onClick={() => setSelectedExamFilter(exam)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                selectedExamFilter === exam
                  ? 'bg-[#0c2b5e] text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {exam === 'All' ? 'All Results' : exam}
            </button>
          ))}
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              id={`result-card-${item.id}`}
            >
              <div>
                {/* Photo & Verified Badge */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-200 mb-4">
                  <img
                    src={item.photoUrl || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"}
                    alt={item.studentName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Selection</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                    Year: {item.year}
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#0c2b5e] transition">
                  {item.studentName}
                </h3>

                <div className="text-xs font-bold text-[#dc2626] mt-0.5">
                  {item.exam}
                </div>

                <div className="mt-2 bg-white p-2.5 rounded-xl border border-slate-200/80 text-xs">
                  <div className="text-slate-800 font-semibold">{item.result}</div>
                  {item.rank && (
                    <div className="text-amber-700 text-[11px] mt-0.5 font-medium">{item.rank}</div>
                  )}
                </div>
              </div>

              {item.rollNumber && (
                <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono">
                  Roll No: {item.rollNumber}
                </div>
              )}
            </div>
          ))}

          {/* Admin Placeholder Card as requested in prompt */}
          <div 
            onClick={onOpenAdmin}
            className="bg-white rounded-3xl p-6 border-2 border-dashed border-slate-300 hover:border-[#0c2b5e] transition cursor-pointer flex flex-col items-center justify-center text-center group min-h-[260px]"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0c2b5e] group-hover:bg-[#0c2b5e] group-hover:text-white flex items-center justify-center mb-3 transition shadow-sm">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">
              Add Verified Selection
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Add selected students for REET / CET / SSC / Police via the admin management panel.
            </p>
            <span className="mt-3 text-xs text-[#0c2b5e] font-bold underline">
              + Add Verified Result
            </span>
          </div>
        </div>

        {/* Bottom trust reminder */}
        <div className="mt-12 text-center bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-2xl mx-auto text-xs text-slate-600">
          <p>
            📢 <strong>Important Notice:</strong> Global Coaching Classes exclusively features candidates who were enrolled in our classroom curriculum or formal test series. We maintain complete transparency and integrity.
          </p>
        </div>

      </div>
    </section>
  );
};
