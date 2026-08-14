"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,fr,es,de,it,ja,ar,zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="group relative flex items-center gap-2 bg-[#EEE9DF] hover:bg-[#FAF8F3] border border-[#202A3A]/10 hover:border-[#D4AF37]/60 px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow">
      {/* Sleek Terracotta Icon Ring Badge */}
      <div className="w-6 h-6 rounded-full bg-[#C85A32] text-[#F7F4EE] flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          className="w-3.5 h-3.5 fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </div>

      <div id="google_translate_element" className="translate-wrapper font-sans text-xs font-semibold text-[#202A3A]" />
    </div>
  );
}
