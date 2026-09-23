import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { InstituteSettings } from '../types';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  PhoneCall, 
  Shield, 
  Sparkles, 
  Users, 
  Monitor, 
  Calendar, 
  FileText,
  Clock
} from 'lucide-react';
import { DirectorPortrait } from '../components/DirectorPortrait';

interface AboutPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onOpenAdmission: (courseName?: string) => void;
  onNavigatePage: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onBackToHome,
  onOpenAdmission,
  onNavigatePage
}) => {
  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageBanner
        title="About Global Coaching Classes & Computer Education"
          subtitle="The premier, trusted competitive examination academy in Anupgarh (Rajasthan), dedicated to mentoring rural and town aspirants for government job selections."
        breadcrumbCurrent="About Us"
        badge="Anupgarh's Trusted Coaching"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Section 1: Director's Profile & Institute Genesis */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-center">
              <DirectorPortrait 
                directorName={settings.directorName}
                phone1={settings.primaryPhone1}
                phone2={settings.primaryPhone2}
                onEnquireClick={() => onOpenAdmission()}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-[#0c2b5e]">{settings.directorName}</h3>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  Founder & Academic Director
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  12+ Years Experience in Competitive Exams Pedagogy
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0c2b5e] text-xs font-bold rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Director's Message to Aspirants</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
                "ज्ञानं परमं भूषणम्" — Knowledge is the Supreme Ornament
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Global Coaching Classes & Computer Education was established in Anupgarh with a firm resolve: to provide state-of-the-art competitive examination preparation right here in our border region, eliminating the need for students to relocate to expensive metropolitan cities like Jaipur or Jodhpur.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Under the direct daily mentorship of Director Balram Nokhwal, our classrooms focus on conceptual depth, shortcut mathematical tricks, exhaustive Rajasthan General Knowledge, and rigorous speed building through our bi-weekly Monday & Wednesday test series.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${cleanPhone}`}
                  className="px-5 py-2.5 bg-[#0c2b5e] hover:bg-[#071c3d] text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Talk with Balram Sir: {settings.primaryPhone1}</span>
                </a>
                <button
                  onClick={() => onOpenAdmission()}
                  className="px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold rounded-xl transition"
                >
                  Book 3-Day Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0c2b5e] flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#0c2b5e]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower every hardworking student of Anupgarh, Gharsana, Raisinghnagar, and Suratgarh with top-tier coaching, free comprehensive study notes, and regular test evaluation to secure government service appointments.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#0c2b5e]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the most trusted and high-selection rate institution in Rajasthan, blending traditional classroom discipline with digital computer literacy and modern examination strategies.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#0c2b5e]">Our Values</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transparency in fee structure, zero false marketing, 100% individual student attention, daily doubt counters, and sincere commitment to student success above commercial interests.
            </p>
          </div>
        </div>

        {/* Section 3: The 8 Verified Pillars of the Institute */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">
              Institute Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
              Why Aspirants Choose Global Coaching Classes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Eight distinct institutional features that make our classroom preparation unmatched in Anupgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: '3-Day Free Demo Classes',
                desc: 'Attend full 3 days of classes across all subjects completely free before paying any registration fees.',
                icon: Calendar,
                color: 'text-amber-600 bg-amber-50'
              },
              {
                title: 'Monday & Wednesday Test Series',
                desc: 'Strict OMR sheet-based evaluation matching RPSC & RSSB negative marking criteria with Telegram rank lists.',
                icon: FileText,
                color: 'text-blue-600 bg-blue-50'
              },
              {
                title: '100% Free Printed Notes',
                desc: 'Comprehensive chapter booklets and handwritten classroom summaries provided without extra charges.',
                icon: BookOpen,
                color: 'text-emerald-600 bg-emerald-50'
              },
              {
                title: 'Daily Dedicated Doubt Counter',
                desc: 'One-on-one doubt clarification sessions with subject teachers every day between 2:00 PM to 4:00 PM.',
                icon: Clock,
                color: 'text-purple-600 bg-purple-50'
              },
              {
                title: '30+ PC Computer Lab',
                desc: 'Authorized RKCL exam center with high-speed internet and professional Kruti Dev / Mangal typing software.',
                icon: Monitor,
                color: 'text-teal-600 bg-teal-50'
              },
              {
                title: 'Air-Conditioned Classrooms',
                desc: 'Comfortable, spacious, sound-buffered halls designed for long, disciplined 4 to 5 hour study routines.',
                icon: Sparkles,
                color: 'text-rose-600 bg-rose-50'
              },
              {
                title: 'Hostel & PG Assistance',
                desc: 'Safe, verified accommodations for boys and girls from nearby villages within 500m of the campus.',
                icon: MapPin,
                color: 'text-indigo-600 bg-indigo-50'
              },
              {
                title: 'Direct Director Mentorship',
                desc: 'Balram Sir personally monitors batch syllabus progression, test scores, and student motivation daily.',
                icon: Users,
                color: 'text-orange-600 bg-orange-50'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition space-y-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Quick Navigation to Other Pages */}
        <div className="bg-gradient-to-r from-[#0c2b5e] to-[#071c3d] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-white">Explore Courses & Batch Timings</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              New batches for CET, REET, Rajasthan Police, and SSC GD commence every Monday at 9:00 AM.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigatePage('courses')}
              className="px-5 py-3 bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] text-xs sm:text-sm font-black rounded-xl transition shadow"
            >
              Explore All Courses
            </button>
            <button
              onClick={() => onNavigatePage('faculty')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl transition border border-white/20"
            >
              Meet Faculty Team
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl transition border border-white/20"
            >
              Campus Location
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
