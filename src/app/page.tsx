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
import BlinkingDots from "@/components/ui/BlinkingDots";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#C5A059] selection:text-[#080D1A]">
        <Navbar />
        <HeroSection />
        {/* All post-hero sections sit on a single purple-navy gradient background with BlinkingDots overlay */}
        <div
          className="relative bg-cover bg-center bg-fixed overflow-hidden"
          style={{ backgroundImage: `url('/images/section-bg.jpg')` }}
        >
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-[#070F1E]/50 pointer-events-none z-0" />
          
          {/* Blinking Dots Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <BlinkingDots
              dotSize={2}
              spacing={28}
              dotColor="#C5A059"
              glowColor="rgba(197, 160, 89, 0.5)"
              minOpacity={0.08}
              maxOpacity={0.7}
              blinkProbability={0.008}
              speed={0.03}
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
