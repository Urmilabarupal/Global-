import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { Course, InstituteSettings } from '../types';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2,
  Calendar,
  Filter
} from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  settings: InstituteSettings;
  onSelectCourse: (course: Course) => void;
  onEnquireCourse: (courseName: string) => void;
  onBackToHome: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  settings,
  onSelectCourse,
  onEnquireCourse,
  onBackToHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Competitive Exams', 'Teaching', 'Police / Defence', 'Computer & Typing'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.nameHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="All Academic & Competitive Courses"
        subtitle="Explore our comprehensive examination batches with 3-day free demo classes, 100% free printed study material, and Monday-Wednesday OMR test series."
        breadcrumbCurrent="All Courses"
        badge="New Batches Every Monday"
        settings={settings}
        onBackToHome={onBackToHome}
        onOpenAdmission={() => onEnquireCourse('General Admission')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        
        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-2xl p-6 border border-[#d7e2f0] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses (e.g. CET, REET, Police, SSC, RSCIT)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                id="courses-search-input"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#0c2b5e] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3">
            <span>Showing <strong>{filteredCourses.length}</strong> available programs</span>
            <span className="text-amber-600 font-semibold">★ Click any course to view full syllabus & methodology</span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f8fbff]'} rounded-2xl border border-[#d7e2f0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#0c2b5e]/40`}
            >
              <div className="p-6">
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-blue-50 text-[#0c2b5e] text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-200">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Name */}
                <h3 
                  onClick={() => onSelectCourse(course)}
                  className="text-xl font-black text-slate-900 group-hover:text-[#0c2b5e] transition leading-tight cursor-pointer hover:underline mb-3"
                >
                  {course.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Key Specs */}
                <div 
                  onClick={() => onSelectCourse(course)}
                  className="bg-white/80 p-3 rounded-xl border border-slate-200 space-y-1.5 mb-4 text-xs text-slate-700 cursor-pointer hover:bg-white transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Eligibility:</span>
                    <span className="font-semibold text-slate-800 truncate max-w-[170px]">{course.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Duration:</span>
                    <span className="font-semibold text-slate-800">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Batch Time:</span>
                    <span className="font-bold text-[#0c2b5e]">{course.batchTime}</span>
                  </div>
                </div>

                {/* Free Demo Callout */}
                <div className="text-[11px] text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>3 Days Free Trial Demo Classes Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#0c2b5e] hover:bg-[#071c3d] text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  id={`course-page-view-${course.id}`}
                >
                  <span>View Full Course Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                <button
                  onClick={() => onEnquireCourse(course.name)}
                  className="py-2.5 px-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition shadow-xs whitespace-nowrap"
                  id={`course-page-enquire-${course.id}`}
                >
                  <span>Register</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="text-lg font-bold text-slate-800">No courses match your search criteria</h4>
            <p className="text-xs text-slate-500">
              Try searching for CET, REET, Police, SSC, or computer courses.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#0c2b5e] text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
