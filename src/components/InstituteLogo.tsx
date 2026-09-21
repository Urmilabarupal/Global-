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
  showText = true,
  variant = 'color'
}) => {
  const sizeMap = {
    sm: { iconMobile: 24, iconDesktop: 36, textSize: 'text-xs sm:text-sm' },
    md: { iconMobile: 28, iconDesktop: 44, textSize: 'text-xs sm:text-base' },
    lg: { iconMobile: 42, iconDesktop: 64, textSize: 'text-base sm:text-lg' },
    xl: { iconMobile: 56, iconDesktop: 84, textSize: 'text-lg sm:text-xl' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`} id="institute-branding-logo">
      {/* Authentic Vector Logo matching reference image */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center transition-all duration-200"
        style={{ width: `clamp(${currentSize.iconMobile}px, 6vw, ${currentSize.iconDesktop}px)`, height: `clamp(${currentSize.iconMobile}px, 6vw, ${currentSize.iconDesktop}px)` }}
      >
        <svg 
          viewBox="0 0 160 160" 
          className="w-full h-full drop-shadow-sm transition-transform hover:scale-105 duration-200"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sunRays" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ffc700" />
            </linearGradient>
            <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0c2b5e" />
            </linearGradient>
            <linearGradient id="bookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c2b5e" />
              <stop offset="100%" stopColor="#071c3d" />
            </linearGradient>
          </defs>

          {/* Golden Sunburst Rays on top */}
          <g opacity="0.95">
            {/* Array of sun rays */}
            <polygon points="80,18 76,46 84,46" fill="url(#sunRays)" />
            <polygon points="98,22 88,48 94,52" fill="url(#sunRays)" />
            <polygon points="114,32 98,53 103,58" fill="url(#sunRays)" />
            <polygon points="127,47 106,61 109,67" fill="url(#sunRays)" />
            <polygon points="135,66 111,73 113,80" fill="url(#sunRays)" />
            
            <polygon points="62,22 72,48 66,52" fill="url(#sunRays)" />
            <polygon points="46,32 62,53 57,58" fill="url(#sunRays)" />
            <polygon points="33,47 54,61 51,67" fill="url(#sunRays)" />
            <polygon points="25,66 49,73 47,80" fill="url(#sunRays)" />
          </g>

          {/* Outer Crest Ring Arch */}
          <path 
            d="M 28 85 A 56 56 0 1 1 132 85" 
            stroke="#0c2b5e" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 33 85 A 50 50 0 1 1 127 85" 
            stroke="#ffc700" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            fill="none" 
          />

          {/* World Globe Circle */}
          <circle cx="80" cy="74" r="30" fill="url(#globeGrad)" stroke="#ffc700" strokeWidth="2" />
          
          {/* Globe Latitude Lines */}
          <ellipse cx="80" cy="74" rx="29" ry="11" stroke="#ffffff" strokeWidth="1.2" opacity="0.6" fill="none" />
          <line x1="51" y1="74" x2="109" y2="74" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
          
          {/* Globe Longitude Lines */}
          <ellipse cx="80" cy="74" rx="14" ry="29" stroke="#ffffff" strokeWidth="1.2" opacity="0.6" fill="none" />
          <line x1="80" y1="45" x2="80" y2="103" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />

          {/* Soaring Bird / Eagle Emerging from Book */}
          <path 
            d="M 68 82 C 72 75, 78 68, 86 64 C 95 60, 108 58, 118 56 C 114 62, 108 67, 102 70 C 108 72, 114 74, 116 77 C 109 78, 102 78, 97 78 C 93 82, 88 85, 83 87 C 80 87, 74 85, 68 82 Z" 
            fill="#0c2b5e" 
            stroke="#ffffff" 
            strokeWidth="1.2" 
          />
          <path 
            d="M 86 64 C 91 56, 100 50, 110 46 C 106 52, 102 56, 96 61 Z" 
            fill="#071c3d" 
          />

          {/* Open Book Foundation */}
          <g>
            {/* Left Page */}
            <path 
              d="M 40 102 C 54 99, 70 101, 79 107 L 79 123 C 70 117, 54 115, 40 118 Z" 
              fill="url(#bookGrad)" 
              stroke="#ffc700" 
              strokeWidth="1.5" 
            />
            {/* Right Page */}
            <path 
              d="M 120 102 C 106 99, 90 101, 81 107 L 81 123 C 90 117, 106 115, 120 118 Z" 
              fill="url(#bookGrad)" 
              stroke="#ffc700" 
              strokeWidth="1.5" 
            />
            {/* Book Spine Center */}
            <line x1="80" y1="106" x2="80" y2="124" stroke="#ffc700" strokeWidth="2.5" />
            {/* Pages White accent lines */}
            <path d="M 45 107 C 56 104, 68 106, 75 110" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
            <path d="M 115 107 C 104 104, 92 106, 85 110" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
          </g>

          {/* Bottom Accent Banner Ribbon */}
          <rect x="36" y="128" width="88" height="15" rx="3" fill="#0c2b5e" />
          <rect x="38" y="130" width="84" height="11" rx="2" fill="#ffc700" />
          <text 
            x="80" 
            y="139" 
            fontSize="8" 
            fontWeight="900" 
            fontFamily="'Poppins', sans-serif" 
            fill="#0c2b5e" 
            textAnchor="middle" 
            letterSpacing="0.8"
          >
            ANUPGARH
          </text>
        </svg>
      </div>

      {/* Institute Name & Tagline */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
            <span className={`font-black tracking-tight leading-none ${
              variant === 'light' ? 'text-white' : 'text-[#0c2b5e]'
            } ${size === 'sm' ? 'text-xs sm:text-base' : size === 'md' ? 'text-xs sm:text-lg md:text-xl' : 'text-lg sm:text-2xl'}`}>
              GLOBAL
            </span>
            <span className="bg-[#ffc700] text-[#071c3d] text-[7.5px] sm:text-[10px] md:text-xs font-black px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded tracking-wide uppercase">
              Coaching
            </span>
          </div>
          <span className={`text-[7.5px] sm:text-[10.5px] md:text-xs font-bold tracking-tight leading-none mt-0.5 whitespace-nowrap ${
            variant === 'light' ? 'text-slate-200' : 'text-slate-600'
          }`}>
            <span className="sm:hidden">& Computer Edu. • Anupgarh</span>
            <span className="hidden sm:inline">& COMPUTER EDUCATION • ANUPGARH</span>
          </span>
          <span className={`hidden md:block text-[10px] md:text-[11px] font-medium italic mt-0.5 ${
            variant === 'light' ? 'text-[#ffc700]' : 'text-[#dc2626]'
          }`}>
            "Knowledge is Supreme Ornament"
          </span>
        </div>
      )}
    </div>
  );
};
