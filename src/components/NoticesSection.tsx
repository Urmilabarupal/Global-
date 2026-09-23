import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, Sparkles, X, PlusCircle, AlertCircle } from 'lucide-react';
import { NoticeItem } from '../types';

interface NoticesSectionProps {
  notices: NoticeItem[];
  onOpenAdmin: () => void;
  onEnquireClick: () => void;
  hideHeader?: boolean;
  hideAdminButton?: boolean;
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({
  notices,
  onOpenAdmin,
  onEnquireClick,
  hideHeader = false,
  hideAdminButton = true
}) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  const categoryBadgeColors = {
    'New Batch': 'bg-red-100 text-red-700 border-red-200',
    'Test Series': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Exam Alert': 'bg-amber-100 text-amber-800 border-amber-200',
    'General': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <section id="notices" className={`${hideHeader ? 'py-1 sm:py-4' : 'py-10 sm:py-16 md:py-24 bg-white'} relative`}>
      <div className="max-w-7xl mx-auto px-1 sm:px-4 md:px-6">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-red-200">
              <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
              <span>Latest Updates & Announcements</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight leading-tight">
              Latest Notices & Bulletins
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#ffc700] mx-auto mt-2 sm:mt-3 rounded-full" />

            <p className="mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
              New batch commencements, weekly test series, upcoming examination schedules, and official announcements from Global Coaching Classes.
            </p>
          </div>
        )}

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {notices.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all duration-300 flex flex-col justify-between group hover:shadow-md ${
                item.isImportant 
                  ? 'bg-gradient-to-br from-amber-50/70 via-white to-red-50/40 border-amber-300 shadow-xs' 
                  : 'bg-slate-50 hover:bg-white border-slate-200 shadow-xs'
              }`}
              id={`notice-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border uppercase tracking-wider ${
                    categoryBadgeColors[item.category] || categoryBadgeColors['General']
                  }`}>
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-medium">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  {item.isImportant && (
                    <span className="bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase mt-0.5 shrink-0">
                      Alert
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0c2b5e] transition leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedNotice(item)}
                  className="text-xs font-bold text-[#0c2b5e] hover:text-[#dc2626] transition flex items-center gap-1"
                >
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onEnquireClick}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Notice */}
        {selectedNotice && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-block bg-[#0c2b5e] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-2.5">
                {selectedNotice.category}
              </div>

              <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Date: {selectedNotice.date}</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-[#0c2b5e] mt-1 mb-3 leading-snug">
                {selectedNotice.title}
              </h3>

              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 sm:mb-6">
                {selectedNotice.description}
              </div>

              <div className="flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedNotice(null);
                    onEnquireClick();
                  }}
                  className="px-4 py-2 sm:py-2.5 bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow"
                >
                  Enquire About Notice
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Admin addition - hidden by default on public facing screens */}
        {!hideAdminButton && (
          <div className="mt-8 text-center">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0c2b5e] bg-slate-50 px-4 py-2 rounded-xl border border-dashed border-slate-300"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Management: Publish New Notice (Admin Portal)</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
