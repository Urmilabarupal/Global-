import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, Sparkles, X, PlusCircle, AlertCircle } from 'lucide-react';
import { NoticeItem } from '../types';

interface NoticesSectionProps {
  notices: NoticeItem[];
  onOpenAdmin: () => void;
  onEnquireClick: () => void;
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({
  notices,
  onOpenAdmin,
  onEnquireClick
}) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  const categoryBadgeColors = {
    'New Batch': 'bg-red-100 text-red-700 border-red-200',
    'Test Series': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Exam Alert': 'bg-amber-100 text-amber-800 border-amber-200',
    'General': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <section id="notices" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-red-200">
            <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
            <span>Latest Updates & Announcements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Latest Notices & Bulletins
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            New batch commencements, weekly test series, upcoming examination schedules, and official announcements from Global Coaching Classes.
          </p>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notices.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:shadow-xl ${
                item.isImportant 
                  ? 'bg-gradient-to-br from-amber-50/70 via-white to-red-50/40 border-amber-300 shadow-md' 
                  : 'bg-slate-50 hover:bg-white border-slate-200 shadow-sm'
              }`}
              id={`notice-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${
                    categoryBadgeColors[item.category]
                  }`}>
                    {item.category === 'New Batch' && '🔥 New Batch'}
                    {item.category === 'Test Series' && '📝 Test Series'}
                    {item.category === 'Exam Alert' && '⚠️ Exam Alert'}
                    {item.category === 'General' && '📌 General Notice'}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0c2b5e] transition">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedNotice(item)}
                  className="text-xs font-bold text-[#0c2b5e] hover:text-[#dc2626] transition flex items-center gap-1"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {item.isImportant && (
                  <button
                    onClick={onEnquireClick}
                    className="bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] text-xs font-bold px-3 py-1 rounded-lg shadow-sm"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Read More Modal */}
        {selectedNotice && (
          <div 
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedNotice(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block bg-[#0c2b5e] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {selectedNotice.category}
              </div>

              <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Date: {selectedNotice.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0c2b5e] mt-1 mb-4 leading-snug">
                {selectedNotice.title}
              </h3>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-700 leading-relaxed mb-6">
                {selectedNotice.description}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedNotice(null);
                    onEnquireClick();
                  }}
                  className="px-5 py-2.5 bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow"
                >
                  Enquire About This Notice
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Admin addition */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0c2b5e] bg-slate-50 px-4 py-2 rounded-xl border border-dashed border-slate-300"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Management: Publish New Notice (Admin Portal)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
