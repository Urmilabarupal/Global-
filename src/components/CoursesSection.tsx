import React, { useState, useMemo } from 'react';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  CheckCircle, 
  Send 
} from 'lucide-react';
import { Course, CourseCategory } from '../types';

interface CoursesSectionProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onEnquireCourse: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  courses,
  onSelectCourse,
  onEnquireCourse
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CourseCategory[] = [
    'All',
    'Competitive Exams',
    'Teaching Exams',
    'Government Jobs',
    'School Exams',
    'Computer Education'
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
      const matchesSearch = 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.nameHindi.includes(searchQuery) ||
        c.shortDesc.includes(searchQuery);
      return matchesCat && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Quality & Result-Oriented Education</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Our Featured Courses
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Anupgarh's premier preparation hub for competitive examinations and computer literacy (RS-CIT).
            Comprehensive curriculum mentored by experienced subject faculties.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0c2b5e] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Courses' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses (CET, REET, Police, RS-CIT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
            />
          </div>
        </div>

        {/* Course Count Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <span>Total Courses Available: <strong className="text-[#0c2b5e]">{filteredCourses.length}</strong></span>
          <span className="text-emerald-700 font-medium">✓ Admissions currently active for new batches</span>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No Courses Found</h3>
            <p className="text-xs text-slate-500 mt-1">Please try another search keyword or switch category filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#0c2b5e] text-white text-xs font-bold rounded-xl"
            >
              View All Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const badgeColors = {
                orange: 'bg-orange-500 text-white',
                green: 'bg-emerald-600 text-white',
                red: 'bg-red-600 text-white',
                yellow: 'bg-amber-400 text-slate-900',
                blue: 'bg-blue-600 text-white'
              };

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                  id={`course-card-${course.id}`}
                >
                  <div>
                    {/* Top Row: Category Pill & Optional Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#0c2b5e] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase tracking-wide">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          badgeColors[course.badgeColor || 'blue']
                        }`}>
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Course Title */}
                    <h3 
                      onClick={() => onSelectCourse(course)}
                      className="text-xl font-black text-slate-900 group-hover:text-[#0c2b5e] transition leading-tight cursor-pointer hover:underline"
                    >
                      {course.name}
                    </h3>
                    <div 
                      onClick={() => onSelectCourse(course)}
                      className="text-xs sm:text-sm font-semibold text-amber-600 mt-0.5 mb-3 cursor-pointer"
                    >
                      {course.nameHindi}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {course.shortDesc}
                    </p>

                    {/* Details Snippet */}
                    <div 
                      onClick={() => onSelectCourse(course)}
                      className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1.5 mb-4 text-xs text-slate-700 cursor-pointer hover:bg-slate-100/80 transition"
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
                        <span className="text-slate-400 font-medium">Batch Timing:</span>
                        <span className="font-semibold text-emerald-700">{course.batchTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0c2b5e] hover:bg-[#071c3d] text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      id={`course-view-details-${course.id}`}
                    >
                      <span>View Full Course Page</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>

                    <button
                      onClick={() => onEnquireCourse(course.name)}
                      className="py-2.5 px-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      id={`course-enquire-${course.id}`}
                    >
                      <Send className="w-3 h-3" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
