"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Water’s Edge hosted our corporate annual symposium. The waterfront sunset views combined with high-tech function room facilities made it an outstanding success.",
    author: "HIM Management Services",
    role: "Corporate Event Host",
  },
  {
    quote: "Our wedding reception at the rooftop space was pure magic. Seating for 500+ guests was handled seamlessly with exquisite food and warm Maldivian hospitality.",
    author: "Aminath & Ahmed",
    role: "Wedding Celebration",
  },
  {
    quote: "The Roadha Villun family gathering was executed to perfection. Delicious buffet setup right along the water's edge at sunset.",
    author: "Private Dinner Client",
    role: "Family Function",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
            Client Experiences
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
            Words of Praise
          </h2>
        </div>

        {/* Carousel / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#0F2042] rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all relative"
            >
              <Quote className="w-10 h-10 text-[#38BDF8]/30 mb-4" />
              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-serif-display text-base font-semibold text-white">{t.author}</h4>
                <p className="text-xs text-[#38BDF8] uppercase tracking-wider font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
