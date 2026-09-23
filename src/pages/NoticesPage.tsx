import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { NoticesSection } from '../components/NoticesSection';
import { NoticeItem, InstituteSettings } from '../types';

interface NoticesPageProps {
  notices: NoticeItem[];
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
  onOpenAdmin: () => void;
}

export const NoticesPage: React.FC<NoticesPageProps> = ({
  notices,
  settings,
  onBackToHome,
  onOpenAdmission,
  onOpenAdmin
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Official Notices, Circulars & Batch Alerts"
          subtitle="Stay updated with new batch dates, Rajasthan government exam notifications, Monday-Wednesday test series syllabus, and campus holiday schedules."
        breadcrumbCurrent="Notices & Circulars"
        badge="Official Institute Noticeboard"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission('Notice Enquiry')}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
          <NoticesSection
            notices={notices}
            onOpenAdmin={onOpenAdmin}
            onEnquireClick={() => onOpenAdmission()}
            hideHeader={true}
            hideAdminButton={true}
          />
        </div>
      </div>
    </div>
  );
};
