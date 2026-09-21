import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Video, 
  Trees, 
  BookOpen, 
  Target, 
  Award, 
  HelpCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US_FEATURES } from '../data/initialData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    ClipboardCheck,
    Video,
    Compass: Trees,
    BookOpen,
    Target,
    Award,
    HelpCircle
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#071c3d] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Premier Academic Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Why Choose Global Coaching Classes?
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Anupgarh's trusted and result-oriented coaching center, providing students with the right direction,
            disciplined habits, and a solid foundation for competitive success.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_FEATURES.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={index}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
                id={`why-choose-card-${index}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0c2b5e] group-hover:bg-[#0c2b5e] group-hover:text-amber-300 flex items-center justify-center transition duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0c2b5e] transition mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-[#0c2b5e] font-semibold">
                  <span>✓ Verified Campus Facility</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
