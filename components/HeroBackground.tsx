export default function HeroBackground() {
  return (
    <>
      {/* Ambient Orbs (static on first paint) */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-175 h-175 rounded-full bg-cyan-400/8 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-indigo-600/8 blur-[100px]" />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
