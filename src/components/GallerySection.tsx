import React, { useState } from 'react';
import { Camera, X, ZoomIn, Plus, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
  onOpenAdmin: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
  onOpenAdmin
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
    <section id="gallery" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>Glimpses of Institute Life</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            Photo Gallery
          </h2>
          <div className="w-20 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Captures from classroom lectures, weekly OMR test series, computer lab sessions, guest lectures, and educational events at Global Coaching Classes Anupgarh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer transform hover:-translate-y-1"
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
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#0c2b5e]/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#0c2b5e] transition line-clamp-1">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                )}
                {item.date && (
                  <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
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
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  src={filteredGallery[selectedImageIndex].imageUrl}
                  alt={filteredGallery[selectedImageIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white">
                <div className="inline-block bg-[#ffc700] text-[#071c3d] text-xs font-black px-2.5 py-0.5 rounded uppercase mb-2">
                  {filteredGallery[selectedImageIndex].category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  {filteredGallery[selectedImageIndex].title}
                </h3>
                {filteredGallery[selectedImageIndex].caption && (
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {filteredGallery[selectedImageIndex].caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Upload more photos CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-300 shadow-sm transition"
          >
            <Plus className="w-4 h-4 text-[#0c2b5e]" />
            <span>Management: Upload More Photographs (Admin Photo Manager)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
