"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle, CheckCircle2, MapPin, Loader2 } from "lucide-react";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_5s6un2o",
          template_id: "template_3exbi3l",
          user_id: "cY4HZh98ahsbuIcn1",
          template_params: {
            form_type: "Website B2B Project Enquiry",
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            message: formData.message || "No additional project notes provided.",
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Failed to send message. Please try again or WhatsApp us directly.");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMsg("Network error. Please try again or reach us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Concise Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
              START YOUR PROJECT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light leading-snug mt-1">
            LET&apos;S BRING YOUR PRINT <span className="italic text-[#C85A32] font-normal">TO LIFE.</span>
          </h2>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Sleek Contact Links */}
          <div className="lg:col-span-5 space-y-6 pt-1">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#202A3A] mb-2">
                Talk to Us Directly
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#7A8B7B] leading-relaxed font-medium">
                Our design specialists are ready to assist with custom print runs, fabric drape, and Pantone shade matching.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#202A3A]/10">
              <a
                href="https://wa.me/919079674714?text=Hello%20Indivesh,%20I%20am%20interested%20in%20custom%20textile%20printing%20%26%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#202A3A] hover:text-[#C85A32] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7A8B7B] font-bold block">
                    Instant WhatsApp
                  </span>
                  <span className="text-sm font-sans font-bold">
                    +91 90796 74714
                  </span>
                </div>
              </a>

              <a
                href="mailto:indiveshofficial@gmail.com"
                className="flex items-center gap-4 text-[#202A3A] hover:text-[#C85A32] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#202A3A] text-[#F7F4EE] flex items-center justify-center shadow-md flex-shrink-0 group-hover:bg-[#C85A32] transition-colors group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7A8B7B] font-bold block">
                    Official Email
                  </span>
                  <span className="text-sm font-sans font-bold">
                    indiveshofficial@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#202A3A]">
                <div className="w-10 h-10 rounded-full bg-[#EEE9DF] border border-[#202A3A]/15 text-[#202A3A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C85A32]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#7A8B7B] font-bold block">
                    Atelier Location
                  </span>
                  <span className="text-sm font-sans font-bold">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Clean Form (4 Fields Only) */}
          <div className="lg:col-span-7 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-2xl p-7 sm:p-9 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#202A3A] font-light">
                  Enquiry Received
                </h3>
                <p className="text-xs font-sans text-[#7A8B7B] max-w-sm mx-auto font-medium">
                  Thank you for reaching out to Indivesh. Our senior textile designer will review your requirement and connect with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-2 bg-[#202A3A] text-[#F7F4EE] px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C85A32] transition-colors rounded-lg"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {errorMsg && (
                  <div className="p-3 bg-[#C85A32]/10 border border-[#C85A32]/30 rounded-xl text-xs text-[#C85A32] font-semibold text-center">
                    {errorMsg}
                  </div>
                )}

                {/* 1. Full Name */}
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-1">
                    Your Name <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#202A3A]/15 rounded-xl p-3 text-sm text-[#202A3A] font-sans placeholder-[#202A3A]/40 focus:outline-none focus:border-[#C85A32] transition-colors"
                  />
                </div>

                {/* 2. Email Address */}
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-1">
                    Email Address <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#202A3A]/15 rounded-xl p-3 text-sm text-[#202A3A] font-sans placeholder-[#202A3A]/40 focus:outline-none focus:border-[#C85A32] transition-colors"
                  />
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-1">
                    Phone / WhatsApp Number <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90796 74714"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#202A3A]/15 rounded-xl p-3 text-sm text-[#202A3A] font-sans placeholder-[#202A3A]/40 focus:outline-none focus:border-[#C85A32] transition-colors"
                  />
                </div>

                {/* 4. Project Description */}
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-1 flex items-center justify-between">
                    <span>Project Description</span>
                    <span className="text-[#7A8B7B] font-normal lowercase text-[9px]">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your fabric requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#202A3A]/15 rounded-xl p-3 text-sm text-[#202A3A] font-sans placeholder-[#202A3A]/40 focus:outline-none focus:border-[#C85A32] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] py-3.5 text-xs uppercase tracking-[0.25em] font-bold rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-2 group disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 text-[#F7F4EE] animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry To Indivesh</span>
                      <Send className="w-3.5 h-3.5 text-[#F7F4EE] transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
