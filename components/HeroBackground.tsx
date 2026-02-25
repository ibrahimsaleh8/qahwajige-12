"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Gradient mesh — warmer coffee tone + cyan */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(34, 211, 238, 0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(180, 83, 9, 0.04) 0%, transparent 50%), radial-gradient(ellipse 100% 80% at 50% 100%, rgba(15, 23, 42, 0.9) 0%, transparent 60%)",
        }}
      />
      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}
