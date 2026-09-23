import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { InstituteLogo } from './InstituteLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmission: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdmission,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'batch', label: 'New Batches' },
    { id: 'exams', label: 'Exams & Syllabus' },
    { id: 'test-series', label: 'Test Series' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-1 sm:py-1.5' 
            : 'bg-white shadow-xs border-b border-slate-100 py-1.5 sm:py-2.5'
        }`}
        id="main-navigation-bar"
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 min-h-14 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none transition group flex items-center shrink-0 py-0.5"
            id="navbar-brand-button"
            aria-label="Global Coaching Classes Home"
          >
            <div className="sm:hidden">
              <InstituteLogo size="sm" />
            </div>
            <div className="hidden sm:block">
              <InstituteLogo size={isScrolled ? 'sm' : 'md'} />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-0.5 text-[13px] font-semibold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 py-2 rounded-lg transition-all text-[13px] font-semibold whitespace-nowrap ${
                    isActive 
                      ? 'text-[#0c2b5e] bg-blue-50 font-bold border-b-2 border-[#0c2b5e]' 
                      : 'text-slate-700 hover:text-[#0c2b5e] hover:bg-slate-50'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons on Desktop */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:9413094840"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0c2b5e] bg-slate-100 hover:bg-slate-200 rounded-xl transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>94130-94840</span>
            </a>
            <button
              onClick={onOpenAdmission}
              className="px-4 py-2 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white text-xs font-black rounded-xl shadow-xs transition transform hover:scale-105 active:scale-95"
              id="navbar-cta-admission"
            >
              Admission Open
            </button>
          </div>

          {/* Mobile / Tablet Controls (visible on screens < 1280px) */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenAdmission()}
              className="px-3 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] sm:text-xs font-bold rounded-lg shadow-xs flex items-center gap-1 active:scale-95 transition"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Admission</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0c2b5e] rounded-xl hover:bg-slate-100 focus:outline-none transition active:scale-95 min-h-[42px] min-w-[42px] flex items-center justify-center border border-slate-200"
              aria-label="Toggle navigation menu"
              id="navbar-hamburger-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer - Rendered directly to body via portal to avoid stacking context & scroll jumping */}
      {typeof document !== 'undefined' && mobileMenuOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex flex-col bg-white h-[100dvh] w-full overflow-hidden xl:hidden animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          id="mobile-navigation-drawer"
        >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shrink-0 shadow-xs">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none flex items-center"
            >
              <InstituteLogo size="sm" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-xl hover:bg-slate-100 transition active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px] border border-slate-200"
              aria-label="Close navigation menu"
              id="navbar-mobile-close-btn"
            >
              <X className="w-6 h-6 text-slate-800" />
            </button>
          </div>

          {/* Scrollable Navigation Links */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Navigation Menu
              </span>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Admissions Open 2024-25
              </span>
            </div>

            {/* Prominent Demo Class CTA in Menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white font-black text-sm rounded-xl shadow-md flex items-center justify-between transition hover:opacity-95 active:scale-98"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book 3-Day Free Demo Class</span>
              </div>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">Free</span>
            </button>

            {/* Nav Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition text-left min-h-[44px] active:scale-98 ${
                      isActive
                        ? 'bg-[#0c2b5e] text-white shadow-md'
                        : 'text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Batch Schedule Card */}
            <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-2xl">
              <div className="text-xs font-bold text-[#0c2b5e] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>New Batches Start Every Monday</span>
              </div>
              <div className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Daily 4-5 Hours Regular Classes • 100% Free Printed Notes & Formula Booklets • Regular OMR Test Series
              </div>
            </div>
          </div>

          {/* Bottom Fixed Action Helpline Buttons */}
          <div className="p-3.5 border-t border-slate-200 bg-slate-50 shrink-0 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="tel:9413094840" 
                className="flex items-center justify-center gap-2 bg-[#0c2b5e] hover:bg-[#071c3d] text-white py-3 rounded-xl text-xs font-bold shadow transition active:scale-95 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Helpline</span>
              </a>
              <a 
                href="https://wa.me/919413094840?text=Hello,%20I%20would%20like%20information%20regarding%20courses%20at%20Global%20Coaching%20Classes%20Anupgarh." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl text-xs font-bold shadow transition active:scale-95 min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="text-center text-[10px] text-slate-400 pt-0.5 font-medium">
              Opposite Govt Hospital, Behind Medical Store, Anupgarh
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
