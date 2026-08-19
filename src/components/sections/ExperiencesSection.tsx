"use client";

import ScrollStack, { ScrollStackCard } from "@/components/ui/ScrollStack";
import { Church, Building2, PartyPopper, HeartHandshake } from "lucide-react";

const eventCards: ScrollStackCard[] = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Elegant celebrations, tailored to your love story.",
    description: "Exchange vows against breathtaking Maldivian ocean backdrops with bespoke floral setups, gourmet dining, and private beach receptions.",
    icon: Church,
    bgUrl: "/images/photos/Wedding_Event_Setup/wedding (1).webp",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    subtitle: "Professional events with a premium touch.",
    description: "Impress partners and reward teams with state-of-the-art audiovisual facilities, executive retreats, and oceanview gala dinners.",
    icon: Building2,
    bgUrl: "/images/photos/CorporateEvents/RoofTop (1)JPG.webp",
  },
  {
    id: "social-events",
    title: "Social Events",
    subtitle: "Birthdays, anniversaries & private parties.",
    description: "Host vibrant celebrations filled with live DJ performances, tropical cocktail bars, and dazzling fireworks over the lagoon.",
    icon: PartyPopper,
    bgUrl: "/images/photos/Stage-Decorations/9W5A3413.webp",
  },
  {
    id: "private-celebrations",
    title: "Private Celebrations",
    subtitle: "Intimate gatherings, unforgettable moments.",
    description: "Curate exclusive family reunions or romantic milestone dinners under starry island skies with dedicated personal butler service.",
    icon: HeartHandshake,
    bgUrl: "/images/photos/Venu_Exterior_Interior/RoofTop (1).webp",
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="relative text-white pt-16 pb-0">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-3 relative z-20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          OUR EVENTS
        </span>
        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
          Events Crafted To Perfection
        </h2>
        <p className="text-sm text-slate-300 font-light max-w-lg mx-auto">
          Scroll down to experience our luxury event offerings.
        </p>
      </div>

      {/* Pinned 3D Stacking Cards Component (React Bits Pro Scroll Stack) */}
      <div className="relative w-full">
        <ScrollStack cards={eventCards} />
      </div>
    </section>
  );
}
