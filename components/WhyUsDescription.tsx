import React from "react";

export default function WhyUsDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="relative overflow-hidden py-16 px-6">
      {/* Ambient glow behind the quote */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-150 h-75 rounded-full bg-cyan-400/6 blur-[100px]" />
      </div>

      {/* Quote mark — decorative */}
      <div
        className="absolute top-6 right-10 text-cyan-400/8 font-serif select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(8rem, 20vw, 14rem)" }}
        aria-hidden>
        {'"'}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top gradient line */}
        <div className="w-20 h-0.5 mx-auto mb-10 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />

        <p
          className="font-bold text-[#C7CBEF] leading-[1.65] [text-shadow:0_0_30px_rgba(199,203,239,0.15)]"
          style={{ fontSize: "clamp(1.35rem, 4vw, 3rem)" }}>
          {description}
        </p>

        {/* Bottom gradient line */}
        <div className="w-20 h-0.5 mx-auto mt-10 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  );
}
