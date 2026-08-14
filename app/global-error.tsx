"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#F7F4EE] text-[#202A3A] p-6 font-sans">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-serif text-[#C85A32]">Something went wrong</h2>
          <p className="text-xs text-[#202A3A]/70">An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-[#202A3A] text-[#F7F4EE] text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-[#C85A32] transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
