"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  // offset: start = when top of section hits top of viewport
  //         end = when bottom of section leaves top of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Hero content: fades out, scales down, and slides up as you scroll away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);

  // Background image: slow parallax (moves slower than scroll)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Scroll indicator fades out quickly
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-20 w-full h-screen min-h-[600px] max-h-[1080px] flex flex-col justify-between overflow-hidden bg-[#080D1A]"
    >
      {/* Background Visual Container - Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-bg.webp"
            alt="Water's Edge Maldives Waterfront Venue"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Single viewport content wrapper fitting 100vh perfectly without causing page scroll overflow */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between pt-24 pb-6"
        style={{
          opacity: contentOpacity,
          y: contentY,
          scale: contentScale,
        }}
      >
        
        {/* Content Block aligned vertically centered */}
        <div className="max-w-xl space-y-4 my-auto">
          
          {/* Subheader Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#38BDF8] font-semibold">
              WATER&apos;S EDGE MALDIVES
            </span>
          </motion.div>

          {/* Main Title - scaled for single screen view */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] text-white tracking-tight"
          >
            Where <br />
            Extraordinary <br />
            <span className="text-[#38BDF8] font-serif italic">
              Events Begin
            </span>
          </motion.h1>

          {/* Paragraph text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-md"
          >
            A premium waterfront destination for weddings, corporate events, celebrations and unforgettable gatherings in the Maldives.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#070F1E] bg-[#38BDF8] hover:bg-[#7DD3FC] shadow-lg transition-all duration-300 text-center"
            >
              BOOK YOUR EVENT
            </a>

            <a
              href="#venues"
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              EXPLORE VENUES
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* Scroll Indicator anchored cleanly at screen bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ opacity: scrollIndicatorOpacity }}
          className="flex items-center gap-3 cursor-pointer text-slate-300 hover:text-white transition-colors w-fit shrink-0"
          onClick={() => {
            const target = document.getElementById("about");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="w-5 h-8 rounded-full border border-white/40 flex items-center justify-center p-1">
            <ArrowDown className="w-3 h-3 text-[#38BDF8] animate-bounce" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-slate-300">
            SCROLL TO EXPLORE
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
