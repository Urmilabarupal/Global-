import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ResultsSection } from '../components/ResultsSection';
import { ResultItem, InstituteSettings } from '../types';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

interface ResultsPageProps {
  results: ResultItem[];
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
  onOpenAdmin: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  results,
  settings,
  onBackToHome,
  onOpenAdmission,
  onOpenAdmin
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Student Results & Selection Hall of Fame"
          subtitle="100% verified selections in Rajasthan Police, REET, Patwari, CET, VDO, Railways, and SSC from Global Coaching Classes Anupgarh."
        breadcrumbCurrent="Results & Selections"
        badge="100% Verified Government Selections"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission()}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-10">
        
        {/* Verification Guarantee Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-emerald-950">
                100% Transparent & Authentic Selection Record
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-2xl">
                Unlike commercial coaching centers that buy student roll numbers, every result displayed here represents a real, verified student who attended our classrooms and test series in Anupgarh.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenAdmission('Results Page Join Batch')}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow whitespace-nowrap text-center"
          >
            Become Our Next Selection
          </button>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
          <ResultsSection
            results={results}
            onOpenAdmin={onOpenAdmin}
            onEnquireClick={() => onOpenAdmission()}
            hideHeader={true}
            hideAdminCard={true}
          />
        </div>

      </div>
    </div>
  );
};
