import React, { useState } from 'react';
import { X, ZoomIn, Calendar, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
  onOpenAdmin: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Events', 'Celebrations', 'Classroom', 'Students'];

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
    <section id="gallery" className="py-6 sm:py-8 bg-slate-50 relative rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#0c2b5e]/10 text-[#0c2b5e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Real Campus Photographs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] tracking-tight">
            संस्थान वास्तविक फोटो गैलरी
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc700] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            ग्लोबल कोचिंग क्लासेज अनूपगढ़ के मेधावी छात्र सम्मान समारोह, सरस्वती वंदना उत्सव, वातानुकूलित क्लासरूम व्याख्यान एवं महिला जागरूकता कार्यशाला के प्रामाणिक एवं मूल फोटोग्राफ्स।
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
                  ? 'bg-[#0c2b5e] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'सभी तस्वीरें (All Photos)' : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer transform hover:-translate-y-1 flex flex-col"
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

                  <div className="absolute top-3 left-3 bg-[#0c2b5e]/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow backdrop-blur-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#0c2b5e] transition line-clamp-1">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    {item.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.date}</span>
                      </div>
                    )}
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                      Real Photo
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="max-h-[72vh] flex items-center justify-center bg-black p-2">
                <img
                  src={filteredGallery[selectedImageIndex].imageUrl}
                  alt={filteredGallery[selectedImageIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
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
