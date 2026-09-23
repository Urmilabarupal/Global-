import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ReviewsSection } from '../components/ReviewsSection';
import { InstituteSettings } from '../types';

interface ReviewsPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Student Reviews & Honest Experiences"
          subtitle="Read real stories and ratings from students across Anupgarh and surrounding tehsils who transformed their preparation here."
        breadcrumbCurrent="Student Reviews"
        badge="4.9 / 5 Average Rating"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={onOpenAdmission}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
          <ReviewsSection hideHeader={true} />
        </div>
      </div>
    </div>
  );
};
