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
      <main className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#C5A059] selection:text-[#080D1A]">
        <Navbar />
        <HeroSection />

        {/* Post-hero sections with hardware-accelerated fixed video background */}
        <div className="relative">
          {/* Fixed video background — GPU accelerated 60fps on mobile & desktop, no tiling seams */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <video
              src="/vdo-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-[115%] h-full object-cover object-left"
            />
            {/* Seamless dark overlay for optimal text contrast */}
            <div
              className="absolute inset-0 bg-[#070F1E]/65 backdrop-blur-[1px]"
            />
          </div>

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
