"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, Church, Building2, PartyPopper, HeartHandshake } from "lucide-react";
import Image from "next/image";

export interface ScrollStackCard {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  icon: React.ElementType;
  bgUrl: string;
}

const defaultCards: ScrollStackCard[] = [
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

interface CardProps {
  card: ScrollStackCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function CardItem({ card, index, total, progress }: CardProps) {
  const Icon = card.icon;

  // React Bits Pro Scroll Stack:
  // Calculate when this card gets covered by the NEXT card coming up
  const start = index / total;
  const end = (index + 1) / total;

  // 1. SCALE: As scroll moves past card, it shrinks down into stack (1 -> 0.88)
  const scale = useTransform(progress, [start, end], [1, 1 - (total - index) * 0.04]);

  // 2. TURN (rotateX): 3D perspective rotation tilt back (-10deg)
  const rotateX = useTransform(progress, [start, end], [0, -10]);

  // 3. DISSOLVE: Fades opacity slightly (1 -> 0.45)
  const opacity = useTransform(progress, [start, end], [1, index === total - 1 ? 1 : 0.45]);

  // React Bits Pro: Cards pin at sticky top-20 (80px) and occupy 100vh height
  return (
    <div
      style={{
        top: "80px",
        zIndex: index + 10,
      }}
      className="sticky h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-12"
    >
      <motion.div
        style={{
          scale,
          rotateX,
          opacity,
          transformPerspective: 1000,
          transformOrigin: "top center",
        }}
        className="relative w-full max-w-6xl h-[75vh] min-h-[480px] max-h-[750px] rounded-3xl overflow-hidden bg-[#0A1224] border border-[#C5A059]/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row transition-shadow duration-300 hover:shadow-[0_40px_100px_rgba(197,160,89,0.3)]"
      >
        {/* Left Visual Area */}
        <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full overflow-hidden">
          <Image
            src={card.bgUrl}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 1400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A1224] via-[#0A1224]/30 to-transparent z-10" />
          <div className="absolute top-6 left-6 z-20 bg-[#080D1A]/90 border border-[#C5A059]/50 text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
            0{index + 1} / 0{total}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="w-full lg:w-2/5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-20 bg-gradient-to-br from-[#0A1224] to-[#0D182F]">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#C5A059]">
              <div className="p-3.5 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                {card.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg font-medium text-[#C5A059] italic">
              &quot;{card.subtitle}&quot;
            </p>

            {card.description && (
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {card.description}
              </p>
            )}
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">
              Waters Edge Experience
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#d4b068] text-[#080D1A] text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-xl"
            >
              Reserve Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollStack({ cards = defaultCards }: { cards?: ScrollStackCard[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track container scroll progress from start to end
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // Outer scroll track height set to cards.length * 100vh so cards stack smoothly on top of each other!
    <div
      ref={containerRef}
      style={{ height: `${cards.length * 100}vh` }}
      className="relative w-full pb-32"
    >
      <div className="relative w-full">
        {cards.map((card, i) => (
          <CardItem
            key={card.id}
            card={card}
            index={i}
            total={cards.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
