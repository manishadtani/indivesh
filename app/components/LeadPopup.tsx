"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    // Show popup on initial page mount if not dismissed in session
    const hasSeenPopup = sessionStorage.getItem("indivesh_lead_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("indivesh_lead_popup_seen", "true");
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fadeIn">
      {/* Popup Card with Image Background Only (No Page Blur & No Top Line) */}
      <div
        className="relative w-full max-w-md text-[#F7F4EE] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/f sare.webp')" }}
      >
        {/* Soft Linear Gradient Overlay so inputs and text stay 100% readable */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(21,29,42,0.82) 0%, rgba(21,29,42,0.88) 100%)",
          }}
        />

        {/* Close X Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#FAF8F3]/15 hover:bg-[#C85A32] text-[#FAF8F3] flex items-center justify-center transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Popup Content */}
        <div className="relative z-10 p-7 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F4EE] font-light">
                Welcome to Indivesh
              </h3>
              <p className="text-xs font-sans text-[#FAF8F3]/80 leading-relaxed font-normal">
                Thank you! You now have full access to our B2B collection &amp; design studio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase font-bold text-[#D4AF37] block mb-1">
                  EXCLUSIVE B2B ATELIER
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F4EE] leading-snug">
                  WELCOME TO <span className="italic text-[#C85A32] font-normal">INDIVESH.</span>
                </h3>

                <p className="font-sans text-xs text-[#FAF8F3]/85 leading-relaxed font-normal mt-1">
                  Access our high-definition textile print catalog &amp; design consultation.
                </p>
              </div>

              {/* Input 1: Name */}
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#D4AF37] mb-1">
                  Your Full Name <span className="text-[#C85A32]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#151D2A]/80 border border-[#FAF8F3]/25 rounded-xl p-3 text-xs text-[#F7F4EE] font-sans placeholder-[#FAF8F3]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* Input 2: Email */}
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#D4AF37] mb-1">
                  Email Address <span className="text-[#C85A32]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#151D2A]/80 border border-[#FAF8F3]/25 rounded-xl p-3 text-xs text-[#F7F4EE] font-sans placeholder-[#FAF8F3]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C85A32] hover:bg-[#D4AF37] text-[#F7F4EE] hover:text-[#202A3A] py-3.5 text-xs uppercase tracking-[0.22em] font-bold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-3 group"
              >
                <span>Access Studio Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Skip Option Below Button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="font-sans text-[11px] text-[#FAF8F3]/60 hover:text-[#FAF8F3] transition-colors underline underline-offset-4 font-normal"
                >
                  Skip for now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
