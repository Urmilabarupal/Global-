import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FacultyMember, InstituteSettings } from '../types';
import { Clock, HelpCircle, PhoneCall, Sparkles, UserCheck } from 'lucide-react';

interface FacultyPageProps {
  faculty: FacultyMember[];
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
  onOpenAdmin: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission
}) => {
  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="Our Expert Faculty Team & Mentors"
        subtitle="Meet the seasoned educators leading competitive examination prep in Anupgarh under the direct mentorship of Director Balram Nokhwal."
        breadcrumbCurrent="Faculty Team"
        badge="10+ Years Combined Pedagogy"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Daily Doubt Counter Highlight */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d7e2f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Daily Faculty Doubt Sessions: 2:00 PM - 4:00 PM</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0c2b5e]">
              Individual Student Doubt Solving Daily
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              No question is too small. After morning lectures, faculty members remain on campus to clear tricky math steps, grammar rules, and concept hurdles one-on-one.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmission('Faculty Demo Pass')}
            className="px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold rounded-xl transition shadow whitespace-nowrap"
          >
            Attend Teacher Demo Classes
          </button>
        </div>

      </div>
    </div>
  );
};
