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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <ReviewsSection />
        </div>
      </div>
    </div>
  );
};
