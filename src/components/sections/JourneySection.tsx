"use client";

import { motion } from "framer-motion";
import { Milestone, UtensilsCrossed, Building, Store } from "lucide-react";

const milestones = [
  {
    date: "19 January 2022",
    title: "Establishment of HIM Management Services Pvt Ltd",
    desc: "Parent management company incorporated to oversee premier hospitality & venue assets.",
    icon: Milestone,
  },
  {
    date: "2022",
    title: "Startup Opening of Water's Edge Building",
    desc: "Multilevel landmark waterfront commercial venue unveiled in Hulhumale.",
    icon: Building,
  },
  {
    date: "14 February 2022",
    title: "Marry Brown Officially Opened",
    desc: "Officially opened by Minister of National Planning, Housing, and Infrastructure, Hon. Mohamed Aslam.",
    icon: Store,
  },
  {
    date: "18 May 2022",
    title: "Pizza Mia Officially Opened",
    desc: "Officially opened by Managing Director of Housing Development Corporation, Mr. Ahmed Suhail.",
    icon: UtensilsCrossed,
  },
];

export default function JourneySection() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
            History & Growth
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
            Our Journey
          </h2>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 relative z-10 flex flex-col justify-between hover:border-[#C5A059]/50 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 border border-[#C5A059]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {m.date}
                    </span>
                    <h3 className="font-serif-display text-lg font-medium text-white mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
