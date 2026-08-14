"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-[#0B132B] p-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-serif font-bold text-[#C85A32]">Something went wrong!</h2>
          <p className="text-sm text-[#0B132B]/70">An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-[#0B132B] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#C85A32] transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
