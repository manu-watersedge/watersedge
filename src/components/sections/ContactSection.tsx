"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Map } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                Get in Touch
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
                Visit & Contact Us
              </h2>
            </div>

            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Venue Location</h4>
                  <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                    Water's Edge Commercial Building (B3-4)<br />
                    Javaahiru Hingun, Plot 10899<br />
                    Hulhumale, Maldives
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Phone Contact</h4>
                    <a href="tel:+9607599669" className="text-xs text-slate-300 font-light hover:text-[#C5A059] mt-1 block">
                      +960 759 9669
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+9607599669"
                  className="px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#080D1A] border border-white/20 flex items-center gap-2 transition-colors shrink-0 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Desk
                </a>
              </div>

              {/* WhatsApp Chat */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">WhatsApp Support</h4>
                    <a href="https://wa.me/9607599669" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 font-light hover:text-emerald-400 mt-1 block">
                      +960 759 9669 (Instant Chat)
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/9607599669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 transition-colors shrink-0 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Saturday – Thursday: 8:30 AM – 5:30 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Interactive Map Frame / Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/15 aspect-[4/3] shadow-2xl flex flex-col justify-between p-8">
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                  Hulhumale Waterfront
                </span>
                <a
                  href="https://maps.google.com/?q=Hulhumale+Maldives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Map Placeholder Frame */}
              <div className="my-auto text-center space-y-3">
                <Map className="w-12 h-12 text-[#C5A059] mx-auto animate-pulse" />
                <h3 className="font-serif-display text-xl text-white">Google Maps Integration</h3>
                <p className="text-xs text-slate-400 font-mono">
                  [Hulhumale Plot 10899 • Water's Edge Commercial Building B3-4]
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Hulhumale+Maldives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white text-center border border-white/10 transition-colors z-10"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
