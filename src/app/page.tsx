import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VenuesSection from "@/components/sections/VenuesSection";
import GallerySection from "@/components/sections/GallerySection";
import PackagesSection from "@/components/sections/PackagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import JourneySection from "@/components/sections/JourneySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/navigation/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#C5A059] selection:text-[#080D1A]">
        {/* Fixed Video Background (Desktop/Tablet) + Lightweight Ocean Gradient (Mobile) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Desktop/Tablet: Live Video Background */}
          <div className="hidden md:block w-full h-full relative">
            <video
              src="/vdo-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                transform: "translate3d(0,0,0)",
                WebkitTransform: "translate3d(0,0,0)",
              }}
              className="w-[120%] h-full object-cover object-left"
            />
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-0 bg-[#070F1E]/70" />
          </div>

          {/* Mobile: Ultra-lightweight 60fps Dark Ocean Gradient Background */}
          <div className="block md:hidden w-full h-full bg-gradient-to-b from-[#070F1E] via-[#09152B] to-[#070F1E]" />
        </div>

        <Navbar />
        <HeroSection />

        {/* Post-hero sections sit above the fixed video background */}
        <div className="relative z-10">
          <AboutSection />
          <VenuesSection />
          <GallerySection />
          <PackagesSection />
          <TestimonialsSection />
          <JourneySection />
          <ContactSection />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </SmoothScrollProvider>
  );
}
