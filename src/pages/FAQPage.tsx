import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FAQSection } from '../components/FAQSection';
import { InstituteSettings } from '../types';

interface FAQPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Frequently Asked Questions & Aspirant Helpdesk"
        titleHindi="अक्सर पूछे जाने वाले प्रश्न एवं सहायता"
        subtitle="Clear your doubts about admission steps, fee concessions, 3-day demo pass, hostel facilities, RS-CIT diploma, and test series schedules."
        breadcrumbCurrent="Frequently Asked Questions"
        badge="Instant Guidance"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission('FAQ Page Enquiry')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <FAQSection
            settings={settings}
            onEnquireClick={() => onOpenAdmission()}
          />
        </div>
      </div>
    </div>
  );
};
