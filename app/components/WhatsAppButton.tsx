"use client";

export default function WhatsAppButton() {
  const phone = "919079674714";
  const message = encodeURIComponent(
    "Hello Indivesh, I am interested in custom textile printing & design for my brand. Let's discuss!"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative flex items-center justify-center
          w-13 h-13 sm:w-15 sm:h-15
          bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full
          shadow-[0_10px_30px_rgba(37,211,102,0.45)]
          hover:shadow-[0_16px_40px_rgba(37,211,102,0.6)]
          border border-white/25
          transition-all duration-300 hover:scale-110 active:scale-95
        "
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-30" />

        {/* Clean, Pristine Vector WhatsApp Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2A13.93 13.93 0 0 0 4.09 23.12L2 30l7.08-1.99A13.93 13.93 0 1 0 16 2zm7.9 19.38c-.33.93-1.63 1.77-2.67 1.98-.71.14-1.64.25-4.75-1.04-3.98-1.65-6.54-5.7-6.74-5.97-.2-.27-1.63-2.17-1.63-4.14 0-1.97 1.03-2.94 1.4-3.34.37-.4.8-.5 1.07-.5.27 0 .53 0 .76.01.24.01.57-.09.89.68.33.79 1.13 2.76 1.23 2.96.1.2.17.43.03.7-.13.27-.2.43-.4.67-.2.23-.42.52-.6.7-.2.2-.41.42-.18.82.23.4 1.04 1.72 2.23 2.78 1.53 1.37 2.82 1.79 3.22 1.99.4.2.63.17.87-.1.23-.27.99-1.16 1.26-1.56.27-.4.53-.33.9-.19.37.13 2.33 1.1 2.73 1.3.4.2.67.3.77.47.1.17.1 1.01-.23 1.94z" />
        </svg>
      </a>
    </div>
  );
}
