import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles, UserCheck, Shield, Instagram } from 'lucide-react';
import { InstituteLogo } from './InstituteLogo';

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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-0.5 sm:py-1.5' 
          : 'bg-white shadow-sm border-b border-slate-100 py-1 sm:py-2'
      }`}
      id="main-navigation-bar"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 min-h-12 flex items-center justify-between gap-5">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none transition group flex items-center"
          id="navbar-brand-button"
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

        {/* Right Action Buttons */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          {/* Instagram Reel Link */}
          <a
            href="https://www.instagram.com/balramnokhwal/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-700 bg-pink-50/70 hover:bg-pink-100/80 px-2.5 py-1.5 rounded-lg transition border border-pink-200 font-bold"
            title="Director Balram Nokhwal Instagram Reels"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span className="hidden lg:inline">Reels</span>
          </a>

          {/* Admin link button */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0c2b5e] px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition border border-slate-200"
            title="Admin Management Portal"
            id="navbar-admin-btn"
          >
            <Shield className="w-3.5 h-3.5 text-slate-500" />
            <span>Admin</span>
            {isAdminLoggedIn && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>

          {/* Admission Open Highlight CTA */}
          <button
            onClick={onOpenAdmission}
            className="relative group overflow-hidden bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition flex items-center gap-1.5"
            id="navbar-admission-open-btn"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
            </span>
            <span className="tracking-wide">Admissions Open</span>
          </button>
        </div>

        {/* Mobile Compact Controls */}
        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenAdmission}
            className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs active:scale-95 transition"
            id="navbar-mobile-admission-btn"
          >
            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
            <span>Admissions</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-slate-700 hover:text-[#0c2b5e] rounded-md hover:bg-slate-100 focus:outline-none transition active:scale-95"
            aria-label="Toggle navigation menu"
            id="navbar-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-slate-800" /> : <Menu className="w-4 h-4 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl px-3.5 pt-2.5 pb-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-[11px] text-[#0c2b5e] font-bold flex items-center gap-1 bg-blue-50 px-2 py-1 rounded border border-blue-200"
            >
              <Shield className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeSection === link.id
                    ? 'bg-[#0c2b5e] text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div>{link.label}</div>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] font-extrabold py-2 rounded-xl text-center shadow text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#071c3d]" />
              <span>Submit Admission Form Online</span>
            </button>

            <div className="grid grid-cols-2 gap-2 mt-0.5">
              <a 
                href="tel:9413094840" 
                className="flex items-center justify-center gap-1.5 bg-[#0c2b5e] text-white py-1.5 rounded-lg text-xs font-bold"
              >
                <Phone className="w-3 h-3 text-amber-300" />
                <span>Call Helpline</span>
              </a>
              <a 
                href="https://wa.me/919413094840?text=Hello,%20I%20would%20like%20information%20regarding%20courses%20at%20Global%20Coaching%20Classes%20Anupgarh." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#15803d] text-white py-1.5 rounded-lg text-xs font-bold"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
