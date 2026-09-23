import React from 'react';
import { ChevronRight, ArrowLeft, Home, Sparkles, PhoneCall } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstituteSettings } from '../types';

interface PageBannerProps {
  title: string;
  titleHindi?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  badge?: string;
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission?: () => void;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  titleHindi,
  subtitle,
  breadcrumbCurrent,
  badge,
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  return (
    <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] text-white pt-5 pb-8 sm:pt-10 sm:pb-14 relative overflow-hidden shadow-inner">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc700_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10">
        {/* Top Breadcrumb & Contact Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-none">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#ffc700] text-slate-200 hover:text-[#071c3d] font-bold transition whitespace-nowrap text-xs"
              id="banner-back-home-btn"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back</span>
            </button>

            <span className="text-slate-400 text-xs">/</span>
            
            <button
              onClick={onBackToHome}
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition whitespace-nowrap text-xs"
            >
              <Home className="w-3 h-3" />
              <span>Home</span>
            </button>

            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-bold text-[#ffc700] truncate max-w-[150px] sm:max-w-xs text-xs">{breadcrumbCurrent}</span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl transition"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{settings.primaryPhone1}</span>
            </a>

            <a
              href={`https://wa.me/91${settings.whatsappNumber}?text=Hello%20Balram%20Sir%2C%20I%20have%20an%20enquiry%20regarding%20Global%20Coaching%20Classes%20Anupgarh.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl transition shadow-xs"
            >
              <WhatsAppIcon className="w-3 h-3 fill-white flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Banner Content */}
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          {badge && (
            <div className="inline-flex items-center gap-1.5 bg-[#ffc700] text-[#071c3d] text-[10px] sm:text-xs font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3 h-3 text-[#071c3d]" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight break-words">
            {title}
          </h1>

          {titleHindi && (
            <div className="text-sm sm:text-lg font-bold text-amber-300">
              {titleHindi}
            </div>
          )}

          <p className="text-slate-200 text-xs sm:text-base leading-relaxed pt-0.5">
            {subtitle}
          </p>

          {onOpenAdmission && (
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenAdmission}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 border border-red-400/40"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book 3-Day Free Demo Pass</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
