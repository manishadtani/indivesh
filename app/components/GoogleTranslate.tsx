"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi (हिंदी)" },
  { code: "fr", label: "French (Français)" },
  { code: "es", label: "Spanish (Español)" },
  { code: "de", label: "German (Deutsch)" },
  { code: "it", label: "Italian (Italiano)" },
  { code: "ja", label: "Japanese (日本語)" },
  { code: "ar", label: "Arabic (العربية)" },
  { code: "zh-CN", label: "Chinese (中文)" },
];

export default function GoogleTranslate() {
  const [selectedLang, setSelectedLang] = useState("en");

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
          "hidden_google_translate_element"
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

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);

    // Trigger Google Translate engine
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative inline-flex items-center gap-2 bg-[#EEE9DF] hover:bg-[#FAF8F3] border border-[#202A3A]/15 hover:border-[#D4AF37]/60 px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm">
      
      {/* Hidden Native Google Translate Container */}
      <div id="hidden_google_translate_element" className="hidden absolute opacity-0 pointer-events-none" />

      {/* Terracotta Icon Ring Badge */}
      <div className="w-5 h-5 rounded-full bg-[#C85A32] text-[#F7F4EE] flex items-center justify-center flex-shrink-0 shadow-sm">
        <svg
          className="w-3 h-3 fill-none stroke-current"
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

      {/* Custom Touch-Optimized Luxury Dropdown */}
      <select
        value={selectedLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent text-xs font-sans font-bold text-[#202A3A] outline-none cursor-pointer pr-1 py-0.5 appearance-none focus:outline-none"
        aria-label="Select Language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-[#FAF8F3] text-[#202A3A] font-semibold text-xs">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
