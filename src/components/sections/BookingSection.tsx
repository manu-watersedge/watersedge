"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    preferredDate: "",
    secondaryDate: "",
    preferredTime: "Evening",
    attendees: "",
    venue: "Rooftop Venue (750+ Guests)",
    catering: "Yes",
    menuType: "International Buffet",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
                Start Planning
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2 leading-tight">
                Let's Make Your Event <span className="italic text-[#C5A059]">Extraordinary</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light mt-4 leading-relaxed">
                Tell us about your event and our dedicated event team will help you plan the perfect experience at Water’s Edge Maldives.
              </p>
            </div>

            {/* Quick Contact CTAs */}
            <div className="space-y-4 pt-4">
              <a
                href="https://wa.me/9607599669"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Direct WhatsApp</div>
                    <div className="text-sm font-medium">+960 759 9669</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 uppercase">Chat Now</span>
              </a>

              <a
                href="tel:+9607599669"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#38BDF8]" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Call Event Desk</div>
                    <div className="text-sm font-medium">+960 759 9669</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#38BDF8] uppercase">Call Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Full Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0F2042] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-[#38BDF8] mx-auto" />
                  <h3 className="font-serif-display text-2xl text-white">Booking Request Submitted</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto font-light">
                    Thank you! Our event manager will review your dates and requirement list, and contact you via phone/email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#38BDF8] text-[#070F1E]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hassan Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+960 7XX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070F1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      >
                        <option value="Wedding">Wedding Celebration</option>
                        <option value="Corporate">Corporate Conference / Meeting</option>
                        <option value="Roadha Villun">Roadha Villun Banquet</option>
                        <option value="Private Celebration">Birthday / Private Party</option>
                        <option value="Other">Other Custom Function</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Secondary Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.secondaryDate}
                        onChange={(e) => setFormData({ ...formData, secondaryDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070F1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      >
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Sunset / Evening">Sunset / Evening</option>
                        <option value="Full Day">Full Day</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Attendees Count *
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 250"
                        required
                        value={formData.attendees}
                        onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Event Venue
                      </label>
                      <select
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070F1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      >
                        <option value="Rooftop Venue (750+ Guests)">Rooftop Venue</option>
                        <option value="Conference Hall (Up to 100 Guests)">Conference Hall</option>
                        <option value="Full Building Buyout">Full Buyout</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Catering Required?
                      </label>
                      <select
                        value={formData.catering}
                        onChange={(e) => setFormData({ ...formData, catering: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070F1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                      >
                        <option value="Yes">Yes - Full Catering Needed</option>
                        <option value="Beverages Only">Beverages & Coffee Only</option>
                        <option value="No">No - Venue Rental Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Menu Type Preference
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maldivian Buffet, Seafood, BBQ"
                        value={formData.menuType}
                        onChange={(e) => setFormData({ ...formData, menuType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Comments / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share decor theme, audio requirements, or special details..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#070F1E] bg-[#C5A059] hover:bg-[#D4AF37] transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
