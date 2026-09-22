import React, { useState, useEffect, useRef } from 'react';
import { Award, PenTool, Sparkles, PhoneCall, Camera, RotateCcw, Check, ZoomIn } from 'lucide-react';

interface DirectorPortraitProps {
  directorName?: string;
  phone1?: string;
  phone2?: string;
  onEnquireClick?: () => void;
}

export const DirectorPortrait: React.FC<DirectorPortraitProps> = ({
  directorName = "Balram Nokhwal",
  phone1 = "94130-94840",
  phone2 = "95094-46840",
  onEnquireClick
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('global_coaching_director_photo') || '/balram-nokhwal.jpg';
  });
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    return !!localStorage.getItem('global_coaching_director_photo');
  });
  const [uploadToast, setUploadToast] = useState<string>('');
  const [showFullImageModal, setShowFullImageModal] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleStorageUpdate = () => {
      const stored = localStorage.getItem('global_coaching_director_photo');
      if (stored) {
        setPhotoSrc(stored);
        setHasCustomPhoto(true);
      } else {
        setPhotoSrc('/balram-nokhwal.jpg');
        setHasCustomPhoto(false);
      }
    };

    window.addEventListener('director-photo-updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('director-photo-updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('कृपया एक वैध फ़ोटो (Image file) चुनें');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1400;
        const MAX_HEIGHT = 1800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.95);
          try {
            localStorage.setItem('global_coaching_director_photo', compressedDataUrl);
            setPhotoSrc(compressedDataUrl);
            setHasCustomPhoto(true);
            window.dispatchEvent(new Event('director-photo-updated'));
            setUploadToast('आपकी ओरिजिनल फोटो सफलतापूर्वक सेट हो गई!');
            setTimeout(() => setUploadToast(''), 4000);
          } catch (err) {
            setPhotoSrc(compressedDataUrl);
            setUploadToast('फ़ोटो सेट हो गई!');
            setTimeout(() => setUploadToast(''), 4000);
          }
        }
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('global_coaching_director_photo');
    setPhotoSrc('/balram-nokhwal.jpg');
    setHasCustomPhoto(false);
    window.dispatchEvent(new Event('director-photo-updated'));
    setUploadToast('डिफ़ॉल्ट फ़ोटो पर रीसेट कर दिया गया');
    setTimeout(() => setUploadToast(''), 3000);
  };

  return (
    <div className="relative w-full max-w-md mx-auto" id="director-portrait-hero">
      {/* Background Decorative Crest */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#0c2b5e] via-[#164282] to-[#ffc700] rounded-3xl opacity-20 blur-lg" />
      
      <div className="relative bg-white rounded-3xl p-3 md:p-4 shadow-2xl border-2 border-amber-300/60 overflow-hidden">
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 bg-[#0c2b5e]/95 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-md border border-amber-400/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Founder & Director</span>
          </div>
          <div className="inline-flex items-center gap-1 bg-[#15803d]/95 text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow">
            <span>Expert Guidance</span>
          </div>
        </div>

        {/* Top-Right Quick Photo Upload & View Controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
          <button
            onClick={() => setShowFullImageModal(true)}
            className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg border border-white/40 transition hover:scale-105"
            title="पूरी फ़ोटो देखें (Full View)"
            type="button"
            id="view-full-director-photo-btn"
          >
            <ZoomIn className="w-4 h-4 text-amber-300" />
          </button>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-8 h-8 rounded-full bg-[#0c2b5e]/90 hover:bg-[#0c2b5e] text-white flex items-center justify-center shadow-lg border border-amber-400/50 transition hover:scale-105"
            title="फ़ोटो बदलें / अपलोड करें (Upload Exact Photo)"
            type="button"
            id="upload-director-photo-btn"
          >
            <Camera className="w-4 h-4 text-amber-400" />
          </button>

          {hasCustomPhoto && (
            <button
              onClick={handleResetPhoto}
              className="w-8 h-8 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg border border-white/40 transition hover:scale-105"
              title="डिफ़ॉल्ट फ़ोटो पर रीसेट करें"
              type="button"
              id="reset-director-photo-btn"
            >
              <RotateCcw className="w-3.5 h-3.5 text-white" />
            </button>
          )}

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
            id="director-photo-file-input"
          />
        </div>

        {/* Toast Alert */}
        {uploadToast && (
          <div className="absolute top-16 right-4 left-4 z-30 bg-emerald-700 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl flex items-center justify-center gap-2 animate-bounce">
            <Check className="w-4 h-4 text-amber-300" />
            <span>{uploadToast}</span>
          </div>
        )}

        {/* Director Photo Frame */}
        <div 
          className={`relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-blue-50 to-[#0c2b5e]/10 cursor-pointer group transition-all ${
            isDragging ? 'ring-4 ring-amber-400 scale-[0.99]' : ''
          }`}
          onClick={() => setShowFullImageModal(true)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          title="फ़ोटो ज़ूम करने के लिए क्लिक करें"
        >
          <img 
            src={photoSrc} 
            alt={`Director ${directorName} - Global Coaching Classes Anupgarh`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />

          {/* Drag Overlay */}
          {isDragging && (
            <div className="absolute inset-0 z-30 bg-blue-900/90 flex flex-col items-center justify-center text-white p-4 text-center">
              <Camera className="w-12 h-12 text-amber-300 animate-bounce mb-2" />
              <p className="text-base font-bold">अपनी ओरिजिनल फ़ोटो यहाँ छोड़ें</p>
              <p className="text-xs text-amber-200">Drop image file here</p>
            </div>
          )}

          {/* Subtle gradient vignette at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071c3d]/90 via-[#071c3d]/40 to-transparent" />

          {/* Quote Pill in image */}
          <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
            <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
              "सही दिशा और कड़ा परिश्रम ही सफलता का मूलमंत्र है..."
            </p>
            <p className="text-amber-300 text-[11px] font-medium drop-shadow">
              संचालक: {directorName} | मो. {phone1}
            </p>
          </div>
        </div>

        {/* Prominent Direct Photo Upload Button */}
        <div className="mt-2.5">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition hover:shadow-lg active:scale-[0.98] border border-amber-300"
            id="direct-camera-upload-cta"
          >
            <Camera className="w-4 h-4 text-slate-900" />
            <span>📷 ओरिजिनल फ़ोटो अपलोड करें (यहाँ क्लिक करें)</span>
          </button>
        </div>

        {/* Director Name Badge */}
        <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 rounded-2xl border border-amber-300 flex flex-col items-center text-center shadow-inner">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-[#071c3d] px-4 py-1 rounded-full text-xs font-extrabold shadow-sm border border-amber-400 uppercase tracking-wider">
            <PenTool className="w-3.5 h-3.5 text-[#071c3d]" />
            <span>Director / संचालक</span>
          </div>
          <h3 className="mt-1.5 text-2xl font-black text-[#0c2b5e] tracking-tight">
            {directorName}
          </h3>
          <p className="text-xs text-slate-700 font-medium mt-0.5">
            प्रतियोगी परीक्षा मेंटॉर एवं कैरियर काउंसलर, अनूपगढ़
          </p>

          {/* Upload prompt helper */}
          <div className="mt-2 w-full flex items-center justify-between px-2 pt-2 border-t border-amber-200/80 text-[11px] text-slate-600">
            <span className="flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-blue-700" />
              <span>फ़ोटो बदलने के लिए:</span>
            </span>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="font-bold text-[#0c2b5e] hover:text-[#164282] hover:underline"
              type="button"
            >
              यहाँ क्लिक करें (अपलोड)
            </button>
          </div>

          {/* Quick Contact Buttons */}
          <div className="mt-3 flex items-center gap-2 w-full">
            <a 
              href={`tel:${phone1.replace(/[^0-9]/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0c2b5e] hover:bg-[#164282] text-white text-xs font-bold py-2 px-3 rounded-xl transition shadow"
              id="hero-director-call-btn"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>कॉल: {phone1}</span>
            </a>
            {onEnquireClick && (
              <button 
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold py-2 px-3 rounded-xl transition shadow"
                id="hero-director-meet-btn"
              >
                <span>परामर्श लें</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full Image Modal Lightbox */}
      {showFullImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowFullImageModal(false)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-400/40 p-2 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between p-2 text-white border-b border-slate-700 mb-2">
              <span className="text-sm font-bold text-amber-300">
                संचालक: {directorName} — ग्लोबल कोचिंग क्लासेज, अनूपगढ़
              </span>
              <button
                onClick={() => setShowFullImageModal(false)}
                className="text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg text-xs font-bold"
              >
                बंद करें (✕)
              </button>
            </div>
            <div className="overflow-auto max-h-[75vh] w-full flex justify-center">
              <img 
                src={photoSrc} 
                alt={`Director ${directorName}`} 
                className="max-h-[75vh] object-contain rounded-xl"
              />
            </div>
            <div className="w-full mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300 px-2">
              <span>मोबाइल: {phone1} | {phone2}</span>
              <button
                onClick={() => {
                  setShowFullImageModal(false);
                  fileInputRef.current?.click();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>फ़ोटो बदलें / अपलोड करें</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
