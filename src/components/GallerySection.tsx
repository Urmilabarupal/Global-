import React, { useState } from 'react';
import { Camera, X, ZoomIn, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
  onOpenAdmin?: () => void;
  hideHeader?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
  onOpenAdmin,
  hideHeader = false
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Classroom', 'Students', 'Events', 'Institute Building', 'Celebrations'];

  const filteredGallery = gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  return (
    <section id="gallery" className={`${hideHeader ? 'py-2 sm:py-6' : 'py-8 sm:py-16 md:py-24'} bg-slate-50 relative`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span>Glimpses of Institute Life</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight leading-tight">
              Photo Gallery
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#ffc700] mx-auto mt-2 sm:mt-3 rounded-full" />

            <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base md:text-lg leading-relaxed">
              Captures from classroom lectures, weekly OMR test series, computer lab sessions, guest lectures, and educational events at Global Coaching Classes Anupgarh.
            </p>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none mb-5 sm:mb-8 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition min-h-[34px] sm:min-h-[36px] ${
                activeCategory === cat
                  ? 'bg-[#0c2b5e] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer transform hover:-translate-y-0.5"
              id={`gallery-item-${item.id}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition duration-300">
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-[#0c2b5e]/90 text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-lg shadow">
                  {item.category}
                </div>
              </div>

              <div className="p-3.5 sm:p-4">
                <h4 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#0c2b5e] transition line-clamp-1">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                )}
                {item.date && (
                  <div className="mt-1.5 text-[10px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
          <div 
            className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/20"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="max-h-[60vh] sm:max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  src={filteredGallery[selectedImageIndex].imageUrl}
                  alt={filteredGallery[selectedImageIndex].title}
                  className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-3.5 sm:p-6 bg-slate-900 text-white">
                <div className="inline-block bg-[#ffc700] text-[#071c3d] text-[10px] sm:text-xs font-black px-2 py-0.5 rounded uppercase mb-1.5">
                  {filteredGallery[selectedImageIndex].category}
                </div>
                <h3 className="text-base sm:text-xl font-bold leading-snug">
                  {filteredGallery[selectedImageIndex].title}
                </h3>
                {filteredGallery[selectedImageIndex].caption && (
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {filteredGallery[selectedImageIndex].caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
