import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  LogOut, 
  BookOpen, 
  Users, 
  Award, 
  Camera, 
  Bell, 
  Settings, 
  Mail, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  Download,
  PhoneCall,
  Search,
  ExternalLink
} from 'lucide-react';
import { 
  Course, 
  FacultyMember, 
  ResultItem, 
  GalleryItem, 
  NoticeItem, 
  AdmissionEnquiry, 
  InstituteSettings 
} from '../../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  // State and updaters
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  faculty: FacultyMember[];
  setFaculty: React.Dispatch<React.SetStateAction<FacultyMember[]>>;
  results: ResultItem[];
  setResults: React.Dispatch<React.SetStateAction<ResultItem[]>>;
  gallery: GalleryItem[];
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  notices: NoticeItem[];
  setNotices: React.Dispatch<React.SetStateAction<NoticeItem[]>>;
  enquiries: AdmissionEnquiry[];
  setEnquiries: React.Dispatch<React.SetStateAction<AdmissionEnquiry[]>>;
  settings: InstituteSettings;
  setSettings: React.Dispatch<React.SetStateAction<InstituteSettings>>;
  onResetAllData: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  courses,
  setCourses,
  faculty,
  setFaculty,
  results,
  setResults,
  gallery,
  setGallery,
  notices,
  setNotices,
  enquiries,
  setEnquiries,
  settings,
  setSettings,
  onResetAllData
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('global_coaching_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'courses' | 'faculty' | 'results' | 'gallery' | 'notices' | 'settings'>('enquiries');

  // Enquiries search & filter
  const [enquirySearch, setEnquirySearch] = useState('');
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Enrolled'>('All');

  // Add item form states
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    category: 'Competitive Exams',
    batchTime: '9:00 AM onwards',
    features: ['Experienced Faculty', 'Weekly Test Series', 'Handwritten Notes']
  });

  const [showAddFaculty, setShowAddFaculty] = useState(false);
  const [newFaculty, setNewFaculty] = useState<Partial<FacultyMember>>({
    role: 'Subject Specialist',
    isDirector: false
  });

  const [showAddResult, setShowAddResult] = useState(false);
  const [newResult, setNewResult] = useState<Partial<ResultItem>>({
    year: '2024',
    result: 'Selected',
    verified: true,
    isVerified: true
  });

  const [showAddGallery, setShowAddGallery] = useState(false);
  const [newGallery, setNewGallery] = useState<Partial<GalleryItem>>({
    category: 'Classroom',
    date: '2024'
  });

  const [showAddNotice, setShowAddNotice] = useState(false);
  const [newNotice, setNewNotice] = useState<Partial<NoticeItem>>({
    category: 'New Batch',
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    isImportant: true
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'admin123' || passcode.trim() === 'global335701') {
      setIsAuthenticated(true);
      localStorage.setItem('global_coaching_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid password! (For demo, enter "admin123")');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('global_coaching_admin_auth');
    setPasscode('');
  };

  // Enquiries actions
  const handleUpdateEnquiryStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Enrolled') => {
    setEnquiries(prev => prev.map(enq => enq.id === id ? { ...enq, status: newStatus } : enq));
  };

  const handleDeleteEnquiry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this admission enquiry?')) {
      setEnquiries(prev => prev.filter(enq => enq.id !== id));
    }
  };

  const exportEnquiriesToCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiry data available to export.');
      return;
    }
    const headers = ['ID', 'Student Name', "Father's Name", 'Mobile Number', 'Alternate Mobile', 'Interested Course', 'Status', 'Date', 'Message'];
    const rows = enquiries.map(e => [
      e.id,
      `"${e.studentName}"`,
      `"${e.fatherName || ''}"`,
      `"${e.mobile}"`,
      `"${e.altMobile || ''}"`,
      `"${e.courseInterested}"`,
      e.status,
      `"${e.submittedAt}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Global_Coaching_Admission_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-6xl w-full h-[92vh] shadow-2xl border border-slate-300 flex flex-col overflow-hidden"
        role="dialog"
      >
        {/* Admin Header */}
        <div className="bg-[#071c3d] text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-900/50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffc700] text-[#071c3d] flex items-center justify-center font-bold shadow">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Institute Management Portal (Admin Dashboard)</span>
                {isAuthenticated && (
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Active Session
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-300">
                GLOBAL COACHING CLASSES & COMPUTER EDUCATION, ANUPGARH
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-xs text-rose-300 hover:text-white bg-rose-900/40 hover:bg-rose-900 px-3 py-1.5 rounded-lg transition flex items-center gap-1"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition"
              aria-label="Close Admin Panel"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="flex-1 flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0c2b5e] mx-auto flex items-center justify-center mb-4 shadow-sm">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Secure Admin Login</h4>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Enter master password to manage courses, results, notices, and student enquiries.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                {authError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                    {authError}
                  </div>
                )}
                <div className="text-left">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enter Password (Passcode)
                  </label>
                  <input
                    type="password"
                    autoFocus
                    placeholder="Enter admin password (e.g. admin123)"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
                  />
                  <div className="text-[11px] text-slate-400 mt-1.5">
                    Default master password: <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0c2b5e] font-bold">admin123</code>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0c2b5e] hover:bg-[#164282] text-white font-bold text-sm rounded-xl shadow-md transition"
                >
                  Enter Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-3 flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible flex-shrink-0">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'enquiries' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Admission Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'courses' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Course Manager ({courses.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('faculty')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'faculty' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Users className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Faculty Members ({faculty.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('results')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'results' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Results & Selections ({results.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('notices')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'notices' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Bell className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Notices & Alerts ({notices.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'gallery' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Camera className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Photo Gallery ({gallery.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-1 md:flex-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'settings' ? 'bg-[#0c2b5e] text-white shadow' : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Settings className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Institute Settings</span>
              </button>

              {/* Reset defaults button */}
              <div className="mt-auto pt-3 border-t border-slate-200 hidden md:block">
                <button
                  onClick={onResetAllData}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                  title="Reset all content to defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Default Data</span>
                </button>
              </div>
            </div>

            {/* Tab Body */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50">
              
              {/* TAB 1: ENQUIRIES */}
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Received Admission Applications & Enquiries</h4>
                      <p className="text-xs text-slate-500">Details of all forms submitted by students from the website</p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={exportEnquiriesToCSV}
                        className="flex-1 sm:flex-none inline-flex items-center gap-1.5 bg-[#15803d] hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by student name, phone number, or course..."
                        value={enquirySearch}
                        onChange={(e) => setEnquirySearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#0c2b5e]"
                      />
                    </div>

                    <div className="flex gap-1">
                      {(['All', 'New', 'Contacted', 'Enrolled'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setEnquiryStatusFilter(st)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                            enquiryStatusFilter === st ? 'bg-[#0c2b5e] text-white' : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {st === 'All' ? 'All' : st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* List of Enquiries */}
                  {enquiries.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                      <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-500">No admission enquiries received yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {enquiries
                        .filter(e => {
                          const matchStatus = enquiryStatusFilter === 'All' || e.status === enquiryStatusFilter;
                          const matchSearch = e.studentName.toLowerCase().includes(enquirySearch.toLowerCase()) ||
                            e.mobile.includes(enquirySearch) ||
                            e.courseInterested.toLowerCase().includes(enquirySearch.toLowerCase());
                          return matchStatus && matchSearch;
                        })
                        .map((enq) => (
                          <div
                            key={enq.id}
                            className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-slate-900 text-base">{enq.studentName}</h5>
                                {enq.fatherName && (
                                  <span className="text-xs text-slate-500">(Father: {enq.fatherName})</span>
                                )}
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  enq.status === 'New' ? 'bg-red-100 text-red-700' :
                                  enq.status === 'Contacted' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {enq.status}
                                </span>
                              </div>

                              <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3">
                                <span>📚 Course: <strong className="text-[#0c2b5e]">{enq.courseInterested}</strong></span>
                                <span>📱 Phone: <strong className="font-mono text-slate-800">{enq.mobile}</strong></span>
                                {enq.altMobile && <span>(Alt: {enq.altMobile})</span>}
                                <span className="text-slate-400 text-[11px]">
                                  {new Date(enq.submittedAt).toLocaleString('en-IN')}
                                </span>
                              </div>

                              {enq.message && (
                                <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1">
                                  "{enq.message}"
                                </p>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
                              <a
                                href={`tel:${enq.mobile}`}
                                className="p-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl transition"
                                title="Call Student"
                              >
                                <PhoneCall className="w-4 h-4" />
                              </a>

                              <select
                                value={enq.status}
                                onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value as any)}
                                className="text-xs py-1.5 px-2 bg-slate-100 border border-slate-200 rounded-lg"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Enrolled">Enrolled</option>
                              </select>

                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: COURSES */}
              {activeTab === 'courses' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-slate-900">Course Manager</h4>
                    <button
                      onClick={() => setShowAddCourse(!showAddCourse)}
                      className="inline-flex items-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Course</span>
                    </button>
                  </div>

                  {/* Add Course Form */}
                  {showAddCourse && (
                    <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-md space-y-3">
                      <h5 className="font-bold text-sm text-[#0c2b5e]">New Course Entry:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Course Name (e.g. CET - 2024)"
                          value={newCourse.name || ''}
                          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Full / Sub Title (e.g. Common Eligibility Test)"
                          value={newCourse.nameHindi || ''}
                          onChange={(e) => setNewCourse({ ...newCourse, nameHindi: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <select
                          value={newCourse.category}
                          onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value as any })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        >
                          <option value="Competitive Exams">Competitive Exams</option>
                          <option value="Teaching Exams">Teaching Exams</option>
                          <option value="Government Jobs">Government Jobs</option>
                          <option value="School Exams">School Exams</option>
                          <option value="Computer Education">Computer Education</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Eligibility (e.g. 12th / Graduate)"
                          value={newCourse.eligibility || ''}
                          onChange={(e) => setNewCourse({ ...newCourse, eligibility: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Duration (e.g. 4 to 6 Months)"
                          value={newCourse.duration || ''}
                          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Batch Timing (e.g. 9:00 AM onwards)"
                          value={newCourse.batchTime || ''}
                          onChange={(e) => setNewCourse({ ...newCourse, batchTime: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>

                      <textarea
                        rows={2}
                        placeholder="Short description..."
                        value={newCourse.shortDesc || ''}
                        onChange={(e) => setNewCourse({ ...newCourse, shortDesc: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                      />

                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowAddCourse(false)}
                          className="px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-100 rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            if (!newCourse.name) return;
                            const created: Course = {
                              id: 'course-' + Date.now(),
                              name: newCourse.name,
                              nameHindi: newCourse.nameHindi || newCourse.name,
                              category: newCourse.category || 'Competitive Exams',
                              shortDesc: newCourse.shortDesc || 'Competitive exam preparation batch',
                              eligibility: newCourse.eligibility || 'Specified qualification',
                              duration: newCourse.duration || '4 Months',
                              batchTime: newCourse.batchTime || '9:00 AM onwards',
                              features: ['Regular Test Series', 'Experienced Faculty'],
                              subjects: ['General Knowledge', 'Reasoning & Aptitude'],
                              badge: 'New Batch',
                              badgeColor: 'orange'
                            };
                            setCourses([created, ...courses]);
                            setShowAddCourse(false);
                            setNewCourse({ category: 'Competitive Exams' });
                          }}
                          className="px-4 py-1.5 bg-[#15803d] text-white text-xs font-bold rounded-lg"
                        >
                          Save Course
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Course Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {courses.map((c) => (
                      <div key={c.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[10px] font-bold text-[#0c2b5e] uppercase">{c.category}</div>
                          <h5 className="font-bold text-slate-900">{c.name}</h5>
                          {c.nameHindi && c.nameHindi !== c.name && (
                            <div className="text-xs text-amber-600">{c.nameHindi}</div>
                          )}
                          <div className="text-[11px] text-slate-500 mt-1">
                            Eligibility: {c.eligibility} • Timing: {c.batchTime}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${c.name}?`)) {
                              setCourses(courses.filter(item => item.id !== c.id));
                            }
                          }}
                          className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: FACULTY */}
              {activeTab === 'faculty' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-slate-900">Faculty & Teaching Staff</h4>
                    <button
                      onClick={() => setShowAddFaculty(!showAddFaculty)}
                      className="inline-flex items-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Faculty</span>
                    </button>
                  </div>

                  {showAddFaculty && (
                    <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Teacher Name"
                          value={newFaculty.name || ''}
                          onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Role / Designation (e.g. Senior Lecturer)"
                          value={newFaculty.role || ''}
                          onChange={(e) => setNewFaculty({ ...newFaculty, role: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Subject (e.g. General Science)"
                          value={newFaculty.subject || ''}
                          onChange={(e) => setNewFaculty({ ...newFaculty, subject: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Experience (e.g. 8+ Years Experience)"
                          value={newFaculty.experience || ''}
                          onChange={(e) => setNewFaculty({ ...newFaculty, experience: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Photo URL (Unsplash or Image URL)"
                          value={newFaculty.photoUrl || ''}
                          onChange={(e) => setNewFaculty({ ...newFaculty, photoUrl: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button onClick={() => setShowAddFaculty(false)} className="px-3 py-1.5 text-xs text-slate-500">Cancel</button>
                        <button
                          onClick={() => {
                            if (!newFaculty.name) return;
                            const created: FacultyMember = {
                              id: 'fac-' + Date.now(),
                              name: newFaculty.name,
                              role: newFaculty.role || 'Lecturer',
                              subject: newFaculty.subject || 'General Knowledge',
                              experience: newFaculty.experience || '5+ Years Experience',
                              photoUrl: newFaculty.photoUrl || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400',
                              bio: 'Dedicated faculty committed to student exam excellence.',
                              isDirector: false
                            };
                            setFaculty([...faculty, created]);
                            setShowAddFaculty(false);
                          }}
                          className="px-4 py-1.5 bg-[#15803d] text-white text-xs font-bold rounded-lg"
                        >
                          Save Faculty
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {faculty.map((f) => (
                      <div key={f.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img src={f.photoUrl} alt={f.name} className="w-12 h-12 rounded-xl object-cover" />
                          <div>
                            <h5 className="font-bold text-sm text-slate-900">{f.name}</h5>
                            <div className="text-xs text-amber-600">{f.subject}</div>
                            <div className="text-[10px] text-slate-400">{f.role} • {f.experience}</div>
                          </div>
                        </div>
                        {!f.isDirector && (
                          <button
                            onClick={() => setFaculty(faculty.filter(item => item.id !== f.id))}
                            className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: RESULTS */}
              {activeTab === 'results' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-slate-900">Verified Results & Selection Manager</h4>
                    <button
                      onClick={() => setShowAddResult(!showAddResult)}
                      className="inline-flex items-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Result</span>
                    </button>
                  </div>

                  {showAddResult && (
                    <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Student Name"
                          value={newResult.studentName || ''}
                          onChange={(e) => setNewResult({ ...newResult, studentName: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Exam Name (e.g. REET Level-1)"
                          value={newResult.exam || ''}
                          onChange={(e) => setNewResult({ ...newResult, exam: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Year (e.g. 2024)"
                          value={newResult.year || ''}
                          onChange={(e) => setNewResult({ ...newResult, year: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Result Details (e.g. Final Selected - Top Rank)"
                          value={newResult.result || ''}
                          onChange={(e) => setNewResult({ ...newResult, result: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Photo URL (Optional)"
                          value={newResult.photoUrl || ''}
                          onChange={(e) => setNewResult({ ...newResult, photoUrl: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button onClick={() => setShowAddResult(false)} className="px-3 py-1.5 text-xs text-slate-500">Cancel</button>
                        <button
                          onClick={() => {
                            if (!newResult.studentName) return;
                            const created: ResultItem = {
                              id: 'res-' + Date.now(),
                              studentName: newResult.studentName,
                              exam: newResult.exam || 'Competitive Exam',
                              year: newResult.year || '2024',
                              result: newResult.result || 'Selected Student',
                              photoUrl: newResult.photoUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
                              verified: true,
                              isVerified: true
                            };
                            setResults([created, ...results]);
                            setShowAddResult(false);
                          }}
                          className="px-4 py-1.5 bg-[#15803d] text-white text-xs font-bold rounded-lg"
                        >
                          Add Result
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {results.map((r) => (
                      <div key={r.id} className="bg-white p-3 rounded-2xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-800">{r.studentName}</div>
                          <div className="text-[11px] text-[#dc2626] font-semibold">{r.exam} ({r.year})</div>
                          <div className="text-[11px] text-slate-500 mt-1">{r.result}</div>
                        </div>
                        <div className="pt-2 mt-2 border-t flex justify-end">
                          <button
                            onClick={() => setResults(results.filter(item => item.id !== r.id))}
                            className="text-xs text-rose-500 hover:text-rose-700 font-semibold"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: NOTICES */}
              {activeTab === 'notices' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-slate-900">Notice Board & Announcements</h4>
                    <button
                      onClick={() => setShowAddNotice(!showAddNotice)}
                      className="inline-flex items-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post New Notice</span>
                    </button>
                  </div>

                  {showAddNotice && (
                    <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Notice Title"
                          value={newNotice.title || ''}
                          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <select
                          value={newNotice.category}
                          onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value as any })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        >
                          <option value="New Batch">New Batch</option>
                          <option value="Test Series">Test Series</option>
                          <option value="Exam Alert">Exam Alert</option>
                          <option value="General">General</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Date (e.g. 25 Sep 2024)"
                          value={newNotice.date || ''}
                          onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Detailed description..."
                        value={newNotice.description || ''}
                        onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                      />
                      <div className="flex justify-end gap-2">
                        <button onClick={() => setShowAddNotice(false)} className="px-3 py-1.5 text-xs text-slate-500">Cancel</button>
                        <button
                          onClick={() => {
                            if (!newNotice.title) return;
                            const created: NoticeItem = {
                              id: 'not-' + Date.now(),
                              title: newNotice.title,
                              category: newNotice.category || 'General',
                              date: newNotice.date || 'Today',
                              description: newNotice.description || '',
                              isImportant: true
                            };
                            setNotices([created, ...notices]);
                            setShowAddNotice(false);
                          }}
                          className="px-4 py-1.5 bg-[#15803d] text-white text-xs font-bold rounded-lg"
                        >
                          Publish Notice
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {notices.map((n) => (
                      <div key={n.id} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">{n.category}</span>
                            <span className="text-[11px] text-slate-400">{n.date}</span>
                          </div>
                          <h5 className="font-bold text-slate-900 mt-1">{n.title}</h5>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">{n.description}</p>
                        </div>
                        <button
                          onClick={() => setNotices(notices.filter(item => item.id !== n.id))}
                          className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-slate-900">Photo Gallery Manager</h4>
                    <button
                      onClick={() => setShowAddGallery(!showAddGallery)}
                      className="inline-flex items-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Photo</span>
                    </button>
                  </div>

                  {showAddGallery && (
                    <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Photo Title"
                          value={newGallery.title || ''}
                          onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                        <select
                          value={newGallery.category}
                          onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value as any })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        >
                          <option value="Classroom">Classroom</option>
                          <option value="Students">Students</option>
                          <option value="Events">Events</option>
                          <option value="Institute Building">Institute Building</option>
                          <option value="Celebrations">Celebrations</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Image URL"
                          value={newGallery.imageUrl || ''}
                          onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })}
                          className="px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Caption (Short Caption)"
                        value={newGallery.caption || ''}
                        onChange={(e) => setNewGallery({ ...newGallery, caption: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border rounded-lg text-xs"
                      />
                      <div className="flex justify-end gap-2">
                        <button onClick={() => setShowAddGallery(false)} className="px-3 py-1.5 text-xs text-slate-500">Cancel</button>
                        <button
                          onClick={() => {
                            if (!newGallery.imageUrl || !newGallery.title) return;
                            const created: GalleryItem = {
                              id: 'gal-' + Date.now(),
                              title: newGallery.title,
                              category: newGallery.category || 'Classroom',
                              imageUrl: newGallery.imageUrl,
                              caption: newGallery.caption,
                              date: '2024'
                            };
                            setGallery([created, ...gallery]);
                            setShowAddGallery(false);
                          }}
                          className="px-4 py-1.5 bg-[#15803d] text-white text-xs font-bold rounded-lg"
                        >
                          Upload Photo
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {gallery.map((g) => (
                      <div key={g.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 relative group">
                        <img src={g.imageUrl} alt={g.title} className="w-full h-32 object-cover" />
                        <div className="p-2">
                          <div className="text-[11px] font-bold truncate">{g.title}</div>
                          <div className="text-[10px] text-slate-400">{g.category}</div>
                        </div>
                        <button
                          onClick={() => setGallery(gallery.filter(item => item.id !== g.id))}
                          className="absolute top-1.5 right-1.5 p-1 bg-red-600 text-white rounded-md shadow"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-4 max-w-2xl bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 border-b pb-3">General Institute Settings</h4>
                  
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <label className="block text-slate-600 font-bold mb-1">Director Name:</label>
                      <input
                        type="text"
                        value={settings.directorName}
                        onChange={(e) => setSettings({ ...settings, directorName: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-600 font-bold mb-1">Primary Phone (Phone 1):</label>
                        <input
                          type="text"
                          value={settings.primaryPhone1}
                          onChange={(e) => setSettings({ ...settings, primaryPhone1: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border rounded-xl font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-bold mb-1">Secondary Phone (Phone 2):</label>
                        <input
                          type="text"
                          value={settings.primaryPhone2}
                          onChange={(e) => setSettings({ ...settings, primaryPhone2: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border rounded-xl font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-600 font-bold mb-1">New Batch Start Days:</label>
                        <input
                          type="text"
                          value={settings.newBatchDay}
                          onChange={(e) => setSettings({ ...settings, newBatchDay: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-bold mb-1">New Batch Start Timing:</label>
                        <input
                          type="text"
                          value={settings.newBatchTime}
                          onChange={(e) => setSettings({ ...settings, newBatchTime: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 font-bold mb-1">Test Series Schedule Days:</label>
                      <input
                        type="text"
                        value={settings.testSeriesDays}
                        onChange={(e) => setSettings({ ...settings, testSeriesDays: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                      />
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => alert('Settings saved successfully!')}
                        className="w-full py-2.5 bg-[#0c2b5e] hover:bg-[#164282] text-white font-bold rounded-xl shadow transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
