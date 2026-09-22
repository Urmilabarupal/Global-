import React, { useState, useEffect } from 'react';
import { 
  INITIAL_SETTINGS, 
  INITIAL_COURSES, 
  INITIAL_FACULTY, 
  INITIAL_RESULTS, 
  INITIAL_GALLERY, 
  INITIAL_NOTICES, 
  INITIAL_ENQUIRIES 
} from './data/initialData';
import { 
  Course, 
  FacultyMember, 
  ResultItem, 
  GalleryItem, 
  NoticeItem, 
  AdmissionEnquiry, 
  InstituteSettings 
} from './types';

// Components
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { AdmissionPopupModal } from './components/AdmissionPopupModal';
import { CoursesSection } from './components/CoursesSection';
import { CourseDetailPage } from './components/CourseDetailPage';
import { AboutSection } from './components/AboutSection';
import { ExamPreparation } from './components/ExamPreparation';
import { TestSeriesSection } from './components/TestSeriesSection';
import { FAQSection } from './components/FAQSection';
import { AdmissionEnquirySection } from './components/AdmissionEnquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AdminPanel } from './components/admin/AdminPanel';
import { MessageCircle } from 'lucide-react';

// Dedicated Standalone Pages
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { BatchesPage } from './pages/BatchesPage';
import { ExamsPage } from './pages/ExamsPage';
import { TestSeriesPage } from './pages/TestSeriesPage';
import { FacultyPage } from './pages/FacultyPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Persistent State from LocalStorage or Defaults
  const [settings, setSettings] = useState<InstituteSettings>(() => {
    const saved = localStorage.getItem('gcc_v3_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_SETTINGS,
          ...parsed,
          directorName: "Balram Nokhwal" // Always English
        };
      } catch (e) {
        return INITIAL_SETTINGS;
      }
    }
    return INITIAL_SETTINGS;
  });

  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('gcc_v3_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [faculty, setFaculty] = useState<FacultyMember[]>(() => {
    // Hide extra placeholder teachers per user instruction, showing only Director Balram Nokhwal
    return INITIAL_FACULTY;
  });

  const [results, setResults] = useState<ResultItem[]>(() => {
    // Use updated Indian student selections
    const saved = localStorage.getItem('gcc_v3_results_v4');
    return saved ? JSON.parse(saved) : INITIAL_RESULTS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('gcc_v3_gallery_v4');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [notices, setNotices] = useState<NoticeItem[]>(() => {
    const saved = localStorage.getItem('gcc_v3_notices');
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });

  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>(() => {
    const saved = localStorage.getItem('gcc_v3_enquiries');
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('gcc_v3_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_results', JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_gallery_v4', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('gcc_v3_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  // UI Interactive States
  const [activeSection, setActiveSection] = useState('home');
  const [admissionCoursePrefill, setAdmissionCoursePrefill] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdmissionPopupOpen, setIsAdmissionPopupOpen] = useState(false);

  // Auto-show New Batch / Admission AI Popup Modal on initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const dismissedAt = Number(localStorage.getItem('gcc_admission_popup_dismissed_at') || 0);
        const dismissalWindow = 24 * 60 * 60 * 1000;
        if (!dismissedAt || Date.now() - dismissedAt >= dismissalWindow) {
          setIsAdmissionPopupOpen(true);
        }
      } catch (e) {
        setIsAdmissionPopupOpen(true);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Dedicated Page Routing State
  const parseHashRoute = (): { page: string; course: Course | null } => {
    if (typeof window === 'undefined') return { page: 'home', course: null };
    const hash = window.location.hash.replace('#', '').trim();
    if (hash.startsWith('course-')) {
      const courseId = hash.replace('course-', '');
      const found = INITIAL_COURSES.find(c => c.id === courseId);
      if (found) return { page: 'course-detail', course: found };
    }
    const validPages = [
      'home', 'about', 'courses', 'batch', 'exams', 'test-series',
      'faculty', 'gallery', 'faq',
      'admission', 'contact'
    ];
    if (validPages.includes(hash)) {
      return { page: hash, course: null };
    }
    return { page: 'home', course: null };
  };

  const [currentPage, setCurrentPage] = useState<string>(() => parseHashRoute().page);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(() => parseHashRoute().course);

  // Handle Hash Changes for Direct Links & Browser Back/Forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash.startsWith('course-')) {
        const courseId = hash.replace('course-', '');
        const found = courses.find(c => c.id === courseId);
        if (found) {
          setCurrentCourse(found);
          setCurrentPage('course-detail');
          setActiveSection('courses');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const validPages = [
        'home', 'about', 'courses', 'batch', 'exams', 'test-series',
        'faculty', 'gallery', 'faq',
        'admission', 'contact'
      ];

      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        setActiveSection(hash);
        setCurrentCourse(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === 'home') {
        setCurrentPage('home');
        setActiveSection('home');
        setCurrentCourse(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [courses]);

  // Page Navigation Handler
  const handleNavigate = (pageId: string) => {
    if (pageId.startsWith('course-')) {
      const courseId = pageId.replace('course-', '');
      const found = courses.find(c => c.id === courseId);
      if (found) {
        handleOpenCourseDetail(found);
        return;
      }
    }

    setCurrentCourse(null);
    setCurrentPage(pageId);
    setActiveSection(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCourseDetail = (course: Course) => {
    setCurrentCourse(course);
    setCurrentPage('course-detail');
    setActiveSection('courses');
    window.location.hash = `course-${course.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToAllCourses = () => {
    setCurrentCourse(null);
    setCurrentPage('courses');
    setActiveSection('courses');
    window.location.hash = 'courses';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissionWithCourse = (courseName?: string) => {
    if (courseName) {
      setAdmissionCoursePrefill(courseName);
    }
    handleNavigate('admission');
  };

  const handleCourseCardSelect = (courseId: string) => {
    const found = courses.find(c => c.id === courseId || c.name.toLowerCase().includes(courseId.toLowerCase()));
    if (found) {
      handleOpenCourseDetail(found);
    } else {
      handleNavigate('courses');
    }
  };

  const handleNewEnquirySubmitted = (newEnquiry: AdmissionEnquiry) => {
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const handleResetAllData = () => {
    if (window.confirm('Are you sure you want to reset all data to initial defaults?')) {
      setSettings(INITIAL_SETTINGS);
      setCourses(INITIAL_COURSES);
      setFaculty(INITIAL_FACULTY);
      setResults(INITIAL_RESULTS);
      setGallery(INITIAL_GALLERY);
      setNotices(INITIAL_NOTICES);
      setEnquiries(INITIAL_ENQUIRIES);
      localStorage.clear();
      alert('Data has been reset successfully to defaults.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#ffc700] selection:text-[#071c3d]">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar 
        settings={settings}
        onAdmissionClick={() => handleOpenAdmissionWithCourse()}
      />

      {/* 2. Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmission={() => handleOpenAdmissionWithCourse()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdminLoggedIn={localStorage.getItem('global_coaching_admin_auth') === 'true'}
      />

      {/* Dedicated Page Router */}
      {currentPage === 'about' && (
        <AboutPage
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={(c) => handleOpenAdmissionWithCourse(c)}
          onNavigatePage={(p) => handleNavigate(p)}
        />
      )}

      {currentPage === 'courses' && (
        <CoursesPage
          courses={courses}
          settings={settings}
          onSelectCourse={(course) => handleOpenCourseDetail(course)}
          onEnquireCourse={(courseName) => handleOpenAdmissionWithCourse(courseName)}
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {currentPage === 'course-detail' && currentCourse && (
        <CourseDetailPage
          course={currentCourse}
          allCourses={courses}
          settings={settings}
          onBack={handleBackToAllCourses}
          onSelectOtherCourse={(course) => handleOpenCourseDetail(course)}
          onEnquirySubmitted={handleNewEnquirySubmitted}
        />
      )}

      {currentPage === 'batch' && (
        <BatchesPage
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onNewEnquirySubmitted={handleNewEnquirySubmitted}
        />
      )}

      {currentPage === 'exams' && (
        <ExamsPage
          settings={settings}
          courses={courses}
          onSelectCourse={(course) => handleOpenCourseDetail(course)}
          onOpenAdmission={(courseName) => handleOpenAdmissionWithCourse(courseName)}
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {currentPage === 'test-series' && (
        <TestSeriesPage
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={(courseName) => handleOpenAdmissionWithCourse(courseName)}
        />
      )}

      {currentPage === 'faculty' && (
        <FacultyPage
          faculty={faculty}
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={(courseName) => handleOpenAdmissionWithCourse(courseName)}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      )}

      {currentPage === 'gallery' && (
        <GalleryPage
          gallery={gallery}
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={() => handleOpenAdmissionWithCourse()}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      )}

      {currentPage === 'faq' && (
        <FAQPage
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={(courseName) => handleOpenAdmissionWithCourse(courseName)}
        />
      )}

      {currentPage === 'admission' && (
        <AdmissionPage
          settings={settings}
          coursePrefill={admissionCoursePrefill}
          onBackToHome={() => handleNavigate('home')}
          onNewEnquirySubmitted={handleNewEnquirySubmitted}
        />
      )}

      {currentPage === 'contact' && (
        <ContactPage
          settings={settings}
          onBackToHome={() => handleNavigate('home')}
          onOpenAdmission={() => handleOpenAdmissionWithCourse()}
        />
      )}

      {/* Main Home Page Overview */}
      {currentPage === 'home' && (
        <main>
          {/* 3. Hero Section with Director Presentation */}
          <Hero
            settings={settings}
            onAdmissionClick={() => handleOpenAdmissionWithCourse()}
            onViewCoursesClick={() => handleNavigate('courses')}
            onCourseSelect={handleCourseCardSelect}
          />

          {/* 4. Quick 5 Features Info Bar */}
          <QuickInfoBar />

          {/* 5. Comprehensive Courses Section */}
          <CoursesSection
            courses={courses}
            onSelectCourse={(course) => handleOpenCourseDetail(course)}
            onEnquireCourse={(courseName) => handleOpenAdmissionWithCourse(courseName)}
          />

          {/* 6. About Institute Section */}
          <AboutSection
            settings={settings}
            onEnquireClick={() => handleOpenAdmissionWithCourse()}
          />

          {/* 7. Competitive Exams Preparation Section */}
          <ExamPreparation
            onExamClick={(examName) => handleOpenAdmissionWithCourse(examName)}
            onViewCourseDetail={(courseId) => {
              const found = courses.find(c => c.id === courseId || c.id.includes(courseId) || c.name.toLowerCase().includes(courseId.toLowerCase()));
              if (found) {
                handleOpenCourseDetail(found);
              } else {
                handleOpenAdmissionWithCourse(courseId);
              }
            }}
          />

          {/* 8. Regular Test Series Section (Mon & Wed schedule) */}
          <TestSeriesSection
            settings={settings}
            onEnquireClick={() => handleOpenAdmissionWithCourse('Test Series Monday-Wednesday')}
          />

          {/* 11. Frequently Asked Questions Section */}
          <FAQSection
            settings={settings}
            onEnquireClick={() => handleOpenAdmissionWithCourse()}
          />

          {/* 17. Admission Enquiry Section */}
          <AdmissionEnquirySection
            settings={settings}
            selectedCoursePrefill={admissionCoursePrefill}
            onNewEnquirySubmitted={handleNewEnquirySubmitted}
          />

          {/* 18. Contact & Google Maps Section */}
          <ContactSection settings={settings} />
        </main>
      )}

      {/* 17. Comprehensive Footer */}
      <Footer
        settings={settings}
        onNavigate={handleNavigate}
        onOpenAdmission={() => handleOpenAdmissionWithCourse()}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 18. Sticky Mobile Bottom Quick Action Bar */}
      <MobileQuickBar
        settings={settings}
        onOpenAdmission={() => handleOpenAdmissionWithCourse()}
      />

      {/* 19. Floating WhatsApp Button for Desktop */}
      <a
        href={`https://wa.me/91${settings.whatsappNumber}?text=Hello%20Global%20Coaching%20Classes%20Anupgarh,%20I%20want%20information%20regarding%20courses%20and%20admission.`}
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#15803d] hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl items-center justify-center transition-transform hover:scale-110 border-2 border-white group"
        aria-label="Chat on WhatsApp"
        id="desktop-floating-whatsapp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:pl-2 text-xs font-bold">
          Chat with us on WhatsApp
        </span>
      </a>

      {/* Admission / New Batch AI Popup Modal */}
      <AdmissionPopupModal
        settings={settings}
        isOpen={isAdmissionPopupOpen}
        onClose={() => setIsAdmissionPopupOpen(false)}
        onEnroll={(batchName) => handleOpenAdmissionWithCourse(batchName || 'New Batch 2024')}
        onLearnMore={() => handleNavigate('courses')}
      />

      {/* Admin Dashboard Modal */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        courses={courses}
        setCourses={setCourses}
        faculty={faculty}
        setFaculty={setFaculty}
        results={results}
        setResults={setResults}
        gallery={gallery}
        setGallery={setGallery}
        notices={notices}
        setNotices={setNotices}
        enquiries={enquiries}
        setEnquiries={setEnquiries}
        settings={settings}
        setSettings={setSettings}
        onResetAllData={handleResetAllData}
      />

    </div>
  );
}
