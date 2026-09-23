import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { AdmissionEnquirySection } from '../components/AdmissionEnquirySection';
import { InstituteSettings, AdmissionEnquiry } from '../types';
import { Calendar, CheckCircle2, FileText, PhoneCall, Sparkles, UserCheck } from 'lucide-react';

interface AdmissionPageProps {
  settings: InstituteSettings;
  coursePrefill?: string;
  onBackToHome: () => void;
  onNewEnquirySubmitted: (enquiry: AdmissionEnquiry) => void;
}

export const AdmissionPage: React.FC<AdmissionPageProps> = ({
  settings,
  coursePrefill = '',
  onBackToHome,
  onNewEnquirySubmitted
}) => {
  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  const steps = [
    {
      num: '01',
      title: 'Online Registration or Call',
      desc: 'Submit the simple form below or call Director Balram Nokhwal directly to register your interest.'
    },
    {
      num: '02',
      title: '3-Day Free Demo Classes',
      desc: 'Attend full classroom sessions for 3 days across all subjects with zero advance payment.'
    },
    {
      num: '03',
      title: 'Collect Free Study Material',
      desc: 'Receive comprehensive printed theory booklets, formula sheets, and past question compilations.'
    },
    {
      num: '04',
      title: 'Finalize Seat & Batch Timing',
      desc: 'Confirm your regular seat with flexible fee installment options and commence regular Monday-Wednesday tests.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="Online Admission & 3-Day Free Demo Registration"
          subtitle="Register online to reserve your classroom seat, secure free printed notes, and join Anupgarh's top-rated competitive coaching batch."
        breadcrumbCurrent="Online Admission"
        badge="Direct Admission Portal"
        settings={settings}
        onBackToHome={onBackToHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* 4 Step Process Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">
              Simple & Transparent
            </span>
            <h3 className="text-2xl font-black text-[#0c2b5e]">
              4-Step Admission Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              No hidden fees, no unnecessary paperwork. Start your preparation with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, sidx) => (
              <div key={sidx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <div className="text-2xl font-black text-[#0c2b5e]/20">{st.num}</div>
                <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <AdmissionEnquirySection
            settings={settings}
            selectedCoursePrefill={coursePrefill}
            onNewEnquirySubmitted={onNewEnquirySubmitted}
          />
        </div>

      </div>
    </div>
  );
};
