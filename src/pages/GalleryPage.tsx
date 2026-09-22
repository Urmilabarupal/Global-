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
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="संस्थान वास्तविक फोटो गैलरी (Campus Life Gallery)"
        subtitle="ग्लोबल कोचिंग क्लासेज अनूपगढ़ के मेधावी छात्र सम्मान समारोह, स्थापना दिवस, सरस्वती वंदना, वातानुकूलित क्लासरूम एवं महिला जागरूकता सत्र के वास्तविक फोटोग्राफ्स।"
        breadcrumbCurrent="Photo Gallery"
        badge="100% Real Campus Moments"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={onOpenAdmission}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d7e2f0] shadow-sm">
          <GallerySection
            gallery={gallery}
            onOpenAdmin={onOpenAdmin}
          />
        </div>
      </div>
    </div>
  );
};
