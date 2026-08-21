"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FlowingMenu, { FlowingMenuItem } from "@/components/ui/FlowingMenu";

const flowingMenuItems: FlowingMenuItem[] = [
  {
    link: "#home",
    text: "Home",
    image: "/images/photos/WatersEdge_Building/9W5A5479JPG.webp",
  },
  {
    link: "#about",
    text: "About",
    image: "/images/photos/Stage-Decorations/9W5A1617JPG.webp",
  },
  {
    link: "#venues",
    text: "Venues",
    image: "/images/photos/Venu_Exterior_Interior/RoofTop (12)JPG.webp",
  },
  {
    link: "#gallery",
    text: "Gallery",
    image: "/images/photos/CorporateEvents/seminar room (2).webp",
  },
  {
    link: "#packages",
    text: "Packages",
    image: "/images/photos/Stage-Decorations/9W5A8449JPG.webp",
  },
  {
    link: "#contact",
    text: "Contact",
    image: "/images/photos/Venu_Exterior_Interior/RoofTop (16)JPG.webp",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [flowingMenuOpen, setFlowingMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when FlowingMenu drawer is open
  useEffect(() => {
    if (flowingMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [flowingMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080D1A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-50">
              <Image
                src="/logo.png"
                alt="Water's Edge Maldives Logo"
                width={280}
                height={80}
                className="h-14 sm:h-18 w-auto object-contain brightness-[1.8] drop-shadow-lg"
                priority
              />
            </Link>

            {/* Header Right Action Trigger */}
            <div className="flex items-center gap-4 relative z-50">
              <Link
                href="#contact"
                className="hidden sm:inline-flex px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-[#C5A059] hover:bg-[#d4b068] transition-all shadow-md hover:scale-105"
              >
                Book Your Event
              </Link>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setFlowingMenuOpen(!flowingMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#080D1A] border border-white/20 transition-all duration-300 backdrop-blur-md shadow-lg"
                aria-label="Toggle Navigation Menu"
              >
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                  {flowingMenuOpen ? "Close" : "Menu"}
                </span>
                {flowingMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen FlowingMenu Drawer */}
      <AnimatePresence>
        {flowingMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#080D1A] pt-24 pb-8 flex flex-col justify-between"
          >
            {/* FlowingMenu Container */}
            <div className="flex-1 w-full relative">
              <FlowingMenu
                items={flowingMenuItems}
                speed={14}
                bgColor="#080D1A"
                textColor="#FFFFFF"
                marqueeBgColor="#C5A059"
                marqueeTextColor="#080D1A"
                borderColor="rgba(197, 160, 89, 0.2)"
                onItemClick={() => setFlowingMenuOpen(false)}
              />
            </div>

            {/* Drawer Footer Info */}
            <div className="max-w-7xl mx-auto px-6 w-full pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 text-xs text-slate-400">
              <div className="tracking-widest uppercase text-[#C5A059] font-medium">
                Water&apos;s Edge Maldives &bull; Waterfront Venue
              </div>
              <div className="mt-2 sm:mt-0">
                Direct Contact: <a href="tel:+9607599669" className="text-white hover:underline">+960 759 9669</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
