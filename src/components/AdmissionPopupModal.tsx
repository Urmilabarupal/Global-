import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  BookOpen,
  Monitor
} from 'lucide-react';
import { InstituteSettings } from '../types';

interface AdmissionPopupModalProps {
  settings: InstituteSettings;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseName?: string) => void;
  onLearnMore: () => void;
}

export const AdmissionPopupModal: React.FC<AdmissionPopupModalProps> = ({
  settings,
  isOpen,
  onClose,
  onEnroll,
  onLearnMore
}) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (dontShowAgain) {
      try {
        localStorage.setItem('gcc_admission_popup_dismissed', 'true');
      } catch (e) {
        // ignore storage errors
      }
    }
    onClose();
  };

  const handleEnrollClick = () => {
    handleClose();
    onEnroll('New Batch 2024 - CET / REET / SSC');
  };

  const handleLearnMoreClick = () => {
    handleClose();
    onLearnMore();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-popup-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Announcement Bar within Card */}
        <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] p-5 sm:p-6 text-white relative">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Urgent Admissions Pill */}
          <div className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
            <span>Admissions Open • Limited Seats Available</span>
          </div>

          <h3 id="admission-popup-title" className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
            New Foundation Batches Starting
          </h3>
          <p className="text-xs sm:text-sm text-amber-300 font-semibold mt-1">
            Global Coaching Classes & Computer Education, Anupgarh
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
          
          {/* Key Schedule Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="bg-amber-50/80 border border-amber-200 p-3 rounded-2xl flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Starting Day</div>
                <div className="text-xs sm:text-sm font-black text-slate-900">{settings.newBatchDay}</div>
              </div>
            </div>

            <div className="bg-blue-50/80 border border-blue-200 p-3 rounded-2xl flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#0c2b5e] flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Daily Timing</div>
                <div className="text-xs sm:text-sm font-black text-[#0c2b5e]">{settings.newBatchTime}</div>
              </div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-2xl flex items-center gap-2.5">
              <Award className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Test Series</div>
                <div className="text-xs sm:text-sm font-black text-slate-900">{settings.testSeriesDays}</div>
              </div>
            </div>
          </div>

          {/* Popular Target Courses Covered */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Target Examinations</span>
              <span className="text-[#0c2b5e] font-black">Under Director Balram Nokhwal</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['CET (12th & Graduate)', 'REET (Level 1 & Level 2)', 'SSC GD / CGL', 'Rajasthan Police & SI', 'Patwari & VDO', 'RS-CIT Diploma', 'English & Hindi Typing'].map((exam, i) => (
                <span key={i} className="inline-flex items-center gap-1 bg-white text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{exam}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Institute Highlights:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>3 Days Free Demo Classes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>Regular Monday & Wednesday OMR Tests</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>100% Syllabus Printed & Class Notes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>Air-Conditioned Computer & Typing Lab</span>
              </div>
            </div>
          </div>

          {/* Direct helpline banner */}
          <div className="flex items-center justify-between bg-blue-900/5 p-3 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <div className="text-xs text-slate-600">
                Direct Admission Helpline: <strong className="text-[#0c2b5e]">{settings.primaryPhone1}</strong>
              </div>
            </div>
            <a 
              href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
              className="text-xs font-bold text-[#0c2b5e] hover:underline"
            >
              Call Now
            </a>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-xs text-slate-500 select-none cursor-pointer self-start sm:self-center">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded border-slate-300 text-[#0c2b5e] focus:ring-blue-500"
            />
            <span>Do not show again this session</span>
          </label>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleLearnMoreClick}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200/80 rounded-xl transition border border-slate-300 cursor-pointer"
            >
              Learn More
            </button>
            <button
              onClick={handleEnrollClick}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-black rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
