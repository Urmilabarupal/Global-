import React from 'react';
import { X, Check, Clock, Calendar, GraduationCap, BookOpen, Send, PhoneCall } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnquire: (courseName: string) => void;
  primaryPhone?: string;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnquire,
  primaryPhone = "94130-94840"
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        role="dialog"
      >
        {/* Header with institute theme */}
        <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-block bg-[#ffc700] text-[#071c3d] text-xs font-black px-2.5 py-0.5 rounded uppercase mb-2">
            {course.category}
          </div>

          <h3 className="text-xl sm:text-2xl font-black">{course.name}</h3>
          <div className="text-amber-300 font-semibold text-base mt-0.5">
            {course.nameHindi}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100">
            {course.shortDesc}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <GraduationCap className="w-4 h-4 text-[#0c2b5e] mx-auto mb-1" />
              <div className="text-[10px] uppercase font-bold text-slate-400">Eligibility</div>
              <div className="text-xs font-bold text-slate-800 truncate">{course.eligibility}</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <Clock className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
              <div className="text-xs font-bold text-slate-800">{course.duration}</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <Calendar className="w-4 h-4 text-amber-600 mx-auto mb-1" />
              <div className="text-[10px] uppercase font-bold text-slate-400">Batch Timing</div>
              <div className="text-xs font-bold text-slate-800">{course.batchTime}</div>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0c2b5e]" />
              <span>Key Course Features & Highlights:</span>
            </h4>
            <div className="space-y-2">
              {course.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Modes / Methodology */}
          {course.preparationModes && course.preparationModes.length > 0 && (
            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Preparation Methodology & Strategy:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.preparationModes.map((mode, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-amber-950 font-medium">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{mode}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Syllabus Highlights */}
          {course.syllabusHighlights && course.syllabusHighlights.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
                Detailed Syllabus & Key Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {course.syllabusHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">✓</span>
                    <span>
                      {typeof hl === 'string' 
                        ? hl 
                        : `${hl.subject}: ${hl.topics?.join(', ')}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Subjects Covered */}
          {course.subjects && course.subjects.length > 0 && (
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                Subjects Covered in Curriculum:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {course.subjects.map((sub, i) => (
                  <span key={i} className="bg-blue-50 text-[#0c2b5e] font-semibold text-xs px-3 py-1 rounded-lg border border-blue-200">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${primaryPhone.replace(/[^0-9]/g, '')}`}
            className="text-xs font-bold text-[#0c2b5e] hover:underline flex items-center gap-1.5"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Direct helpline: {primaryPhone}</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(course.name);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire for Admission</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
