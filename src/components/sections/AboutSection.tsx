"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, LayoutGrid, MapPin, ConciergeBell } from "lucide-react";

const stats = [
  { value: "750+", label: "Guest Capacity", icon: Users },
  { value: "Multiple", label: "Event Spaces", icon: LayoutGrid },
  { value: "Waterfront", label: "Prime Location", icon: MapPin },
  { value: "Full-Service", label: "Event Support", icon: ConciergeBell },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-28 pb-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Venue Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative border frame offset behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[#C5A059]/30 pointer-events-none" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10">
              <Image
                src="/images/photos/Stage-Decorations/9W5A1689JPG.webp"
                alt="Water's Edge Maldives - Luxury Floral Entrance Venue"
                fill
                className="object-cover -rotate-90 scale-125"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E]/50 via-transparent to-transparent" />
            </div>



            {/* Subtle glow */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[#C5A059]/5 blur-3xl" />
          </motion.div>

          {/* Right — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-7 order-1 lg:order-2"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.35em] font-semibold text-[#C5A059]">
                About Water&apos;s Edge
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.08] text-white">
              Where Every{" "}
              <span className="text-[#C5A059] italic">Moment</span>
              <br />
              Becomes a Memory
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-300 text-[15px] leading-[1.75] font-light">
              <p>
                Built in 2020 and located right in the heart of Hulhumalé,
                Water&apos;s Edge is a multi-level waterfront venue designed
                to host exceptional events of every kind.
              </p>
              <p>
                From intimate gatherings of 50 guests to large-scale
                productions with over 750 attendees, we provide the
                perfect setting, facilities and service to make your event
                truly unforgettable.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "Waterfront views",
                "Multi-level spaces",
                "Full catering",
                "Custom lighting",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span className="text-sm text-slate-200 font-light">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA + Signature */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-3">
              <a
                href="#venues"
                className="px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#070F1E] bg-[#C5A059] hover:bg-[#D4AF37] shadow-lg transition-all duration-300 hover:shadow-[#C5A059]/20 hover:shadow-2xl"
              >
                Explore Our Venues
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center">
                  <span className="font-serif-display text-sm text-[#C5A059] italic">W</span>
                </div>
                <span className="font-serif italic text-lg text-[#C5A059]/80 tracking-wide">
                  Water&apos;s Edge Team
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-24 bg-white/[0.04] backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/[0.08] max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-serif-display text-2xl sm:text-3xl font-semibold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
