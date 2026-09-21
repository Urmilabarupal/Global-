import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Video, 
  Trees, 
  FileText,
  CheckCircle
} from 'lucide-react';

export const QuickInfoBar: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Experienced Faculty",
      subtitle: "Subject Specialist Mentors",
      color: "from-blue-600 to-indigo-700",
      iconBg: "bg-blue-100 text-blue-800"
    },
    {
      icon: ClipboardCheck,
      title: "Regular Test Series",
      subtitle: "Mon & Wed OMR Tests",
      color: "from-emerald-600 to-teal-700",
      iconBg: "bg-emerald-100 text-emerald-800"
    },
    {
      icon: Video,
      title: "CCTV Surveillance",
      subtitle: "Safe & Disciplined Campus",
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-100 text-amber-800"
    },
    {
      icon: Trees,
      title: "Quiet Environment",
      subtitle: "Distraction-Free Focus",
      color: "from-teal-600 to-cyan-700",
      iconBg: "bg-teal-100 text-teal-800"
    },
    {
      icon: FileText,
      title: "Comprehensive Notes",
      subtitle: "Printed & Handwritten Modules",
      color: "from-rose-600 to-red-700",
      iconBg: "bg-rose-100 text-rose-800"
    }
  ];

  return (
    <div className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6" id="quick-features-bar">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-lg hover:shadow-xl border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start"
            >
              <div className="flex items-center justify-between w-full mb-2.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg} shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
