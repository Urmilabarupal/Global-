import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ExamPreparation } from '../components/ExamPreparation';
import { InstituteSettings, Course } from '../types';
import { Shield, Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

interface ExamsPageProps {
  settings: InstituteSettings;
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onOpenAdmission: (courseName?: string) => void;
  onBackToHome: () => void;
}

export const ExamsPage: React.FC<ExamsPageProps> = ({
  settings,
  courses,
  onSelectCourse,
  onOpenAdmission,
  onBackToHome
}) => {
  return (
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="Competitive Examination Streams & Syllabus"
        subtitle="Complete subject breakdowns, official syllabus coverage, and dedicated classroom batches for Rajasthan State and Central Government exams."
        breadcrumbCurrent="Competitive Exams"
        badge="State & Central Government Prep"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onOpenAdmission()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Exam Strategy Alert */}
        <div className="bg-gradient-to-r from-[#0c2b5e] to-[#071c3d] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffc700] text-[#071c3d] rounded-full text-xs font-black uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RSSB & RPSC Master Strategy</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                How We Train Aspirants to Beat 1/3 Negative Marking
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Objective competitive examinations demand precision over blind guesswork. Our Monday and Wednesday test series train candidates to accurately filter options, eliminate risk traps, and master Rajasthan GK and Quantitative Maths under exam pressure.
              </p>
            </div>

            <button
              onClick={() => onOpenAdmission('Exam Demo Batch')}
              className="px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md whitespace-nowrap"
            >
              Enroll in Exam Batch
            </button>
          </div>
        </div>

        {/* The Full Interactive ExamPreparation Component */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <ExamPreparation
            onExamClick={(examName) => onOpenAdmission(examName)}
            onViewCourseDetail={(courseId) => {
              const found = courses.find(c => c.id === courseId || c.id.includes(courseId) || c.name.toLowerCase().includes(courseId.toLowerCase()));
              if (found) {
                onSelectCourse(found);
              } else {
                onOpenAdmission(courseId);
              }
            }}
          />
        </div>

      </div>
    </div>
  );
};
