import React from 'react';
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
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="Contact Us & Campus Location Map"
        subtitle="Visit our campus in Anupgarh or get in touch directly via telephone, WhatsApp, or Google Maps for all course counseling and admissions."
        breadcrumbCurrent="Contact Us"
        badge="Campus Helpdesk"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={onOpenAdmission}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d7e2f0] shadow-sm">
          <ContactSection settings={settings} />
        </div>
      </div>
    </div>
  );
};
