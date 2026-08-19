import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Share2, Globe, MessageCircle } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Venues", href: "#venues" },
  { name: "Experiences", href: "#experiences" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Packages", href: "#packages" },
  { name: "Availability", href: "#availability" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050811] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Image
              src="/logo.png"
              alt="Water's Edge Maldives Logo"
              width={200}
              height={60}
              className="h-12 sm:h-14 w-auto object-contain brightness-110 mb-2"
            />
            <p className="font-serif italic text-lg sm:text-xl text-[#C5A059]">
              Your Events Need Perfection.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              A premier waterfront destination for weddings, corporate events, conferences, and private celebrations in Hulhumale, Maldives.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-300 hover:text-[#C5A059] transition-colors py-1 uppercase tracking-wider font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Reserve Venue
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Plan your grand gala or intimate gathering today.
            </p>
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C158] hover:to-[#D4AF37] shadow-lg transition-all"
            >
              Book Your Event
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} Water's Edge Maldives. All rights reserved. Managed by HIM Management Services Pvt Ltd.</p>
          <div className="flex items-center space-x-4 text-slate-400">
            <a href="https://wa.me/9607599669" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
