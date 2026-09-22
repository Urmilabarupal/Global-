import React from 'react';
import { ChevronRight, ArrowLeft, Home, Sparkles, PhoneCall, MessageCircle } from 'lucide-react';
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
    <div className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 relative overflow-hidden shadow-inner">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc700_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#ffc700] text-slate-200 hover:text-[#071c3d] font-bold transition backdrop-blur-sm"
              id="banner-back-home-btn"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <span className="text-slate-400">/</span>
            
            <button
              onClick={onBackToHome}
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-[#ffc700] truncate max-w-xs">{breadcrumbCurrent}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">Helpline:</span> {settings.primaryPhone1}
            </a>

            <a
              href={`https://wa.me/${settings.whatsappNumber}?text=Hello%20Balram%20Sir%2C%20I%20have%20an%20enquiry%20regarding%20Global%20Coaching%20Classes%20Anupgarh.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 px-3 py-1.5 rounded-xl transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Banner Content */}
        <div className="max-w-3xl space-y-3">
          {badge && (
            <div className="inline-flex items-center gap-1.5 bg-[#ffc700] text-[#071c3d] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          {titleHindi && (
            <div className="text-base sm:text-xl font-bold text-amber-300">
              {titleHindi}
            </div>
          )}

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-1">
            {subtitle}
          </p>

          {onOpenAdmission && (
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAdmission}
                className="px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2 border border-red-400/40"
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
