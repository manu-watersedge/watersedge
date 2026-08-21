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
import SpectralClouds from "@/components/ui/SpectralClouds";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#C5A059] selection:text-[#080D1A]">
        <Navbar />
        <HeroSection />
        
        {/* Post-hero sections sit on dynamic Spectral Clouds background overlay */}
        <div className="relative bg-[#070F1E] overflow-hidden">
          {/* React Bits Pro Spectral Clouds Component Overlay */}
          <SpectralClouds
            cloudColor="#070F1E"
            spectralColor1="#C5A059"
            spectralColor2="#38BDF8"
            speed={0.8}
            density={1.2}
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
