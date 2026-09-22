import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  PhoneCall, 
  MessageCircle, 
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { InstituteSettings } from '../types';

interface FAQSectionProps {
  settings: InstituteSettings;
  onEnquireClick: () => void;
}

interface FAQItem {
  id: string;
  category: 'Admissions & Batches' | 'Test Series' | 'Study Material & Faculty' | 'RS-CIT & Computer' | 'General';
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions & Batches',
    question: 'When do new batches start at Global Coaching Classes?',
    answer: 'New batches commence every Monday morning at 9:00 AM sharp for all core competitive examinations (CET, REET, Rajasthan Police, SSC GD, Railway, and Patwari). We also provide flexible afternoon and evening batches for working professionals and college students.'
  },
  {
    id: 'faq-2',
    category: 'Admissions & Batches',
    question: 'Is there a free demo class facility before paying the fee?',
    answer: 'Yes, absolutely! Every student is entitled to 3 days of completely free demo classes. You can attend lectures by different subject experts, review class notes, experience our teaching methodology, and speak directly with Director Balram Nokhwal before finalizing your admission.'
  },
  {
    id: 'faq-3',
    category: 'Test Series',
    question: 'What is the schedule and pattern of the regular test series?',
    answer: 'We conduct regular offline OMR sheet-based test series every Monday and Wednesday. Tests are modeled 100% on the exact negative marking scheme and syllabus of the Rajasthan Staff Selection Board (RSSB) and RPSC. Same-day answer key discussion and ranking charts are published on the institute notice board and Telegram channel.'
  },
  {
    id: 'faq-4',
    category: 'Study Material & Faculty',
    question: 'Do students receive printed study modules and handwritten notes?',
    answer: 'Yes! All enrolled students receive complete, chapter-wise printed modules and handwritten revision notes personally curated by our subject specialists. The material covers theory, shortcut tricks, previous 10 years solved question papers (PYQs), and expected practice sets.'
  },
  {
    id: 'faq-5',
    category: 'Study Material & Faculty',
    question: 'How are individual doubts resolved for weak students?',
    answer: 'We maintain dedicated daily Doubt Counters after regular classes from 2:00 PM to 4:00 PM. Teachers sit one-on-one with students to clarify difficult concepts in Mathematics, Reasoning, Science, and English Grammar.'
  },
  {
    id: 'faq-6',
    category: 'RS-CIT & Computer',
    question: 'Is the RS-CIT certificate valid for all Rajasthan government jobs?',
    answer: 'Yes, RS-CIT (Rajasthan State Certificate Course in Information Technology) is an official program conducted by RKCL & VMOU Kota. It is mandatory and officially recognized for Rajasthan Patwari, LDC / Junior Assistant, Police Constable, Gram Vikas Adhikari (VDO), and High Court recruitments.'
  },
  {
    id: 'faq-7',
    category: 'RS-CIT & Computer',
    question: 'Does the institute offer English and Hindi typing coaching?',
    answer: 'Yes! We have an air-conditioned, state-of-the-art computer lab with 30+ desktop systems equipped with professional typing software (Kruti Dev 010, Devlys 010, and English Mangal / Inscript fonts) essential for High Court LDC and SSC examinations.'
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'Are there hostel and PG facilities available for outstation students in Anupgarh?',
    answer: 'Yes. For students coming from surrounding rural villages and neighboring tehsils (such as Raisinghnagar, Gharsana, Suratgarh, Vijaynagar), multiple verified boys and girls hostels and PG accommodations are situated within 300 to 500 meters of our campus.'
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'Where is Global Coaching Classes located in Anupgarh?',
    answer: 'We are conveniently located right in the central educational hub of Anupgarh: Opposite Government Hospital, Behind Medical Store, Near Ganesh Mandir, Opposite Dussehra Ground, Anupgarh (Rajasthan) - 335701.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ settings, onEnquireClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admissions & Batches', 'Test Series', 'Study Material & Faculty', 'RS-CIT & Computer', 'General'];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 border border-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Got Questions? We Have Answers
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Everything you need to know about admissions, batch timings, test series, study materials, and career guidance under Director Balram Nokhwal.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., demo class, Monday test, fees, RS-CIT)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm focus:outline-none focus:border-[#0c2b5e] focus:ring-2 focus:ring-blue-100 transition"
              id="faq-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat 
                    ? 'bg-[#0c2b5e] text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
                id={`faq-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-800">No questions found matching your search.</p>
              <p className="text-xs text-slate-500 mt-1">Try a different keyword or contact our counselors directly.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-[#0c2b5e] text-white text-xs font-bold rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#0c2b5e] shadow-md ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition"
                    id={`faq-toggle-${faq.id}`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 ${
                        isOpen ? 'bg-[#0c2b5e] text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-600">
                          {faq.category}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#0c2b5e]' : 'bg-slate-50 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pl-14">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#071c3d] via-[#0c2b5e] to-[#164282] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#ffc700] text-[#071c3d] text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Mentorship</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Still have questions about courses or exam prep?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Speak directly with Director Balram Nokhwal or visit our campus for free counseling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] px-5 py-3 rounded-xl font-black text-xs sm:text-sm shadow-md transition"
              id="faq-call-counselor-btn"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call: {settings.primaryPhone1}</span>
            </a>

            <button
              onClick={onEnquireClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition backdrop-blur-sm"
              id="faq-enquire-modal-btn"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Request Free Callback</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
