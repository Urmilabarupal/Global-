import React from 'react';
import { Instagram, MessageCircle, Phone, Youtube } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <a href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`} className="flex items-center justify-center gap-2 rounded-2xl bg-[#0c2b5e] px-4 py-4 text-sm font-bold text-white"><Phone className="h-4 w-4 text-amber-300" />Call</a>
          <a href={`https://wa.me/91${settings.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#15803d] px-4 py-4 text-sm font-bold text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          <a href="https://www.youtube.com/@GlobalCoachingClassesAnupgarh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#dc2626] px-4 py-4 text-sm font-bold text-white"><Youtube className="h-4 w-4" />YouTube</a>
          <a href="https://www.instagram.com/balramnokhwal/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-4 text-sm font-bold text-white"><Instagram className="h-4 w-4" />Instagram</a>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <ContactSection settings={settings} />
        </div>
      </div>
    </div>
  );
};
