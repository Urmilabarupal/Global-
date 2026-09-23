import React from 'react';
import { Instagram, Phone, Youtube } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { ContactSection } from '../components/ContactSection';
import { InstituteSettings } from '../types';

interface ContactPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Contact Us & Campus Location Map"
          subtitle="Visit our campus in Anupgarh or get in touch directly via telephone, WhatsApp, or Google Maps for all course counseling and admissions."
        breadcrumbCurrent="Contact Us"
        badge="Campus Helpdesk"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={onOpenAdmission}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-10 space-y-5 sm:space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <a href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`} className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-[#0c2b5e] px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-[#164282]">
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300 shrink-0" />
            <span>Call</span>
          </a>
          <a href={`https://wa.me/91${settings.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-xs transition">
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white shrink-0" />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.youtube.com/@GlobalCoachingClassesAnupgarh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-[#dc2626] hover:bg-[#b91c1c] px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-xs transition">
            <Youtube className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>YouTube</span>
          </a>
          <a href="https://www.instagram.com/balramnokhwal/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-xs transition">
            <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>Instagram</span>
          </a>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
          <ContactSection settings={settings} hideHeader={true} />
        </div>
      </div>
    </div>
  );
};
