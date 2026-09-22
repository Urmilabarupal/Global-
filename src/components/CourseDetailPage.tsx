import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  Share2, 
  Send, 
  Sparkles, 
  Shield, 
  Award, 
  Users, 
  Check, 
  FileText, 
  HelpCircle, 
  MapPin, 
  ChevronRight,
  Monitor,
  Printer,
  Compass,
  AlertCircle
} from 'lucide-react';
import { Course, InstituteSettings, AdmissionEnquiry } from '../types';

interface CourseDetailPageProps {
  course: Course;
  allCourses: Course[];
  settings: InstituteSettings;
  onBack: () => void;
  onSelectOtherCourse: (course: Course) => void;
  onEnquirySubmitted: (enquiry: AdmissionEnquiry) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  allCourses,
  settings,
  onBack,
  onSelectOtherCourse,
  onEnquirySubmitted
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'methodology' | 'pattern' | 'facilities' | 'admission'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  // Instant On-page Admission / Demo Booking Form State
  const [formData, setFormData] = useState({
    studentName: '',
    mobile: '',
    fatherName: '',
    preferredBatch: 'Morning 9:00 AM',
    qualification: course.eligibility || '12th Pass',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top when course changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab('overview');
    setIsSubmitted(false);
  }, [course.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.mobile.trim()) return;

    const newEnquiry: AdmissionEnquiry = {
      id: `enq-${Date.now()}`,
      studentName: formData.studentName.trim(),
      fatherName: formData.fatherName.trim() || undefined,
      mobile: formData.mobile.trim(),
      mobileNumber: formData.mobile.trim(),
      courseInterested: course.name,
      course: course.name,
      qualification: formData.qualification,
      message: `Preferred Batch: ${formData.preferredBatch}. Note: ${formData.message || 'No additional note'}`,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    onEnquirySubmitted(newEnquiry);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Director Balram Sir, I want complete admission and demo class details for "${course.name}" at Global Coaching Classes, Anupgarh. Please share batch schedule and fee structure.`
  );

  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  // Related courses (excluding current course)
  const relatedCourses = allCourses
    .filter(c => c.id !== course.id)
    .slice(0, 3);

  // Target career posts mapping based on course id / category
  const targetCareerPosts = (() => {
    const cid = course.id.toLowerCase();
    if (cid.includes('cet')) {
      return [
        'Junior Assistant (LDC)',
        'Rajasthan Police Constable',
        'Revenue Patwari',
        'Gram Vikas Adhikari (VDO)',
        'Hostel Superintendent',
        'Forester & Forest Guard',
        'Tax Assistant',
        'Platoon Commander'
      ];
    }
    if (cid.includes('reet') || cid.includes('teacher') || cid.includes('lecturer')) {
      return [
        '3rd Grade Primary Teacher (Level-1)',
        '3rd Grade Upper Primary Teacher (Level-2 SST/Science-Maths)',
        'Senior Teacher Grade-II (RPSC)',
        'School Lecturer Grade-I (PGT)',
        'Navodaya / Kendriya Vidyalaya (KVS) Teacher',
        'Sanskrit Department Teacher'
      ];
    }
    if (cid.includes('police')) {
      return [
        'Rajasthan Police Constable (General Duty)',
        'Police Constable Driver & Band',
        'RAC Battalions (Armed Constabulary)',
        'Police Telecommunications Constable',
        'Rajasthan Sub-Inspector (SI)',
        'Delhi Police Executive Constable'
      ];
    }
    if (cid.includes('ssc')) {
      return [
        'SSC GD Constable (BSF, CISF, CRPF, SSB, ITBP, Assam Rifles)',
        'SSC CGL Inspector & Assistant Section Officer',
        'SSC CHSL Data Entry Operator & LDC',
        'SSC Multi-Tasking Staff (MTS)',
        'Delhi Police SI (CPO)'
      ];
    }
    if (cid.includes('rscit') || cid.includes('computer') || cid.includes('typing')) {
      return [
        'Rajasthan Government Job Mandatory IT Certification',
        'Rajasthan High Court Junior Judicial Assistant & LDC',
        'District Court Steno & Typist',
        'Secretariat & RSSB Junior Assistant Typist',
        'Computer Operator & Data Entry Professional'
      ];
    }
    if (cid.includes('patwari') || cid.includes('vdo')) {
      return [
        'Revenue Department Patwari',
        'Panchayati Raj Gram Vikas Adhikari (VDO)',
        'Tehsil Revenue Accountant',
        'Land Records Inspector'
      ];
    }
    if (cid.includes('railway')) {
      return [
        'RRB NTPC (Station Master, Goods Guard, Commercial Apprentice)',
        'Railway Group-D (Track Maintainer, Pointsman)',
        'Assistant Loco Pilot (ALP)',
        'Railway Protection Force (RPF Constable & SI)'
      ];
    }
    return [
      'Rajasthan State Government Vacancies',
      'Central Government Competitive Positions',
      'Clerical & Departmental Examinations',
      'Public Sector Undertakings (PSU) Recruitments'
    ];
  })();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Top Breadcrumbs & Back Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#0c2b5e] text-slate-700 hover:text-white font-bold transition"
              id="course-detail-back-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </button>

            <span className="text-slate-300">/</span>
            <span className="text-slate-500 hidden sm:inline">{course.category}</span>
            <span className="text-slate-300 hidden sm:inline">/</span>
            <span className="font-bold text-[#0c2b5e] truncate max-w-[200px] sm:max-w-xs">{course.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0c2b5e] bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition"
              id="course-share-btn"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <a
              href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Help</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background Subtle Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffc700_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Course Main Details */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#ffc700] text-[#071c3d] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {course.category}
                </span>

                {course.badge && (
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {course.badge}
                  </span>
                )}

                <span className="bg-white/10 text-amber-200 text-xs font-medium px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Monday & Wednesday Test Series Included</span>
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {course.name}
              </h1>

              <div className="text-base sm:text-xl font-bold text-amber-300">
                {course.nameHindi}
              </div>

              {/* Short Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
                {course.shortDesc}
              </p>

              {/* Institute Authority Line */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Award className="w-4 h-4" />
                  Under Direct Mentorship of Director Balram Nokhwal
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Opposite Govt. Hospital, Anupgarh (Raj.)
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  3 Days Free Trial Demo Available
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setActiveTab('admission');
                    const formEl = document.getElementById('course-admission-form-anchor');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-sm rounded-xl shadow-lg transition flex items-center gap-2 border border-red-400/40 transform hover:-translate-y-0.5"
                  id="enroll-course-page-btn"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Enroll in this Course / Reserve Seat</span>
                </button>

                <a
                  href={`tel:${cleanPhone}`}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition flex items-center gap-2 backdrop-blur-sm"
                  id="call-counselor-page-btn"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Direct Call: {settings.primaryPhone1}</span>
                </a>
              </div>

            </div>

            {/* Right Col: Key Course Specifications Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white shadow-2xl space-y-4">
                <h3 className="text-lg font-black text-white pb-3 border-b border-white/15 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#ffc700]" />
                  <span>Batch Quick Facts</span>
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-amber-300" />
                      <span>Eligibility:</span>
                    </span>
                    <span className="font-bold text-white text-right">{course.eligibility}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-300" />
                      <span>Duration:</span>
                    </span>
                    <span className="font-bold text-white text-right">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-300" />
                      <span>Daily Schedule:</span>
                    </span>
                    <span className="font-bold text-amber-300 text-right">{course.batchTime}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-300" />
                      <span>Class Duration:</span>
                    </span>
                    <span className="font-bold text-white text-right">4 to 5 Hours Daily</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Printer className="w-4 h-4 text-teal-300" />
                      <span>Study Notes:</span>
                    </span>
                    <span className="font-bold text-emerald-300 text-right">100% Free Printed</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-rose-300" />
                      <span>Next Batch:</span>
                    </span>
                    <span className="font-bold text-[#ffc700] text-right">{settings.newBatchDay} (9:00 AM)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <div className="bg-[#ffc700]/20 border border-[#ffc700]/40 p-3 rounded-2xl text-center">
                    <p className="text-xs font-bold text-amber-200">
                      ★ 3 Days Trial Free Demo Classes
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Attend first 3 days freely before paying any admission fees.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Tabs Strip */}
      <div className="bg-white border-b border-slate-200 shadow-xs sticky top-28 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Features', icon: BookOpen },
              { id: 'syllabus', label: 'Complete Syllabus', icon: FileText },
              { id: 'methodology', label: 'Teaching Methodology', icon: Award },
              { id: 'pattern', label: 'Target Posts & Exam Pattern', icon: Shield },
              { id: 'facilities', label: 'Classroom Facilities', icon: Monitor },
              { id: 'admission', label: 'Enrollment & Free Demo', icon: Send }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                    isActive
                      ? 'bg-[#0c2b5e] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  id={`course-tab-${tab.id}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* TAB 1: OVERVIEW & FEATURES */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Detailed Narrative Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                    <Sparkles className="w-4 h-4" />
                    <span>Complete Course Blueprint</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
                    About {course.name} at Global Coaching Classes
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    The {course.name} program at Global Coaching Classes & Computer Education, Anupgarh is crafted specifically for competitive aspirants aiming for definitive selection in state and central government services. Guided directly by veteran educator <strong>Balram Nokhwal</strong>, the curriculum balances core theoretical clarity with rigorous objective question-solving speed.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Classes run daily for 4 to 5 hours with dedicated focus on foundational concepts, shortcut mathematical techniques, comprehensive Rajasthan General Knowledge, and mental ability reasoning. Every student receives printed chapter booklets and handwritten classroom lecture notes.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-black text-[#0c2b5e] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Key Features Included with this Course:</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {course.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5 Core Highlights of the Institute */}
                <div className="bg-gradient-to-br from-[#0c2b5e] to-[#071c3d] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
                    Institute Academic Pillars
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6">
                    Why Aspirants in Anupgarh Choose Global Coaching:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm">
                      <div className="text-[#ffc700] font-black text-sm mb-1">1. Monday & Wednesday Test Series</div>
                      <p className="text-xs text-slate-200">
                        Regular OMR sheet-based evaluation exactly adhering to the latest negative marking criteria of RSSB & RPSC.
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm">
                      <div className="text-[#ffc700] font-black text-sm mb-1">2. 100% Printed & Handwritten Notes</div>
                      <p className="text-xs text-slate-200">
                        Comprehensive study booklets prepared by subject specialists covering the full syllabus without needing outside guides.
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm">
                      <div className="text-[#ffc700] font-black text-sm mb-1">3. Daily Dedicated Doubt Counter</div>
                      <p className="text-xs text-slate-200">
                        Special one-on-one doubt clearing sessions daily from 2:00 PM to 4:00 PM for Mathematics, Science, and Reasoning.
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm">
                      <div className="text-[#ffc700] font-black text-sm mb-1">4. AC Classrooms & Computer Lab</div>
                      <p className="text-xs text-slate-200">
                        Comfortable air-conditioned lecture halls and high-speed typing lab equipped with Kruti Dev and Mangal Inscript typing fonts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: COMPLETE SYLLABUS */}
            {activeTab === 'syllabus' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                        Full Course Curriculum
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0c2b5e] leading-snug break-words">
                        Subject-Wise Syllabus & Topic Breakdown
                      </h2>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl whitespace-nowrap">
                      {course.subjects?.length || 0} Core Academic Modules
                    </span>
                  </div>

                  {/* Subjects Badges */}
                  <div className="mb-6">
                    <h4 className="text-xs font-black uppercase text-slate-400 mb-2">
                      All Subjects Covered in this Program:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects?.map((sub, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-[#0c2b5e] border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>{sub}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Syllabus Highlights */}
                  {course.syllabusHighlights && course.syllabusHighlights.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-700" />
                        <span>Key Chapter Highlights & Classroom Teaching Modules:</span>
                      </h4>

                      <div className="space-y-3">
                        {course.syllabusHighlights.map((item, idx) => {
                          if (typeof item === 'string') {
                            return (
                              <div
                                key={idx}
                                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3"
                              >
                                <div className="w-6 h-6 rounded-lg bg-[#0c2b5e] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                  {idx + 1}
                                </div>
                                <div className="pt-0.5">
                                  <p className="font-semibold text-slate-900">{item}</p>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                            >
                              <div className="flex items-center gap-2 font-bold text-sm text-[#0c2b5e]">
                                <div className="w-6 h-6 rounded-lg bg-[#0c2b5e] text-white flex items-center justify-center text-xs">
                                  {idx + 1}
                                </div>
                                <span>{item.subject}</span>
                              </div>
                              <ul className="pl-8 space-y-1 text-xs text-slate-600 list-disc">
                                {item.topics.map((t, tidx) => (
                                  <li key={tidx}>{t}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Study Material Assurance */}
                  <div className="mt-8 p-5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Complete Study Material Included:</strong>
                      Students enrolled in {course.name} receive free printed study booklets, chapter question banks, and last 10 years solved papers (PYQs). No external market books need to be purchased.
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: TEACHING METHODOLOGY */}
            {activeTab === 'methodology' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      Pedagogical Framework
                    </span>
                    <h2 className="text-2xl font-black text-[#0c2b5e] mt-1">
                      Our 6-Step Examination Victory Blueprint
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      How Global Coaching Classes guides students from foundational concepts to final selection rank.
                    </p>
                  </div>

                  {/* Preparation Modes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.preparationModes && course.preparationModes.length > 0 ? (
                      course.preparationModes.map((mode, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs sm:text-sm space-y-2"
                        >
                          <div className="w-7 h-7 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-black text-xs">
                            0{idx + 1}
                          </div>
                          <p className="font-bold text-slate-900">{mode}</p>
                        </div>
                      ))
                    ) : (
                      [
                        'Daily 4-5 hours structured classes by expert subject teachers',
                        'Every Monday & Wednesday OMR sheet-based test series',
                        '100% syllabus-aligned printed and handwritten study material',
                        'Detailed analysis and solutions of previous years question papers (PYQs)',
                        'Dedicated doubt counter and personalized mentorship for students',
                        '3-day completely free demo classes for newly enrolled students'
                      ].map((mode, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs sm:text-sm space-y-2"
                        >
                          <div className="w-7 h-7 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-black text-xs">
                            0{idx + 1}
                          </div>
                          <p className="font-bold text-slate-900">{mode}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Daily Classroom Schedule */}
                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <h4 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-700" />
                      <span>Daily Classroom Schedule at Anupgarh:</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold uppercase text-slate-400">09:00 AM - 11:00 AM</span>
                        <div className="font-black text-slate-900 text-xs mt-1">Core Theory & GK Concepts</div>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold uppercase text-slate-400">11:00 AM - 01:00 PM</span>
                        <div className="font-black text-slate-900 text-xs mt-1">Maths & Reasoning Tricks</div>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold uppercase text-slate-400">01:00 PM - 02:00 PM</span>
                        <div className="font-black text-slate-900 text-xs mt-1">Language & Current Affairs</div>
                      </div>

                      <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200">
                        <span className="text-[10px] font-bold uppercase text-amber-700">02:00 PM - 04:00 PM</span>
                        <div className="font-black text-amber-950 text-xs mt-1">Special Doubt Counter</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 4: TARGET POSTS & EXAM PATTERN */}
            {activeTab === 'pattern' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      Career Scope & Opportunities
                    </span>
                    <h2 className="text-2xl font-black text-[#0c2b5e] mt-1">
                      Target Posts & Examinations Covered
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      By preparing for {course.name}, students become thoroughly qualified for the following major government positions:
                    </p>
                  </div>

                  {/* Target Posts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {targetCareerPosts.map((post, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm font-bold text-[#0c2b5e]"
                      >
                        <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{post}</span>
                      </div>
                    ))}
                  </div>

                  {/* Exam Pattern & Negative Marking Card */}
                  <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
                    <h4 className="text-base font-black text-[#ffc700] flex items-center gap-2">
                      <Compass className="w-5 h-5" />
                      <span>Exam Pattern & Selection Stages:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Most examinations following this syllabus consist of an objective OMR / CBT examination with 150 questions (total 300 marks) across a 3-hour window. Standard negative marking applies (1/3rd deduction for each incorrect answer).
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                        <div className="text-amber-300 font-bold">150 Questions</div>
                        <div className="text-[10px] text-slate-400">Standard Paper</div>
                      </div>
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                        <div className="text-amber-300 font-bold">300 Marks</div>
                        <div className="text-[10px] text-slate-400">Total Score</div>
                      </div>
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                        <div className="text-amber-300 font-bold">1/3 Penalty</div>
                        <div className="text-[10px] text-slate-400">Negative Marking</div>
                      </div>
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                        <div className="text-amber-300 font-bold">OMR & CBT</div>
                        <div className="text-[10px] text-slate-400">Exam Mode</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 5: CLASSROOM FACILITIES */}
            {activeTab === 'facilities' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      Infrastructure & Amenities
                    </span>
                    <h2 className="text-2xl font-black text-[#0c2b5e] mt-1">
                      Campus Facilities in Anupgarh
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      A disciplined, serene, and modern academic environment designed for long, focused study sessions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0c2b5e] flex items-center justify-center">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">30+ Desktop Computer Lab</h4>
                      <p className="text-xs text-slate-600">
                        Fully authorized RKCL exam lab with high-speed internet and professional Kruti Dev / Mangal typing software for High Court LDC and SSC preparation.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Air-Conditioned Classrooms</h4>
                      <p className="text-xs text-slate-600">
                        Spacious, well-ventilated lecture rooms with ergonomic benches and clear acoustic sound systems for long hours of comfortable learning.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                        <Printer className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">In-House Printing & Booklets</h4>
                      <p className="text-xs text-slate-600">
                        Students receive fast in-house printed study material, test question sheets, and OMR response sheets without delay.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Hostel & PG Assistance</h4>
                      <p className="text-xs text-slate-600">
                        Verified safe hostel and PG accommodations for boys and girls from nearby villages (Gharsana, Suratgarh, Raisinghnagar) within walking distance.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 6: ON-PAGE ADMISSION & FREE DEMO BOOKING FORM */}
            <div id="course-admission-form-anchor" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>3 Days Free Trial Demo</span>
                </div>
                <h3 className="text-2xl font-black text-[#0c2b5e]">
                  Register for Free Demo in {course.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below to confirm your seat in the upcoming Monday batch. No upfront fee required.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-emerald-950">
                    Admission Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Director Balram Nokhwal and our counseling team will call you within 2 hours with batch timings and demo pass.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 bg-white text-slate-700 border border-slate-300 text-xs font-bold rounded-xl hover:bg-slate-50 transition"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                        id="course-page-student-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. 94130XXXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                        id="course-page-mobile"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                        placeholder="Father's name"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Batch Time
                      </label>
                      <select
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                      >
                        <option value="Morning 9:00 AM">Morning Batch (9:00 AM)</option>
                        <option value="Afternoon 1:00 PM">Afternoon Batch (1:00 PM)</option>
                        <option value="Evening 4:00 PM">Evening Batch (4:00 PM)</option>
                        <option value="Flexible / Doubt Only">Flexible Timing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Highest Qualification
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                      >
                        <option value="10th Pass">10th Pass</option>
                        <option value="12th Pass">12th Pass (Senior Secondary)</option>
                        <option value="Undergraduate">Undergraduate (College Pursuing)</option>
                        <option value="Graduate">Graduate (BA, BSc, BCom)</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="BSTC / B.Ed">BSTC / D.El.Ed / B.Ed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Any Questions or Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about fees, hostel facility, syllabus books, or timings..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 border border-red-400/40"
                      id="course-page-submit-btn"
                    >
                      <Send className="w-4 h-4 text-[#ffc700]" />
                      <span>Submit Free Demo Registration</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      🔒 Your phone number is strictly private and used only for academic admission updates.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Director Contact & Mentorship Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <img
                  src="/balram-nokhwal.jpg"
                  alt="Balram Nokhwal"
                  className="w-12 h-12 rounded-2xl object-cover object-top flex-shrink-0 shadow-md border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Balram Nokhwal</h4>
                  <p className="text-xs text-amber-700 font-semibold">Founder & Director</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Our single objective is to see every dedicated student from Anupgarh and border tehsils earn their government appointment letter. Visit our institute freely for counseling."
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#0c2b5e] text-slate-700 hover:text-white font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Call: {settings.primaryPhone1}</span>
                </a>

                <a
                  href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {settings.whatsappNumber}</span>
                </a>
              </div>
            </div>

            {/* Institute Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Institute Address:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {settings.addressEnglish}
              </p>
              <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                Landmark: Opposite Government Hospital, Behind Medical Store, Near Ganesh Mandir.
              </div>
            </div>

            {/* Explore Other Popular Courses */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-black text-[#0c2b5e] text-sm flex items-center justify-between">
                <span>Other Popular Courses</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Recommendations</span>
              </h4>

              <div className="space-y-3">
                {relatedCourses.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectOtherCourse(rel)}
                    className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition group flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#0c2b5e] transition">
                        {rel.name}
                      </div>
                      <div className="text-[10px] text-amber-600 font-medium">
                        {rel.duration} • {rel.batchTime}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0c2b5e] group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>

              <button
                onClick={onBack}
                className="w-full py-2.5 text-center text-xs font-bold text-[#0c2b5e] hover:underline"
              >
                View All Courses List →
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
