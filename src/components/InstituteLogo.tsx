import React from 'react';

interface InstituteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export const InstituteLogo: React.FC<InstituteLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  variant = 'color'
}) => {
  // Sized prominently so the entire crest and text (GLOBAL COACHING CLASSES ANUPGARH) are clearly readable
  const sizeMap = {
    sm: {
      imgClass: 'h-12 sm:h-14',
      badgeClass: 'text-[9.5px] sm:text-[10.5px]',
      subClass: 'text-[8.5px] sm:text-[9.5px]'
    },
    md: {
      imgClass: 'h-14 sm:h-16 md:h-20',
      badgeClass: 'text-[11px] sm:text-xs',
      subClass: 'text-[9.5px] sm:text-[10.5px]'
    },
    lg: {
      imgClass: 'h-24 sm:h-28 md:h-32',
      badgeClass: 'text-xs sm:text-sm',
      subClass: 'text-[10px] sm:text-xs'
    },
    xl: {
      imgClass: 'h-32 sm:h-36 md:h-44',
      badgeClass: 'text-sm sm:text-base',
      subClass: 'text-xs sm:text-sm'
    }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`} id="institute-branding-logo">
      {/* Official Authentic Global Coaching Classes Anupgarh Logo */}
      <img
        src="/images/global-coaching-logo.svg"
        alt="Global Coaching Classes Anupgarh"
        className={`${currentSize.imgClass} w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 drop-shadow-sm`}
        loading="eager"
      />
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span className={`font-black uppercase tracking-wider ${currentSize.badgeClass} ${
            variant === 'light' ? 'text-amber-300' : 'text-[#0c2b5e]'
          }`}>
            & Computer Education
          </span>
          <span className={`font-bold tracking-tight ${currentSize.subClass} ${
            variant === 'light' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Anupgarh (Rajasthan)
          </span>
        </div>
      )}
    </div>
  );
};
