"use client";

import { motion } from "framer-motion";
import { Compass, CalendarCheck, ShieldAlert, Sparkles } from "lucide-react";

const serviceCategories = [
  {
    title: "Pre-Event Planning",
    icon: Compass,
    items: [
      "Budget creation & management",
      "Event timelines & planning",
      "Branding & marketing strategy",
      "Sponsorship packages",
      "Venue booking & negotiation",
    ],
  },
  {
    title: "Event Management",
    icon: CalendarCheck,
    items: [
      "Online registration",
      "Speaker & sponsor management",
      "Floor plans & decor planning",
      "Menu creation",
      "Event execution",
    ],
  },
  {
    title: "Onsite Management",
    icon: ShieldAlert,
    items: [
      "Onsite setup & day-of management",
      "Volunteer management",
      "Stage management",
      "Showflows & MC scripts",
      "Tear down & post-event follow-up",
    ],
  },
];

const timelineSteps = [
  { step: "01", name: "Plan" },
  { step: "02", name: "Create" },
  { step: "03", name: "Execute" },
  { step: "04", name: "Celebrate" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header - Matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
            OUR SERVICES
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
            End-to-End Event Production
          </h2>
        </div>

        {/* 3 Columns of Lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-normal text-white">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-3.5 pl-2 border-l border-white/10">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs sm:text-sm text-slate-300 font-light pl-4 relative">
                      <span className="absolute left-[-5px] top-[7px] w-2 h-2 rounded-full bg-[#C5A059]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Horizontal Process Workflow Node Line - Matching reference screenshot */}
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059] to-[#C5A059]/20 -z-0" />

            {timelineSteps.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10">
                <div className="w-11 h-11 rounded-full bg-[#080D1A] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif-display text-sm font-semibold mb-3 shadow-lg">
                  {t.step}
                </div>
                <h4 className="text-sm font-medium text-white tracking-wider">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
