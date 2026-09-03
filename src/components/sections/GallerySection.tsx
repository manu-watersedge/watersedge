"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import DriftWall from "@/components/ui/DriftWall";
import { CATEGORIES, GALLERY_PHOTOS } from "@/data/galleryPhotos";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter photos for active category
  const filteredItems = activeCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(item => item.category === activeCategory);

  // Transform photos into DriftWall items
  const driftItems = filteredItems.map((photo) => ({
    image: photo.path,
    title: photo.title,
    href: undefined,
  }));

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-20 text-white overflow-hidden w-full min-h-screen">
      {/* Header & Category Filters Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              Interactive 3D Drift Showcase
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
              Captured Moments Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
              Hover over tiles to lift & illuminate photo details from our {filteredItems.length} photo collection.
            </p>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count = cat === "All" 
                ? GALLERY_PHOTOS.length 
                : GALLERY_PHOTOS.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-[#C5A059] text-[#080D1A] shadow-lg shadow-[#C5A059]/20 font-bold"
                      : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10 backdrop-blur-md"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat ? "bg-[#080D1A]/20 text-[#080D1A]" : "bg-white/10 text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Width Full-Screen 3D DriftWall Container */}
      <div className="relative w-full h-[85vh] min-h-[700px] max-h-[950px] z-10">
        <DriftWall
          key={activeCategory}
          items={driftItems}
          columns={6}
          tileWidth={290}
          tileHeight={190}
          gap={22}
          radius={18}
          tilt={12}
          turn={-10}
          perspective={1300}
          depth={80}
          speed={40}
          direction="up"
          variance={0.45}
          parallax={0.7}
          lift={75}
          fade={0.1}
          dim={0.9}
          overlayColor="transparent"
        />
      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#080D1A] transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#080D1A] transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl w-full bg-[#0A1224] rounded-2xl overflow-hidden border border-[#C5A059]/40 p-6 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full aspect-[16/9] max-h-[70vh] bg-contain bg-center bg-no-repeat bg-[#080D1A] rounded-xl mb-4"
                style={{ backgroundImage: `url('${activeLightboxItem.path}')` }}
              />
              <div className="flex items-center justify-between px-2 pt-2 border-t border-white/10">
                <div className="text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                    {activeLightboxItem.category}
                  </span>
                  <h3 className="font-serif-display text-xl text-white font-medium mt-0.5">
                    {activeLightboxItem.title}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
