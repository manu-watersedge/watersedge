"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

const venuesList = [
  "Rooftop Waterfront Venue (750+ Guests)",
  "Conference & Function Hall (Up to 100 Guests)",
  "Full Building Buyout (Multi-level)",
];

const timeSlots = [
  "Morning Session (08:30 AM - 12:30 PM)",
  "Afternoon Session (01:30 PM - 05:30 PM)",
  "Sunset & Evening Reception (06:00 PM - 11:00 PM)",
  "Full Day Exclusive Access (08:30 AM - 11:00 PM)",
];

export default function AvailabilitySection() {
  const [selectedVenue, setSelectedVenue] = useState(venuesList[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[2]);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <section id="availability" className="relative py-24 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
            Date & Slot Reservation
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-white mt-2">
            Find Your Perfect Date
          </h2>
          <p className="text-slate-400 text-sm font-light mt-3">
            Check real-time availability for our rooftop space or conference hall.
          </p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          <form onSubmit={handleCheck} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Select Venue */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                  Select Venue Space
                </label>
                <select
                  value={selectedVenue}
                  onChange={(e) => setSelectedVenue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                >
                  {venuesList.map((v) => (
                    <option key={v} value={v} className="bg-slate-900 text-white">
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Preferred Date */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                />
              </div>

            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-3">
                Available Time Slots
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                      selectedSlot === slot
                        ? "bg-[#C5A059]/20 border-[#C5A059] text-white"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span>{slot}</span>
                    {selectedSlot === slot && <CheckCircle className="w-4 h-4 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
            >
              Verify Availability & Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-center text-xs text-slate-200"
            >
              <p className="font-semibold text-[#D4AF37] mb-1">✓ Space Available for Selected Slot!</p>
              Proceed to the booking request form below to lock in your date.
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
