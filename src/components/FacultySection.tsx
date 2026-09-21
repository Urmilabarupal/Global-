import React from 'react';
import { Award, GraduationCap, Sparkles, UserPlus, BookOpen } from 'lucide-react';
import { FacultyMember } from '../types';

interface FacultySectionProps {
  faculty: FacultyMember[];
  onOpenAdmin: () => void;
  onEnquireClick: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({
  faculty,
  onOpenAdmin,
  onEnquireClick
}) => {
  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>Experienced & Dedicated Educators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Our Faculty & Subject Specialists
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Under the leadership of Director Balram Nokhwal, our team of seasoned educators in Anupgarh delivers syllabus-oriented, authentic coaching to aspirants.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => {
            const isDirector = member.isDirector;
            return (
              <div
                key={member.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isDirector ? 'border-2 border-amber-400 ring-2 ring-amber-100' : 'border-slate-200'
                }`}
                id={`faculty-card-${member.id}`}
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={member.photoUrl || "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Role Pill */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow ${
                        isDirector 
                          ? 'bg-[#ffc700] text-[#071c3d] border border-amber-300' 
                          : 'bg-[#0c2b5e] text-white'
                      }`}>
                        {member.role}
                      </span>
                    </div>

                    {/* Experience Tag */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#0c2b5e] text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow">
                      {member.experience}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0c2b5e] transition">
                      {member.name}
                    </h3>

                    <div className="text-xs font-bold text-amber-600 mt-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{member.subject}</span>
                    </div>

                    {member.qualification && (
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                        Qualification: {member.qualification}
                      </div>
                    )}

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {isDirector ? 'Chief Academic Director' : 'Faculty Member'}
                  </span>
                  <button
                    onClick={onEnquireClick}
                    className="text-xs font-bold text-[#0c2b5e] hover:text-[#dc2626] transition flex items-center gap-1"
                  >
                    <span>Connect with Mentor →</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Admin note & Faculty addition CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0c2b5e] bg-white px-4 py-2 rounded-xl border border-dashed border-slate-300 hover:border-[#0c2b5e] transition shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Management: Add or Update Faculty (Admin Panel)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
