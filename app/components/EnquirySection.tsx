"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle, CheckCircle2, FileUp } from "lucide-react";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "Fashion Apparel Printing",
    application: "Sarees & Ethnic Wear",
    fabric: "Cotton",
    quantity: "100 - 500 Meters",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing Banner */}
        <div className="bg-[#202A3A] text-[#F7F4EE] p-8 sm:p-12 lg:p-16 mb-16 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C85A32]/20 rounded-full blur-3xl" />
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#D4AF37] mb-3">
            START YOUR PROJECT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
            READY TO BRING YOUR NEXT <br />
            <span className="font-normal italic text-[#C85A32]">PRINT TO LIFE?</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF8F3]/80 max-w-xl mx-auto font-normal">
            Tell us what you&apos;re imagining. Let&apos;s turn it into beautifully printed fabric.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Direct Contact Channels */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-[#202A3A] mb-3">
                Talk to Us Directly
              </h3>
              <p className="text-sm font-sans text-[#7A8B7B] leading-relaxed font-medium">
                Whether you have completed vector artwork or a preliminary print concept, our B2B textile specialists are here to assist.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/?text=Hello%20Indivesh,%20I%20am%20interested%20in%20custom%20textile%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-[#25D366]/10 border border-[#25D366]/30 p-4 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A8B7B] font-bold block">
                    Instant WhatsApp Enquiry
                  </span>
                  <span className="text-sm font-sans font-bold text-[#202A3A] group-hover:text-[#C85A32]">
                    Chat with Indivesh
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-4 bg-[#EEE9DF] p-4 border border-[#202A3A]/10">
                <div className="w-10 h-10 rounded-full bg-[#202A3A] text-[#F7F4EE] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A8B7B] font-bold block">
                    Email Consultation
                  </span>
                  <span className="text-sm font-sans font-bold text-[#202A3A]">
                    contact@indivesh.com
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#EEE9DF] p-4 border border-[#202A3A]/10">
                <div className="w-10 h-10 rounded-full bg-[#202A3A] text-[#F7F4EE] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A8B7B] font-bold block">
                    Phone Support
                  </span>
                  <span className="text-sm font-sans font-bold text-[#202A3A]">
                    +91 (Textile Desk)
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#EEE9DF] border-l-2 border-[#C85A32]">
              <p className="text-xs uppercase tracking-widest font-bold text-[#C85A32] mb-1">
                Design House Confidentiality
              </p>
              <p className="text-xs font-sans text-[#7A8B7B] leading-relaxed font-semibold">
                All client pattern designs, artwork files, and proprietary collection prints are strictly protected under NDA agreement.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8 bg-[#EEE9DF] border border-[#202A3A]/10 p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl text-[#202A3A] font-semibold">
                  Enquiry Received
                </h3>
                <p className="text-sm font-sans text-[#7A8B7B] max-w-md mx-auto font-medium">
                  Thank you for reaching out to Indivesh. Our senior textile designer will review your requirement and connect with you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#202A3A] text-[#F7F4EE] px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C85A32] transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-[#202A3A] border-b border-[#202A3A]/10 pb-3">
                  Project Details Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Studio Ananya"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Application Category
                    </label>
                    <select
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    >
                      <option>Sarees & Ethnic Apparel</option>
                      <option>Dresses & Western Wear</option>
                      <option>Bedsheets & Home Linen</option>
                      <option>Curtains & Cushion Fabrics</option>
                      <option>Accessories & Bags</option>
                      <option>Custom Designer Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                      Preferred Fabric Type
                    </label>
                    <select
                      value={formData.fabric}
                      onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                    >
                      <option>100% Cotton</option>
                      <option>Pure Silk / Silk Blend</option>
                      <option>Viscose / Rayon</option>
                      <option>Linen Blend</option>
                      <option>Modal / Tencel</option>
                      <option>Polyester / Crepe</option>
                      <option>Need Advice from Indivesh</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider font-bold text-[#202A3A] mb-2">
                    Project Overview & Specifics
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your design vision, repeat sizes, target launch date, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#202A3A]/20 p-3 text-sm text-[#202A3A] font-sans focus:outline-none focus:border-[#C85A32]"
                  />
                </div>

                {/* File Reference Sim */}
                <div className="border border-dashed border-[#202A3A]/30 p-4 bg-[#FAF8F3] text-center cursor-pointer hover:border-[#C85A32] transition-colors">
                  <FileUp className="w-6 h-6 text-[#C85A32] mx-auto mb-1" />
                  <span className="text-xs font-sans font-semibold text-[#202A3A] block">
                    Attach Design Artwork / Moodboard Reference (Optional)
                  </span>
                  <span className="text-[10px] font-sans text-[#7A8B7B] block">
                    PNG, JPG, PDF, PSD, AI up to 25MB
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] py-4 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Send Enquiry To Indivesh</span>
                  <Send className="w-4 h-4 text-[#F7F4EE]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
