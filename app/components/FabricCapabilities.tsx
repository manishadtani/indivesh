"use client";

import { useState } from "react";
import { Sliders, Shield, Sparkles } from "lucide-react";

export default function FabricCapabilities() {
  const fabrics = [
    {
      name: "Cotton Percale & Satin",
      gsm: "110 - 240 GSM",
      technique: "Direct Reactive & Pigment",
      bestFor: "Bedsheets, Sarees, Kurtis, Apparel",
      feel: "Crisp, Breathable, Soft Natural Drape",
    },
    {
      name: "Pure Silk & Chiffon",
      gsm: "40 - 120 GSM",
      technique: "Acid & Reactive Digital",
      bestFor: "Luxury Sarees, Scarves, Stoles, Couture",
      feel: "Ultra-lustrous, Fluid Drape, Sheer Elegance",
    },
    {
      name: "Viscose & Rayon",
      gsm: "100 - 180 GSM",
      technique: "Reactive Digital Printing",
      bestFor: "Dresses, Co-ords, Skirts, Tops",
      feel: "Silky Soft, Heavy Flow, Cool Touch",
    },
    {
      name: "Natural Linen",
      gsm: "140 - 320 GSM",
      technique: "Pigment & Reactive",
      bestFor: "Curtains, Cushion Covers, Table Linen",
      feel: "Textured Slub, Earthy, Durable Structure",
    },
    {
      name: "Modal & Tencel",
      gsm: "120 - 200 GSM",
      technique: "High-Definition Reactive",
      bestFor: "Luxury Loungewear, Scarves, Shirts",
      feel: "Velvety Smooth, Eco-lux, Wrinkle-resistant",
    },
    {
      name: "Polyester & Crepe",
      gsm: "80 - 250 GSM",
      technique: "Digital Heat Sublimation",
      bestFor: "Flags, Uniforms, Activewear, Upholstery",
      feel: "Vibrant Color Saturation, Fade Proof",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#EEE9DF] border-t border-[#202A3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#C85A32] mb-3">
            TEXTILE SCIENCE & SPECS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light">
            FABRIC & PRINTING <span className="font-normal italic text-[#C85A32]">CAPABILITIES.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C85A32] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#7A8B7B] font-sans font-medium">
            We support an extensive range of natural, synthetic, and blended textiles with tailored ink chemistry.
          </p>
        </div>

        {/* Fabric Swatch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fabrics.map((fab) => (
            <div
              key={fab.name}
              className="bg-[#FAF8F3] p-8 border border-[#202A3A]/10 hover:border-[#C85A32] transition-colors duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#202A3A]/10 pb-4 mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-[#202A3A]">
                    {fab.name}
                  </h3>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#C85A32] font-bold bg-[#EEE9DF] px-2.5 py-1">
                    {fab.gsm}
                  </span>
                </div>

                <div className="space-y-3 text-xs font-sans">
                  <div>
                    <span className="text-[#7A8B7B] uppercase tracking-wider block font-semibold">Print Technology:</span>
                    <span className="text-[#202A3A] font-semibold">{fab.technique}</span>
                  </div>
                  <div>
                    <span className="text-[#7A8B7B] uppercase tracking-wider block font-semibold">Ideal Applications:</span>
                    <span className="text-[#202A3A] font-semibold">{fab.bestFor}</span>
                  </div>
                  <div>
                    <span className="text-[#7A8B7B] uppercase tracking-wider block font-semibold">Hand Feel & Finish:</span>
                    <span className="text-[#202A3A] font-semibold">{fab.feel}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#202A3A]/10 flex items-center justify-between text-[11px] text-[#7A8B7B] font-semibold">
                <span>Pantone Matching Supported</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
