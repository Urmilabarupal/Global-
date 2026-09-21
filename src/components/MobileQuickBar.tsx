import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { InstituteSettings } from '../types';

interface MobileQuickBarProps {
  settings: InstituteSettings;
  onOpenAdmission: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  settings,
  onOpenAdmission
}) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2 px-3 flex items-center justify-between gap-2" id="mobile-bottom-quick-bar">
      {/* Call Button */}
      <a
        href={`tel:${settings.primaryPhone1.replace(/[^0-9]/g, '')}`}
        className="flex-1 py-2.5 px-2 bg-[#0c2b5e] hover:bg-[#164282] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow"
        id="mobile-quick-call-btn"
      >
        <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
        <span className="truncate">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${settings.whatsappNumber}?text=Hello%20Global%20Coaching%20Classes%20Anupgarh,%20I%20want%20information%20regarding%20courses%20and%20admission.`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 px-2 bg-[#15803d] hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow"
        id="mobile-quick-whatsapp-btn"
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>

      {/* Admission Enquiry Button */}
      <button
        onClick={onOpenAdmission}
        className="flex-[1.2] py-2.5 px-2 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition shadow animate-pulse"
        id="mobile-quick-admission-btn"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
        <span className="truncate">Admission Form</span>
      </button>
    </div>
  );
};
