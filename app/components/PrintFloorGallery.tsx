"use client";

import { useState, useEffect, useRef } from "react";
import { Play, X, Eye, Video, Image as ImageIcon, Sparkles } from "lucide-react";

type MediaItem = {
  id: string;
  title: string;
  category: "machinery" | "video" | "craft";
  categoryLabel: string;
  type: "photo" | "video";
  badge: string;
  src: string;
  videoUrl?: string;
  aspect: string;
};

const mediaItems: MediaItem[] = [
  {
    id: "m1",
    title: "Automatic Screen Printing Machine Production",
    category: "machinery",
    categoryLabel: "Machinery & Live Video",
    type: "video",
    badge: "#ScreenPrinting",
    src: "/images/t and.webp",
    videoUrl: "/gallery/screenprintingmachine.mp4",
    aspect: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "m2",
    title: "Sublimation Thermal Transfer Printing Run",
    category: "video",
    categoryLabel: "Live Printing Footage",
    type: "video",
    badge: "#SublimationPrint",
    src: "/images/stoles.webp",
    videoUrl: "/gallery/sublimationprinting.mp4",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "m3",
    title: "Digital Reactive Printing Machine Action",
    category: "video",
    categoryLabel: "Live Printing Footage",
    type: "video",
    badge: "#ReactivePrinting",
    src: "/images/f sare.webp",
    videoUrl: "/gallery/reactiveprintingvideo.mp4",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "m4",
    title: "Artisan Reactive Printed Fabric Detail",
    category: "craft",
    categoryLabel: "Craft & Fabric Art",
    type: "photo",
    badge: "#ReactiveArt",
    src: "/gallery/reactiveprinting.jpeg",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "m5",
    title: "High-Precision Reactive Fabric Printing",
    category: "video",
    categoryLabel: "Live Printing Footage",
    type: "video",
    badge: "#PrecisionRun",
    src: "/images/fashionn.webp",
    videoUrl: "/gallery/reactiveprinting1video.mp4",
    aspect: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "m6",
    title: "Fabric Dyeing & Color Fixation Process",
    category: "video",
    categoryLabel: "Quality & Details",
    type: "video",
    badge: "#ColorFixation",
    src: "/images/home.webp",
    videoUrl: "/gallery/reactiveprinting2.mp4",
    aspect: "col-span-1 row-span-1",
  },
];

const filterTabs = [
  { id: "all", label: "All Gallery Media" },
  { id: "video", label: "Live Printing Footage" },
  { id: "machinery", label: "Machinery & Equipment" },
  { id: "craft", label: "Craft & Fabric Art" },
];

export default function PrintFloorGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeTab === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F7F4EE] relative overflow-hidden border-t border-[#202A3A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="inline-flex items-center gap-2 mb-2.5 px-3.5 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
              INSIDE OUR FACILITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light leading-snug">
            THE PRINT <span className="italic text-[#C85A32] font-normal">FLOOR GALLERY.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C85A32] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#7A8B7B] font-sans font-medium max-w-xl mx-auto leading-relaxed">
            Authentic Factory Floor Footage, Machine Precision & Fabric Dyeing Artistry
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "150ms",
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider
                  transition-all duration-300 relative border
                  ${
                    isActive
                      ? "bg-[#202A3A] text-[#F7F4EE] border-[#D4AF37]/40 shadow-lg scale-105"
                      : "bg-[#EEE9DF] text-[#202A3A]/80 border-[#202A3A]/10 hover:bg-[#FAF8F3] hover:border-[#C85A32]/30"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Staggered Creative Media Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-[220px] sm:auto-rows-[240px] transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "250ms",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className={`
                group relative rounded-2xl overflow-hidden cursor-pointer border border-[#202A3A]/10
                bg-[#202A3A] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl
                ${item.aspect}
              `}
            >
              {/* Background Image Thumbnail (Zero Network Lag) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90"
                style={{ backgroundImage: `url('${item.src}')` }}
              />

              {/* Multi-Tone Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-85"
                style={{
                  background:
                    "linear-gradient(to top, rgba(32,42,58,0.92) 0%, rgba(32,42,58,0.35) 50%, rgba(32,42,58,0.1) 100%)",
                }}
              />

              {/* Top Corner Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-[#202A3A]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] px-2.5 py-1 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold">
                  {item.badge}
                </span>

                {item.type === "video" ? (
                  <span className="bg-[#C85A32] text-white p-1 rounded-full shadow-sm">
                    <Video className="w-3 h-3" />
                  </span>
                ) : (
                  <span className="bg-[#202A3A]/60 text-white p-1 rounded-full backdrop-blur-sm">
                    <ImageIcon className="w-3 h-3" />
                  </span>
                )}
              </div>

              {/* Video Play Button Center Overlay */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#C85A32]/90 text-white flex items-center justify-center shadow-xl border border-[#D4AF37]/40 transition-transform duration-300 group-hover:scale-115">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-[#F7F4EE] font-medium leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#FAF8F3]/15 backdrop-blur-md border border-[#FAF8F3]/30 flex items-center justify-center text-[#FAF8F3] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── High-Performance Lightbox / Video Modal (On-Demand Loading) ── */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-[#151D2A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#202A3A] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#FAF8F3]/10 bg-[#151D2A]/80">
              <div className="flex items-center gap-3">
                <span className="bg-[#C85A32] text-white px-2.5 py-0.5 rounded-full font-sans text-[10px] uppercase font-bold tracking-wider">
                  {selectedMedia.badge}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#F7F4EE] font-light">
                  {selectedMedia.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="w-9 h-9 rounded-full bg-[#FAF8F3]/10 hover:bg-[#C85A32] text-[#FAF8F3] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Content View */}
            <div className="relative min-h-[300px] sm:min-h-[420px] max-h-[75vh] flex items-center justify-center bg-[#0B121C]">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.videoUrl}
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-full max-h-[70vh] object-contain p-2"
                />
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="p-4 sm:p-5 border-t border-[#FAF8F3]/10 bg-[#151D2A]/80 flex items-center justify-between text-xs font-sans text-[#FAF8F3]/80">
              <span>Indivesh Authentic Factory Floor Footage</span>
              <span className="text-[#D4AF37] font-semibold">{selectedMedia.categoryLabel}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
