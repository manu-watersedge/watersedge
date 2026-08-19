"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export interface PackageItem {
  name: string;
  eventType: string;
  startingPrice: string;
  guestCapacity: string;
  services: string[];
}

const packages: PackageItem[] = [
  {
    name: "Royal Maldives Wedding",
    eventType: "Weddings & Vow Renewals",
    startingPrice: "Enquire for Pricing",
    guestCapacity: "Up to 500 Guests",
    services: [
      "Exclusive Rooftop Waterfront access",
      "Custom 5-course gourmet banquet menu",
      "Full staging, lighting & pro audio setup",
      "Dedicated pre-event & day-of planner",
      "Bridal & VIP preparation suite access",
    ],
  },
  {
    name: "Executive Corporate Summit",
    eventType: "Conferences & Symposia",
    startingPrice: "Enquire for Pricing",
    guestCapacity: "Up to 100 Guests",
    services: [
      "Function Hall with Smart Board & Video Conferencing",
      "High-speed dedicated Wi-Fi network",
      "Morning & afternoon coffee break catering",
      "Stage management & AV technical team",
      "Custom delegate registration desk",
    ],
  },
  {
    name: "Sunset Celebration Gala",
    eventType: "Private Parties & Anniversaries",
    startingPrice: "Enquire for Pricing",
    guestCapacity: "Up to 750+ Guests",
    services: [
      "Full multi-level venue buyout option",
      "Sunset Roadha Villun banquet style dining",
      "Live performance stage & dancefloor",
      "Security, volunteer & valet management",
      "Customized ambient lighting design",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
            Tailored Experiences
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
            Event Packages
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light mt-3">
            CMS-ready event packages tailored for celebrations of all scales in the Maldives.
          </p>
        </div>

        {packages.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#0F2042] rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all duration-300 relative"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#38BDF8]">
                    {pkg.eventType}
                  </span>
                  <h3 className="font-serif-display text-2xl font-medium text-white mt-1 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-sm font-semibold text-[#38BDF8]">{pkg.startingPrice}</span>
                    <span className="text-xs text-slate-400 font-light">• {pkg.guestCapacity}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light">
                        <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#070F1E] hover:bg-[#38BDF8] hover:text-[#070F1E] transition-all duration-300 border border-white/10"
                >
                  Enquire About This Package
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Fallback state */
          <div className="bg-[#0F2042] rounded-3xl p-12 text-center max-w-2xl mx-auto border border-white/10 shadow-2xl space-y-4">
            <Sparkles className="w-10 h-10 text-[#38BDF8] mx-auto" />
            <h3 className="font-serif-display text-2xl text-white">Bespoke Event Customization</h3>
            <p className="text-sm text-slate-300 font-light">
              We create custom tailored packages designed around your exact guest count and dietary preferences. Contact our event planners for a personalized proposal.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#070F1E] bg-[#38BDF8]"
            >
              Request Custom Package
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
