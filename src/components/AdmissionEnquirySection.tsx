import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  User, 
  Phone, 
  BookOpen, 
  FileText,
  AlertCircle 
} from 'lucide-react';
import { AdmissionEnquiry, InstituteSettings } from '../types';

interface AdmissionEnquirySectionProps {
  settings: InstituteSettings;
  selectedCoursePrefill?: string;
  onNewEnquirySubmitted: (enquiry: AdmissionEnquiry) => void;
}

export const AdmissionEnquirySection: React.FC<AdmissionEnquirySectionProps> = ({
  settings,
  selectedCoursePrefill = '',
  onNewEnquirySubmitted
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    mobile: '',
    altMobile: '',
    courseInterested: selectedCoursePrefill || 'CET (Senior Secondary / Graduate)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Update course when prefill changes
  React.useEffect(() => {
    if (selectedCoursePrefill) {
      setFormData(prev => ({ ...prev, courseInterested: selectedCoursePrefill }));
    }
  }, [selectedCoursePrefill]);

  const courseOptions = [
    'CET (Senior Secondary / Graduate)',
    'REET Level-1 (Primary Classes 1-5)',
    'REET Level-2 (SST / Maths-Science)',
    'SSC GD / CGL / CHSL',
    'Railway (NTPC / Group D / ALP)',
    'Rajasthan Police & Delhi Police',
    'Patwari (Revenue Department Exam)',
    'LDC / Junior Assistant',
    'RS-CIT (Computer Education Diploma)',
    'School Lecturer / Grade-II Teacher',
    'Pre-BSTC (D.El.Ed Entrance Exam)',
    'Lab Assistant (Science Stream)',
    'General Enquiry / Test Series'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Input validation & sanitization
    const trimmedName = formData.studentName.trim();
    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg("Please enter the student's full name.");
      return;
    }

    if (cleanMobile.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    const newEnquiry: AdmissionEnquiry = {
      id: 'enq-' + Date.now(),
      studentName: trimmedName,
      fatherName: formData.fatherName.trim() || undefined,
      mobile: cleanMobile,
      altMobile: formData.altMobile.trim() || undefined,
      courseInterested: formData.courseInterested,
      message: formData.message.trim() || undefined,
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    onNewEnquirySubmitted(newEnquiry);
    setSubmittedEnquiry(newEnquiry);
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Global Coaching Classes Anupgarh!%0A%0A*Online Admission Enquiry:*%0A👤 *Student Name:* ${formData.studentName}%0A👨‍👦 *Father's Name:* ${formData.fatherName || 'N/A'}%0A📱 *Mobile:* ${formData.mobile}%0A📚 *Course:* ${formData.courseInterested}%0A💬 *Message:* ${formData.message || 'Looking for admission details in upcoming batch.'}`;
    window.open(`https://wa.me/91${settings.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="admission" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Limited Seats Available • Admissions Open</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Online Admission & Enquiry Form
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Reserve your seat for upcoming batches or weekly test series by submitting the form below.
            Our academic counsellor will contact you shortly.
          </p>
        </div>

        {/* Main Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-slate-200/80 relative">
          
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Thank you! Your enquiry has been received successfully.
              </h3>

              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl max-w-md mx-auto text-left text-xs sm:text-sm text-slate-700 space-y-1">
                <div><strong>Student Name:</strong> {submittedEnquiry?.studentName}</div>
                <div><strong>Course:</strong> {submittedEnquiry?.courseInterested}</div>
                <div><strong>Mobile:</strong> {submittedEnquiry?.mobile}</div>
                <div className="text-[11px] text-emerald-800 font-mono mt-1">Ref ID: {submittedEnquiry?.id}</div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Our counsellors from Global Coaching Classes Anupgarh will contact you on your registered mobile number shortly.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="bg-[#15803d] hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      studentName: '',
                      fatherName: '',
                      mobile: '',
                      altMobile: '',
                      courseInterested: 'CET (Senior Secondary / Graduate)',
                      message: ''
                    });
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm px-4 py-3 rounded-xl transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" id="admission-enquiry-form">
              
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Enter student's full name..."
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
                      id="input-student-name"
                    />
                  </div>
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Father's Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Enter father's name..."
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
                      id="input-father-name"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number..."
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition font-mono"
                      id="input-mobile-number"
                    />
                  </div>
                </div>

                {/* Alternate Mobile */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Alternate Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Additional phone number..."
                      value={formData.altMobile}
                      onChange={(e) => setFormData({ ...formData, altMobile: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition font-mono"
                      id="input-alt-mobile"
                    />
                  </div>
                </div>
              </div>

              {/* Course selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interested Course / Exam <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.courseInterested}
                    onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
                    id="select-course-interested"
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message / Query */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message or Specific Query (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify batch timing preferences, previous exam preparation background, or any query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0c2b5e] focus:bg-white transition"
                  id="textarea-query-message"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  id="submit-enquiry-btn"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Admission Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3.5 px-5 bg-[#15803d] hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition flex items-center justify-center gap-2"
                  id="submit-whatsapp-direct-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                🔒 Your contact details are strictly confidential and used solely for academic counseling.
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
