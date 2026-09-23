import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { GallerySection } from '../components/GallerySection';
import { GalleryItem, InstituteSettings } from '../types';

interface GalleryPageProps {
  gallery: GalleryItem[];
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: () => void;
  onOpenAdmin: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  gallery,
  settings,
  onBackToHome,
  onOpenAdmission,
  onOpenAdmin
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Campus Infrastructure & Life Gallery"
        titleHindi="ग्लोबल कोचिंग क्लासेज एवं कंप्यूटर लैब की झलकियां"
        subtitle="Take a visual tour of our spacious air-conditioned classrooms, 30+ PC RKCL computer laboratory, student celebrations, and award ceremonies in Anupgarh."
        breadcrumbCurrent="Photo Gallery"
        badge="Campus & Academic Moments"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={onOpenAdmission}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <GallerySection
            gallery={gallery}
            onOpenAdmin={onOpenAdmin}
          />
        </div>
      </div>
    </div>
  );
};
