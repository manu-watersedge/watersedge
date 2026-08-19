"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface FloatingCallButtonProps {
  phoneNumber?: string;
}

export default function FloatingCallButton({ phoneNumber = "+9607901007" }: FloatingCallButtonProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip text label on hover */}
      <span className="mr-3 px-3.5 py-1.5 rounded-full bg-[#080D1A]/90 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:inline-block">
        Call Us Now
      </span>

      {/* Floating Animated Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#C5A059] to-[#d4b068] text-[#080D1A] shadow-[0_10px_30px_rgba(197,160,89,0.5)] border border-[#C5A059]/50 hover:scale-110 active:scale-95 transition-transform duration-300"
        aria-label="Call Waters Edge Maldives"
      >
        {/* Pulsing Backlight Ripple */}
        <span className="absolute inset-0 rounded-full bg-[#C5A059] opacity-75 animate-ping -z-10" />

        {/* Call Phone Icon */}
        <Phone className="w-6 h-6 fill-current animate-bounce" />
      </a>
    </motion.div>
  );
}
