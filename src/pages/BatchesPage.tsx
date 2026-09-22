import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { InstituteSettings, AdmissionEnquiry } from '../types';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Send, 
  Check, 
  PhoneCall, 
  MessageCircle,
  AlertCircle
} from 'lucide-react';

interface BatchesPageProps {
  settings: InstituteSettings;
  onBackToHome: () => void;
  onNewEnquirySubmitted: (enquiry: AdmissionEnquiry) => void;
}

export const BatchesPage: React.FC<BatchesPageProps> = ({
  settings,
  onBackToHome,
  onNewEnquirySubmitted
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    batch: 'Morning Super Batch (9:00 AM - 1:00 PM)',
    course: 'Rajasthan CET (Common Eligibility Test)',
    qualification: '12th Pass',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const cleanPhone = settings.primaryPhone1.replace(/[^0-9]/g, '');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim()) return;

    const newEnquiry: AdmissionEnquiry = {
      id: `batch-enq-${Date.now()}`,
      studentName: formData.name.trim(),
      mobile: formData.mobile.trim(),
      mobileNumber: formData.mobile.trim(),
      courseInterested: formData.course,
      course: formData.course,
      qualification: formData.qualification,
      message: `Batch Preferred: ${formData.batch}. Note: ${formData.message || 'Seat reserved online'}`,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    onNewEnquirySubmitted(newEnquiry);
    setSubmitted(true);
  };

  const batches = [
    {
      title: 'Morning Super Foundation Batch',
      time: '09:00 AM - 01:00 PM (Daily 4 Hours)',
      target: 'Rajasthan CET (12th & Graduation), REET Level-1 & Level-2, Rajasthan Police Constable',
      status: 'Admissions Open (Next Monday 9 AM)',
      features: [
        'Daily 4 hours theory + practice by expert teachers',
        'Direct mentorship by Director Balram Nokhwal',
        'Monday & Wednesday regular OMR test series',
        'Free printed notes & formula booklets provided',
        '3 Days Free Demo Class before fee submission'
      ],
      badge: 'High Demand'
    },
    {
      title: 'Afternoon Competitive Target Batch',
      time: '01:00 PM - 05:00 PM (Daily 4 Hours)',
      target: 'SSC GD Constable, SSC CGL / CHSL, Railway NTPC & Group-D, Patwari & VDO',
      status: 'Seats Filling Fast',
      features: [
        'Dedicated shortcut tricks for Quantitative Maths & Reasoning',
        'Detailed previous 10 years question papers (PYQs) solved in class',
        'Weekly full-length mock examinations',
        'Daily doubt counter available from 2:00 PM to 4:00 PM',
        '3 Days Free Trial Demo available'
      ],
      badge: 'Target 2025-26'
    },
    {
      title: 'Evening Computer & High Court Typing Batch',
      time: '04:00 PM - 07:00 PM (Flexible Shifts)',
      target: 'RS-CIT Computer Diploma (RKCL Authorized), High Court LDC Typing, RSSB Typing Speed',
      status: 'Limited Lab Seats (30 PCs)',
      features: [
        'Individual desktop computer allocated to every student',
        'Dual font mastery: Kruti Dev 010 and Mangal Inscript typing',
        'Official RKCL authorized syllabus and internal assessments',
        'High-speed typing accuracy software and timed speed tests',
        'Special certificate guidance for government vacancies'
      ],
      badge: 'RKCL Approved'
    }
  ];

  return (
    <div className="min-h-screen bg-[#eef4fb] text-slate-900 pb-20">
      <PageBanner
        title="Upcoming New Batches & Classroom Schedules"
        subtitle="New classroom batches start every Monday at 9:00 AM with 3 days free demo trial. Book your seat online to secure study material on day one."
        breadcrumbCurrent="New Batches"
        badge="Batch Starts Every Monday"
        settings={settings}
        onBackToHome={onBackToHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Next Batch Highlights Banner */}
        <div className="bg-gradient-to-r from-[#0c2b5e] to-[#071c3d] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffc700] text-[#071c3d] text-xs font-black rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Upcoming Batch Date</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Every Monday at 9:00 AM Sharp
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Fresh topic orientation starts every Monday. Zero prior knowledge needed; we cover right from basic fundamentals to exam-level questions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Director: {settings.primaryPhone1}</span>
            </a>
            <a
              href={`https://wa.me/${settings.whatsappNumber}?text=Hello%20Balram%20Sir%2C%20I%20want%20to%20join%20the%20upcoming%20Monday%20batch%20at%20Global%20Coaching%20Anupgarh.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Demo Pass</span>
            </a>
          </div>
        </div>

        {/* The 3 Major Batches Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-2xl font-black text-[#0c2b5e]">
              Daily Batch Timings & Examination Streams
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Choose your preferred timing slot according to your commute and daily schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {batches.map((b, idx) => (
              <div
                key={idx}
                className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fbff]'} rounded-2xl border border-[#d7e2f0] p-6 sm:p-8 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between hover:border-[#0c2b5e]/40`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-[#0c2b5e] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                      {b.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{b.time}</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-[#0c2b5e] leading-snug">{b.title}</h4>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">Target Examinations:</span>
                    <span>{b.target}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase text-slate-400">Batch Inclusions:</span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {b.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, batch: b.title }));
                      const formEl = document.getElementById('batch-reserve-form');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-[#0c2b5e] hover:bg-[#071c3d] text-white font-bold text-xs rounded-xl transition text-center shadow-xs"
                  >
                    Reserve Seat in this Batch
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Online Batch Seat Reservation Form */}
        <div id="batch-reserve-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>3-Day Free Demo Reservation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0c2b5e]">
                Reserve Your Seat in Upcoming Batch
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Register freely online. Our counseling desk will reserve your seat, issue your demo pass, and confirm your batch timing via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-emerald-950">Seat Reserved Successfully!</h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Director Balram Nokhwal and our team will contact you shortly on <strong>{formData.mobile}</strong> with batch class details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-300"
                >
                  Submit Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter student name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. 94130XXXXX"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Selected Batch Timing *</label>
                    <select
                      value={formData.batch}
                      onChange={e => setFormData({ ...formData, batch: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                    >
                      <option value="Morning Super Batch (9:00 AM - 1:00 PM)">Morning Super Batch (9:00 AM - 1:00 PM)</option>
                      <option value="Afternoon Target Batch (1:00 PM - 5:00 PM)">Afternoon Target Batch (1:00 PM - 5:00 PM)</option>
                      <option value="Evening Computer Batch (4:00 PM - 7:00 PM)">Evening Computer Batch (4:00 PM - 7:00 PM)</option>
                      <option value="Flexible Shift">Flexible / Call me to decide</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Course Interested In *</label>
                    <select
                      value={formData.course}
                      onChange={e => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                    >
                      <option value="Rajasthan CET (Common Eligibility Test)">Rajasthan CET (12th & Graduation)</option>
                      <option value="REET Level-1 & Level-2">REET (Teacher Level-1 & Level-2)</option>
                      <option value="Rajasthan Police & Delhi Police">Rajasthan Police & Delhi Police Constable</option>
                      <option value="SSC GD, CGL, CHSL, MTS">SSC GD, CGL, CHSL, MTS</option>
                      <option value="RS-CIT Computer Education (RKCL)">RS-CIT Computer Diploma & Typing</option>
                      <option value="Patwari, VDO & Railways">Patwari, VDO, Railways</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Additional Note / Questions (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask about hostel accommodation, study material, fee installments..."
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0c2b5e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Confirm Free Demo Seat Reservation</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
