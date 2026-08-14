"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Eye, Sparkles } from "lucide-react";

export default function OurWorkGallery() {
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    category: string;
    fabric: string;
    src: string;
    details: string;
  }>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Hero Royal Heritage Print Showcase",
      category: "Fashion & Sarees",
      fabric: "Pure Silk & Chiffon",
      src: "/images/hero-img.webp",
      details: "Intricate traditional motif repeat printing with high-vibrancy indigo and terracotta dyes.",
    },
    {
      id: 2,
      title: "Ethnic Couture Saree Motif",
      category: "Fashion Textiles",
      fabric: "Chanderi Silk Blend",
      src: "/images/hero-img.webp",
      details: "Precision placement print designed for high-end designer saree pallus.",
    },
    {
      id: 3,
      title: "Botanical Living Furnishing",
      category: "Home & Living",
      fabric: "Heavyweight Linen",
      src: "/images/hero-img.webp",
      details: "Vibrant botanical printed drapes and cushion fabrics engineered for soft furnishings.",
    },
    {
      id: 4,
      title: "Designer Geometric Repeat Pattern",
      category: "Patterns",
      fabric: "Combed Cotton Satin",
      src: "/images/hero-img.webp",
      details: "Seamless geometric repeat pattern with crisp lines for contemporary apparel.",
    },
    {
      id: 5,
      title: "Contemporary Indo-Western Co-ords",
      category: "Fashion Textiles",
      fabric: "Modal Viscose",
      src: "/images/hero-img.webp",
      details: "Soft-drape digital reactive print for luxury womenswear collections.",
    },
    {
      id: 6,
      title: "Luxury Bedding Collection",
      category: "Home & Living",
      fabric: "100% Cotton Percale",
      src: "/images/hero-img.webp",
      details: "Comfortable skin-friendly bedsheet and pillow cover set with fade-resistant pigments.",
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#EEE9DF] border-t border-[#202A3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#C85A32] mb-3">
            PORTFOLIO & GALLERY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light">
            PRINTS THAT <span className="font-normal italic text-[#C85A32]">SPEAK FOR THEMSELVES.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C85A32] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#7A8B7B] font-sans font-medium">
            Explore our crafted textile collection across ethnic sarees, contemporary fashion apparel, and luxury home furnishings.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-[#FAF8F3] border border-[#202A3A]/10 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EE]">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-[#202A3A]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <span className="inline-flex items-center space-x-1.5 bg-[#C85A32] text-[#F7F4EE] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Print</span>
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-[#F7F4EE]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF8F3]/80 font-sans">
                      {item.fabric}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="p-5 flex items-center justify-between bg-[#FAF8F3] border-t border-[#202A3A]/5">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#C85A32]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#202A3A]">
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F7F4EE] group-hover:bg-[#C85A32] text-[#202A3A] group-hover:text-[#F7F4EE] flex items-center justify-center transition-colors duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-[#151D2A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF8F3] border border-[#C85A32]/40 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#202A3A]/10 bg-[#FAF8F3]">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#202A3A]">
                    {selectedImage.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-[#202A3A] hover:text-[#C85A32] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-8 bg-[#202A3A] relative aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={900}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#EEE9DF]">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#202A3A] mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs font-sans uppercase tracking-widest text-[#C85A32] font-bold mb-4">
                      Fabric: {selectedImage.fabric}
                    </p>
                    <p className="text-sm font-sans text-[#202A3A]/80 leading-relaxed font-normal">
                      {selectedImage.details}
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-[#202A3A]/10 pt-4">
                    <p className="text-[11px] uppercase tracking-wider text-[#7A8B7B] font-semibold">
                      Need a similar print developed for your brand?
                    </p>
                    <a
                      href="#contact"
                      onClick={() => setSelectedImage(null)}
                      className="w-full inline-flex items-center justify-center bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] py-3 text-xs uppercase tracking-[0.2em] font-bold transition-colors"
                    >
                      Enquire For Custom Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
