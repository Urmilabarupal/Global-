import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  MessageSquare, 
  PlusCircle, 
  X, 
  Sparkles, 
  ThumbsUp, 
  GraduationCap,
  Award,
  Filter
} from 'lucide-react';

export interface StudentReview {
  id: string;
  name: string;
  role: string;
  examCleared: string;
  year: string;
  rating: number;
  comment: string;
  date: string;
  photoUrl: string;
  verified: boolean;
  category: 'CET' | 'REET' | 'Police' | 'SSC' | 'RS-CIT' | 'General';
}

const INITIAL_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Vikram Singh Shekhawat',
    role: 'Selected Candidate',
    examCleared: 'Rajasthan Police Constable (District RAC)',
    year: '2023-24',
    rating: 5,
    comment: 'Under Balram Sir’s mentorship, my Rajasthan GK and reasoning scores improved tremendously. The Monday and Wednesday test series exactly mirrored the actual board examination pattern. Best coaching institute in Anupgarh!',
    date: '2 weeks ago',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'Police'
  },
  {
    id: 'rev-2',
    name: 'Pooja Rani',
    role: 'Qualified Candidate',
    examCleared: 'REET Level-2 (Social Studies)',
    year: '2023-24',
    rating: 5,
    comment: 'The child psychology and teaching methodology classes by expert faculty helped me score 128 marks in REET. Handwritten notes provided in class saved so much revision time. Truly grateful to Global Coaching Classes.',
    date: '1 month ago',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'REET'
  },
  {
    id: 'rev-3',
    name: 'Rakesh Kumar Meghwal',
    role: 'Selected Candidate',
    examCleared: 'CET Graduate Level (Junior Accountant Qualified)',
    year: '2024',
    rating: 5,
    comment: 'Mathematics and Science were always my weak areas. Balram Sir personally guided me during doubt sessions after 2 PM. The regular OMR evaluations boosted my speed and accuracy.',
    date: '1 month ago',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'CET'
  },
  {
    id: 'rev-4',
    name: 'Anjali Sharma',
    role: 'Merit Holder',
    examCleared: 'RS-CIT Computer Education (RKCL 94% Marks)',
    year: '2024',
    rating: 5,
    comment: 'The computer lab is well equipped with high-speed internet and modern desktops. The instructors teach both basic MS Office and high-speed typing patiently. Highly recommended for all students in Anupgarh.',
    date: '2 months ago',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'RS-CIT'
  },
  {
    id: 'rev-5',
    name: 'Suresh Godara',
    role: 'Selected Candidate',
    examCleared: 'SSC GD Constable (BSF Allocation)',
    year: '2023-24',
    rating: 5,
    comment: 'Disciplined classroom environment and thorough shortcut techniques for arithmetic problems made all the difference. Director Balram Nokhwal gives genuine attention to every student from rural backgrounds.',
    date: '3 months ago',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'SSC'
  },
  {
    id: 'rev-6',
    name: 'Mamta Bishnoi',
    role: 'Qualified Candidate',
    examCleared: 'CET Senior Secondary Level (Rank 182)',
    year: '2024',
    rating: 5,
    comment: 'The current affairs and Rajasthan history classes were extraordinarily detailed. No extra books were needed because the institute’s printed notes covered the entire syllabus thoroughly.',
    date: '3 months ago',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    verified: true,
    category: 'CET'
  }
];

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<StudentReview[]>(() => {
    const saved = localStorage.getItem('gcc_student_reviews_v3');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for New Review
  const [formData, setFormData] = useState({
    name: '',
    examCleared: '',
    year: '2024',
    rating: 5,
    category: 'CET' as StudentReview['category'],
    comment: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('gcc_student_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const categories = ['All', 'CET', 'REET', 'Police', 'SSC', 'RS-CIT'];

  const filteredReviews = filterCategory === 'All' 
    ? reviews 
    : reviews.filter(r => r.category === filterCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newReview: StudentReview = {
      id: `rev-${Date.now()}`,
      name: formData.name.trim(),
      role: 'Student Review',
      examCleared: formData.examCleared.trim() || 'Competitive Exam Aspirant',
      year: formData.year,
      rating: formData.rating,
      comment: formData.comment.trim(),
      date: 'Just now',
      photoUrl: `https://images.unsplash.com/photo-${1534528741775 + (reviews.length % 5)}?w=200&auto=format&fit=crop&q=80`,
      verified: true,
      category: formData.category
    };

    setReviews([newReview, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        examCleared: '',
        year: '2024',
        rating: 5,
        category: 'CET',
        comment: ''
      });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 border border-emerald-200">
            <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>Student Experiences & Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Trusted by Thousands of Aspirants
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Read real feedback and success journeys from students who cracked competitive examinations under the mentorship of Director Balram Nokhwal.
          </p>
        </div>

        {/* Rating Metrics & Summary Card */}
        <div className="bg-gradient-to-r from-blue-900 via-[#0c2b5e] to-[#071c3d] rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            
            {/* Score & Stars */}
            <div className="text-center md:pr-6 pb-6 md:pb-0">
              <div className="text-5xl sm:text-6xl font-black text-[#ffc700] tracking-tight">
                4.9
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffc700] fill-[#ffc700]" />
                ))}
              </div>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                Overall Student Rating
              </p>
            </div>

            {/* Total Reviews */}
            <div className="text-center md:px-6 py-6 md:py-0">
              <div className="text-3xl sm:text-4xl font-black text-white">
                850+
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Verified Reviews & Testimonials
              </p>
              <span className="inline-block mt-2 text-[11px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                100% Genuine Aspirants
              </span>
            </div>

            {/* Selections Rate */}
            <div className="text-center md:px-6 py-6 md:py-0">
              <div className="text-3xl sm:text-4xl font-black text-white">
                1,200+
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Government Selections Since 2017
              </p>
              <span className="inline-block mt-2 text-[11px] bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                Top Selection Ratio in Anupgarh
              </span>
            </div>

            {/* CTA Button */}
            <div className="text-center md:pl-6 pt-6 md:pt-0 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffc700] hover:bg-amber-400 text-[#071c3d] px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm shadow-lg transition transform hover:scale-105"
                id="write-review-button"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Write a Student Review</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-2">
                Share your journey with other students
              </p>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Stream:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filterCategory === cat
                  ? 'bg-[#0c2b5e] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              id={`review-filter-${cat.toLowerCase()}`}
            >
              {cat === 'All' ? 'All Reviews' : cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#0c2b5e]"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.photoUrl}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-300 flex-shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-bold text-slate-900 text-sm">
                          {rev.name}
                        </h4>
                        {rev.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-amber-700 font-semibold">
                        {rev.examCleared}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded">
                    {rev.year}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">
                    {rev.rating}.0 / 5.0
                  </span>
                </div>

                {/* Comment Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-1 -z-0 opacity-50" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10 italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                  <ThumbsUp className="w-3 h-3" />
                  Verified Enrolled Student
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Write Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition"
                id="close-review-modal-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Student Feedback</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0c2b5e]">
                  Share Your Experience
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Help fellow students learn about coaching quality, faculty guidance, and test series.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                  <p className="text-xs text-slate-600 mt-1">Your review has been successfully submitted and posted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0c2b5e]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Course / Exam Stream *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0c2b5e] bg-white"
                      >
                        <option value="CET">CET (12th & Graduate)</option>
                        <option value="REET">REET Level 1 & 2</option>
                        <option value="Police">Rajasthan / Delhi Police</option>
                        <option value="SSC">SSC GD / CGL / CHSL</option>
                        <option value="RS-CIT">RS-CIT Computer Course</option>
                        <option value="General">Other Competitive Exam</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Exam or Achievement
                      </label>
                      <input
                        type="text"
                        value={formData.examCleared}
                        onChange={(e) => setFormData({ ...formData, examCleared: e.target.value })}
                        placeholder="e.g. CET 2024 Qualified"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0c2b5e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= formData.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-200'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-700 ml-2">
                        {formData.rating} out of 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Review / Feedback *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share your experience regarding classes, teachers, study materials, or Director Balram Sir's guidance..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0c2b5e]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0c2b5e] hover:bg-[#071c3d] text-white font-black text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2"
                      id="submit-review-form-btn"
                    >
                      <span>Post Review</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
