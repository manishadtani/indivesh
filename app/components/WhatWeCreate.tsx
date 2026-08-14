"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhatWeCreate() {
  const [activeTab, setActiveTab] = useState("fashion");

  const categories = [
    {
      id: "fashion",
      name: "Fashion & Apparel",
      tagline: "Couture, Ethnic & Everyday Wear",
      description:
        "High-definition textile printing for fashion designers, luxury labels, and ethnic wear houses. Engineered for perfect drape and rich color fastness.",
      items: [
        "Sarees & Dupattas",
        "Dresses & Skirts",
        "Kurtis & Co-ords",
        "Shirts & T-Shirts",
        "Scarves & Stoles",
        "Designer Suits",
      ],
      highlights: "Direct Reactive, Digital Sublimation & Pigment Printing",
    },
    {
      id: "home",
      name: "Home & Living",
      tagline: "Interior Fabrics & Soft Furnishings",
      description:
        "Transforming living spaces with custom printed bed linens, heavy-drape curtains, sofa upholstery, and luxury cushion covers.",
      items: [
        "Bedsheets & Pillow Covers",
        "Curtains & Drapes",
        "Cushion & Sofa Covers",
        "Table Linen & Runners",
        "Chair Cover Textiles",
        "Home Furnishing Fabrics",
      ],
      highlights: "Light-fast, Wash-durable Soft Textiles",
    },
    {
      id: "accessories",
      name: "Accessories",
      tagline: "Lifestyle & Fabric Accents",
      description:
        "Vibrant prints on canvas, cotton, and silk blends for fashion tote bags, headscarves, and customized fabric merchandise.",
      items: [
        "Printed Fabric Bags",
        "Eco-Totes",
        "Silk & Satin Stoles",
        "Pocket Squares",
        "Fabric Accessories",
        "Brand Merch Textiles",
      ],
      highlights: "Reinforced Color Vibrancy & Custom Trim Printing",
    },
    {
      id: "custom",
      name: "Custom & Designer",
      tagline: "Bespoke Collection Printing",
      description:
        "Tailored print production for fashion houses, textile studios, and independent artist collections requiring exact color matching.",
      items: [
        "Repeat Pattern Printing",
        "Placement Prints",
        "Brand Collection Batching",
        "Custom Color Matching",
        "Bespoke Artwork Prints",
        "Prototype Print Runs",
      ],
      highlights: "100% Pantone Color Precision & Fine Line Detail",
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="applications" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#C85A32] mb-3">
              WHAT WE CREATE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B132B] font-light">
              PRINTED FOR EVERY <span className="font-normal italic text-[#C85A32]">EXPRESSION.</span>
            </h2>
          </div>
          <p className="text-sm text-[#8A7E72] max-w-md mt-4 md:mt-0 font-sans">
            From intricate ethnic wear to luxury home furnishings and custom designer collections.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-[#0B132B]/10 pb-4 mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-none whitespace-nowrap ${
                activeTab === cat.id
                  ? "bg-[#0B132B] text-white shadow-md"
                  : "bg-[#F3EDE2] text-[#0B132B]/70 hover:bg-[#C85A32]/10 hover:text-[#0B132B]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Showcase Card */}
        <div className="bg-[#F3EDE2] border border-[#0B132B]/10 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#C85A32] font-bold">
                  {currentCategory.tagline}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B132B] mt-1">
                  {currentCategory.name}
                </h3>
              </div>

              <p className="font-sans text-base text-[#0B132B]/80 leading-relaxed">
                {currentCategory.description}
              </p>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0B132B] mb-4">
                  Key Applications & Products:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCategory.items.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                      <span className="text-sm font-sans text-[#0B132B] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#0B132B]/10 gap-4">
                <div className="text-xs text-[#8A7E72] font-sans">
                  <strong className="text-[#0B132B]">Tech Standard:</strong> {currentCategory.highlights}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C85A32] hover:text-[#0B132B] transition-colors"
                >
                  <span>Request Product Samples</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5 bg-[#0B132B] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[300px] border-l-4 border-[#C85A32]">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                  B2B CAPABILITY
                </span>
                <h4 className="font-serif text-2xl font-light leading-snug">
                  "Engineered to maintain original artwork fidelity across short & volume runs."
                </h4>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs font-sans text-white/70">
                <span>Natural & Synthetic Fabrics</span>
                <span className="text-[#D4AF37] font-semibold">100% Quality Checked</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
