"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Building, Sun, Sparkles, MapPin, Layers, X, Grid, Maximize2 } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/galleryPhotos";
import Image from "next/image";

const venueCategories = [
  {
    id: "CorporateEvents",
    name: "Corporate Events",
    badge: "Indoor & Executive",
    icon: Building,
    description: "Professional seminar setups, corporate workshops, and executive banquet functions equipped with state-of-the-art facilities.",
    amenities: ["Up to 500 Guests", "AV & Projectors", "Executive Seating", "Custom Catering"],
    photos: GALLERY_PHOTOS.filter(p => p.folder === "CorporateEvents"),
  },
  {
    id: "Stage-Decorations",
    name: "Stage & Decor",
    badge: "Bespoke Styling",
    icon: Sparkles,
    description: "Breathtaking stage designs, custom floral arches, themed lighting, and celebratory backdrops tailored to your vision.",
    amenities: ["Custom Stage Sets", "Floral Arrangements", "Ambient Lighting", "VIP Lounge"],
    photos: GALLERY_PHOTOS.filter(p => p.folder === "Stage-Decorations"),
  },
  {
    id: "Venu_Exterior_Interior",
    name: "Rooftop & Exterior",
    badge: "Outdoor Oceanview",
    icon: Sun,
    description: "Expansive open-air rooftop terrace overlooking the lagoon skyline, perfect for sunset receptions and starry night galas.",
    amenities: ["Up to 750 Guests", "Panoramic Sunset View", "Open-Air Lagoon Terrace", "DJ & Live Music Setup"],
    photos: GALLERY_PHOTOS.filter(p => p.folder === "Venu_Exterior_Interior"),
  },
  {
    id: "WatersEdge_Building",
    name: "WatersEdge Building",
    badge: "Architecture",
    icon: Layers,
    description: "Modern multi-level waterfront architecture in Hulhumalé, providing flexible indoor and outdoor space configurations.",
    amenities: ["Multi-Level Venue", "Waterfront Access", "Private Entrance", "On-site Parking"],
    photos: GALLERY_PHOTOS.filter(p => p.folder === "WatersEdge_Building"),
  },
  {
    id: "Wedding_Event_Setup",
    name: "Wedding & Event Setup",
    badge: "Celebrations",
    icon: MapPin,
    description: "Luxury wedding setups, Roadha Villun banquets, birthday parties, and intimate family celebrations.",
    amenities: ["Beach Vows Setup", "Roadha Villun Banquet", "Private Dining", "Dedicated Butler"],
    photos: GALLERY_PHOTOS.filter(p => p.folder === "Wedding_Event_Setup"),
  },
];

export default function VenuesSection() {
  // Automatic slideshow index per card (slides every 3.5 seconds)
  const [photoIndices, setPhotoIndices] = useState<Record<string, number>>({
    CorporateEvents: 0,
    "Stage-Decorations": 0,
    Venu_Exterior_Interior: 0,
    WatersEdge_Building: 0,
    Wedding_Event_Setup: 0,
  });

  // Selected card category for modal page expansion
  const [activeModalCategory, setActiveModalCategory] = useState<typeof venueCategories[0] | null>(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number>(0);

  // Auto-advance slideshow inside each card frame every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndices(prev => {
        const nextState = { ...prev };
        venueCategories.forEach(cat => {
          nextState[cat.id] = (prev[cat.id] + 1) % cat.photos.length;
        });
        return nextState;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="venues" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
              OUR VENUE CATEGORIES
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white mt-2">
              Versatile Spaces. <br />
              Unforgettable Experiences.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light">
            Each card features an automatic photo slideshow. Click any card to enter its full photo gallery page!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venueCategories.map((venue, idx) => {
            const Icon = venue.icon;
            const currentIdx = photoIndices[venue.id] || 0;
            const currentPhoto = venue.photos[currentIdx] || venue.photos[0];

            return (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  setActiveModalCategory(venue);
                  setLightboxPhotoIndex(0);
                }}
                className="bg-[#0A1224]/90 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 cursor-pointer group hover:scale-[1.01]"
              >
                <div>
                  {/* Automatic Photo Slideshow Frame */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPhoto?.path}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${currentPhoto?.path}')` }}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1224] via-transparent to-black/40 z-10" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                      <span className="px-3.5 py-1 rounded-full bg-[#070F1E]/90 text-[10px] uppercase font-semibold text-slate-200 border border-white/10 backdrop-blur-md shadow-md">
                        {venue.badge}
                      </span>
                    </div>

                    {/* Photo Count + Expand Hint Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#080D1A]/90 text-[#C5A059] text-xs font-mono font-semibold border border-[#C5A059]/40 backdrop-blur-md shadow-lg flex items-center gap-1.5 group-hover:bg-[#C5A059] group-hover:text-[#080D1A] transition-colors">
                        <Grid className="w-3.5 h-3.5" />
                        {venue.photos.length} Photos
                      </span>
                    </div>

                    {/* Click Card Hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-[2px]">
                      <div className="px-5 py-2.5 rounded-full bg-[#C5A059] text-[#080D1A] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                        <Maximize2 className="w-4 h-4" />
                        Explore All {venue.photos.length} Photos
                      </div>
                    </div>
                  </div>

                  {/* Details Specs */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3 text-[#C5A059]">
                      <div className="p-2.5 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-display text-2xl font-medium text-white group-hover:text-[#C5A059] transition-colors">
                        {venue.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {venue.description}
                    </p>

                    {/* Amenity Pills */}
                    <div className="flex flex-wrap gap-3 pt-2 text-[11px] text-slate-300 font-light">
                      {venue.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <Sparkles className="w-3 h-3 text-[#C5A059]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] group-hover:text-white transition-colors">
                    Click Card To Open Gallery ({venue.photos.length})
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* FULL-PAGE CATEGORY PHOTO GALLERY MODAL OVERLAY */}
      <AnimatePresence>
        {activeModalCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-[#070D18]/95 backdrop-blur-xl flex flex-col justify-between overflow-y-auto p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 shrink-0">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C5A059]">
                  {activeModalCategory.badge} GALLERY
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-white font-normal mt-1">
                  {activeModalCategory.name} Archive ({activeModalCategory.photos.length} Photos)
                </h3>
              </div>

              <button
                onClick={() => setActiveModalCategory(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#080D1A] transition-colors border border-white/20 shadow-xl"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Full Category Photo Grid Gallery (All Photos Visible at once) */}
            <div className="max-w-7xl mx-auto w-full my-8 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activeModalCategory.photos.map((photo, i) => (
                  <motion.div
                    key={photo.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.5) }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group shadow-lg hover:border-[#C5A059] transition-all duration-300"
                  >
                    <Image
                      src={photo.path}
                      alt={`${activeModalCategory.name} Photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 bg-[#080D1A]/90 border border-[#C5A059]/40 text-[#C5A059] px-3 py-1 rounded-full text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Photo {i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
