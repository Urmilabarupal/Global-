import React from 'react';
import { Phone, MapPin, Sparkles, Volume2 } from 'lucide-react';
import { InstituteSettings } from '../types';

interface AnnouncementBarProps {
  settings: InstituteSettings;
  onAdmissionClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ settings, onAdmissionClick }) => {
  // Ticker items for seamless auto-scrolling with day-wise schedule
  const tickerItems = [
    {
      badge: 'BATCH SCHEDULE',
      badgeColor: 'bg-amber-400 text-[#071c3d]',
      text: `Fresh Batches Start Every ${settings.newBatchDay} at ${settings.newBatchTime} (Daily 4-5 Hours Regular Classes)`
    },
    {
      badge: 'TEST SERIES',
      badgeColor: 'bg-emerald-500 text-white',
      text: `${settings.testSeriesDays} OMR-Based Regular Test Series with Instant Merit Rankings`
    },
    {
      badge: 'ADMISSIONS OPEN',
      badgeColor: 'bg-rose-500 text-white',
      text: 'Limited Seats Available for CET 10+2 & Graduate, REET Level 1 & 2, SSC GD/CGL, Rajasthan Police & RS-CIT'
    },
    {
      badge: 'STUDENT PRIVILEGE',
      badgeColor: 'bg-sky-500 text-white',
      text: '3 Days Free Demo Classes • 100% Exam-Oriented Printed Study Notes • Air-Cooled Computer & Typing Lab'
    },
    {
      badge: 'ADMISSION HELPLINE',
      badgeColor: 'bg-[#ffc700] text-[#071c3d]',
      text: `Call Direct: ${settings.primaryPhone1} / ${settings.primaryPhone2} • Director: ${settings.directorName}`
    },
    {
      badge: 'CAMPUS LOCATION',
      badgeColor: 'bg-slate-700 text-amber-300',
      text: `${settings.addressEnglish}`
    }
  ];

  return (
    <div 
      className="bg-[#071c3d] text-slate-100 border-b border-blue-900/60 h-8 sm:h-9 sticky top-0 z-50 shadow-sm flex items-center overflow-hidden select-none" 
      id="announcement-bar"
    >
      <div className="w-full flex items-center h-full">
        {/* Fixed Left Alert Badge */}
        <div className="flex-shrink-0 z-20 flex items-center gap-1.5 bg-[#dc2626] text-white px-2.5 sm:px-3 h-full font-black text-[10px] sm:text-[11px] tracking-wider uppercase shadow-md border-r border-red-700/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
          </span>
          <span className="hidden xs:inline">ADMISSION</span>
          <span>ALERT</span>
        </div>

        {/* Continuous Auto-scrolling Ticker Track */}
        <div 
          className="flex-1 overflow-hidden relative h-full flex items-center cursor-pointer"
          title="Auto-scrolling announcement (hover to pause)"
          onClick={onAdmissionClick}
        >
          <div className="animate-ticker flex items-center gap-6 text-xs text-slate-200">
            {/* First Set of Ticker Items */}
            {tickerItems.map((item, idx) => (
              <div key={`ticker-1-${idx}`} className="inline-flex items-center gap-2 flex-shrink-0">
                <span className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-extrabold tracking-wide uppercase ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-100 hover:text-amber-300 transition-colors">
                  {item.text}
                </span>
                <span className="text-amber-400/60 font-bold ml-3">•</span>
              </div>
            ))}

            {/* Duplicate Set for Seamless Continuous 360° Infinite Loop */}
            {tickerItems.map((item, idx) => (
              <div key={`ticker-2-${idx}`} className="inline-flex items-center gap-2 flex-shrink-0">
                <span className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-extrabold tracking-wide uppercase ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-100 hover:text-amber-300 transition-colors">
                  {item.text}
                </span>
                <span className="text-amber-400/60 font-bold ml-3">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Contact Quick Info (Visible on Desktop) */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0 z-20 bg-[#071c3d] pl-3 pr-4 h-full border-l border-blue-900/50 text-[11px] font-medium">
          <a 
            href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1 text-amber-300 hover:text-white transition font-bold"
            id="top-bar-phone"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{settings.primaryPhone1}</span>
          </a>

          <button
            onClick={onAdmissionClick}
            className="bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] px-2.5 py-0.5 rounded-full font-bold text-[10px] sm:text-[11px] transition shadow flex items-center gap-1 flex-shrink-0"
            id="top-bar-admission-btn"
          >
            <Sparkles className="w-3 h-3 text-[#071c3d]" />
            <span>Apply Online</span>
          </button>
        </div>
      </div>
    </div>
  );
};

