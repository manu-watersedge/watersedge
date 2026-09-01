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
import VideoBg from "@/components/ui/VideoBg";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#C5A059] selection:text-[#080D1A]">
        <Navbar />
        <HeroSection />

        {/* Post-hero sections — canvas video covers full height, watermark cropped */}
        <div className="relative overflow-hidden">

          {/* Canvas-rendered video: crops right 15% (watermark) without any CSS zoom */}
          <VideoBg cropRight={0.15} />

          {/* Overlay — keeps text readable */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.38)", zIndex: 1 }}
          />

          <div className="relative z-10">
            <AboutSection />
            <VenuesSection />
            <GallerySection />
            <PackagesSection />
            <TestimonialsSection />
            <JourneySection />
            <ContactSection />
          </div>
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </SmoothScrollProvider>
  );
}
